import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ijixsgdywmfsrwulklsg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_LxzYf0K-yLtcj34qPNS5jg_7ZXVrQ2P';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const isSupabaseConfigured = () => true;
