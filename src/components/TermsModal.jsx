'use client';

import React from 'react';
import { X, FileText } from 'lucide-react';

export default function TermsModal({ isOpen, onClose, onAccept }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          backgroundColor: '#0d0d10',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px 18px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#0b0b0d',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#141417',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ededed',
              }}
            >
              <FileText size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ededed', margin: 0 }}>
                Terms & Conditions
              </h3>
              <p style={{ fontSize: '0.78rem', fontFamily: 'var(--mono)', color: '#6b6b70', margin: 0 }}>
                RELIENT TECHNOLOGY SOLUTIONS • CLIENT AGREEMENT
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close terms dialog"
            style={{
              background: 'none',
              border: 'none',
              color: '#6b6b70',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div
          style={{
            padding: '28px',
            overflowY: 'auto',
            fontSize: '0.9rem',
            color: '#a1a1a6',
            lineHeight: 1.65,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ededed', marginBottom: '6px' }}>
              1. Engagement & Scoping
            </h4>
            <p>
              All projects undertaken by Relient are governed by a mutually executed Statement of Work (SOW). Initial estimates and consultation discussions represent baseline projections. Final deliverables, technical specifications, third-party API dependencies, and delivery timelines are formalized prior to project commencement.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ededed', marginBottom: '6px' }}>
              2. Intellectual Property Rights
            </h4>
            <p>
              Upon full settlement of agreed project milestone invoices, all bespoke source code, database architectures, user interface assets, and custom logic created exclusively for the client shall transfer to the client. Relient retains ownership of proprietary foundational libraries and reusable modules.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ededed', marginBottom: '6px' }}>
              3. Data Privacy & Confidentiality
            </h4>
            <p>
              Relient treats all proprietary client documentation, database contents, customer records, and internal business logic with strict confidentiality. Non-Disclosure Agreements (NDAs) are executed upon request prior to technical scoping sessions.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px',
            backgroundColor: '#0b0b0d',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: '9px 18px', fontSize: '0.86rem' }}
          >
            Close
          </button>
          {onAccept && (
            <button
              type="button"
              onClick={onAccept}
              className="btn btn-metal"
              style={{ padding: '9px 20px', fontSize: '0.86rem' }}
            >
              Acknowledge & Agree
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
