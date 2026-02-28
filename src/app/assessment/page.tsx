'use client';

import { useEffect } from 'react';

export default function AssessmentPage() {
  useEffect(() => {
    // Redirect to the standalone assessment HTML
    window.location.replace('/assessment.html');
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F7F3ED'
    }}>
      <div style={{
        textAlign: 'center',
        fontFamily: "'Cormorant Garamond', Georgia, serif"
      }}>
        <div style={{
          fontSize: '48px',
          fontWeight: 300,
          color: '#1B2A4A',
          letterSpacing: '16px',
          marginBottom: '16px'
        }}>
          ATLAS
        </div>
        <div style={{
          fontSize: '14px',
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Loading Assessment...
        </div>
      </div>
    </div>
  );
}
