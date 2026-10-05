import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/relient_db';

app.use(cors());
app.use(express.json());

// In-Memory fallback cache if local MongoDB instance is offline
let memoryStore = [];
let isConnectedToMongo = false;

// MongoDB Mongoose Schema & Model
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  service: { type: String, default: 'Website' },
  budget: { type: String, default: '₹30,000 - ₹75,000' },
  bookingDate: { type: String },
  bookingTime: { type: String },
  callType: { type: String, default: 'Google Meet' },
  message: { type: String },
  termsAccepted: { type: Boolean, default: false },
  termsAcceptedAt: { type: Date },
  clientTimezone: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { serverSelectionTimeoutMS: 3000 })
  .then(() => {
    isConnectedToMongo = true;
    console.log('✅ Connected to MongoDB Database successfully!');
  })
  .catch((err) => {
    isConnectedToMongo = false;
    console.log('⚠️ MongoDB Local/Atlas Connection Warning (using active memory store):', err.message);
    console.log('👉 To connect MongoDB Atlas, set MONGODB_URI=mongodb+srv://... in .env file');
  });

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: isConnectedToMongo ? 'MongoDB Connected' : 'Memory Store Active',
    mongoUri: MONGODB_URI,
  });
});

// POST /api/inquiries - Save inquiry to MongoDB
app.post('/api/inquiries', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      booking_date,
      booking_time,
      call_type,
      message,
      terms_accepted,
      terms_accepted_at,
      client_timezone,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    const payload = {
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || 'Website',
      budget: budget || '₹30,000 - ₹75,000',
      bookingDate: booking_date || '',
      bookingTime: booking_time || '',
      callType: call_type || 'Google Meet',
      message: message || '',
      termsAccepted: Boolean(terms_accepted),
      termsAcceptedAt: terms_accepted_at ? new Date(terms_accepted_at) : new Date(),
      clientTimezone: client_timezone || 'UTC',
      createdAt: new Date(),
    };

    if (isConnectedToMongo) {
      const newInquiry = new Inquiry(payload);
      const savedInquiry = await newInquiry.save();
      console.log('📥 Saved new inquiry to MongoDB:', savedInquiry);
      return res.status(201).json({ success: true, data: savedInquiry, source: 'MongoDB' });
    } else {
      payload.id = 'MEM-' + Date.now().toString().slice(-6);
      memoryStore.unshift(payload);
      console.log('📥 Saved new inquiry to Active Store with Terms Timestamp:', payload);
      return res.status(201).json({ success: true, data: payload, source: 'Active Memory Store' });
    }
  } catch (err) {
    console.error('Error saving inquiry:', err);
    res.status(500).json({ error: 'Failed to process inquiry submission.' });
  }
});

// GET /api/inquiries - Fetch all inquiries from MongoDB
app.get('/api/inquiries', async (req, res) => {
  try {
    if (isConnectedToMongo) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: inquiries.length, data: inquiries, source: 'MongoDB' });
    } else {
      return res.json({ success: true, count: memoryStore.length, data: memoryStore, source: 'Active Memory Store' });
    }
  } catch (err) {
    console.error('Error fetching inquiries:', err);
    res.status(500).json({ error: 'Failed to fetch inquiries.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 RELIENT MongoDB Backend API Server running on http://localhost:${PORT}`);
});
