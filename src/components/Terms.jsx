import React from 'react';

const Terms = () => {
  return (
    <div className="terms-container" style={{ padding: '120px 5% 80px', maxWidth: '800px', margin: '0 auto', color: 'var(--text)' }}>
      <h1 className="hero-h1">Terms of Service</h1>
      <p style={{ marginBottom: '20px', color: 'var(--text3)' }}>Last updated: April 2026</p>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Acceptance of Terms</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          By accessing or using the Website, you agree to follow and be bound by these Terms of Service. If you do not agree to these Terms, you should not access or use the Website.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Use of the Website</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          The Website and its entire contents, features, and functionality (including all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by balizana Technologies and its licensors.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Professional Services</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          The services provided by balizana Technologies, including custom software development, enterprise IT consulting, and system integration, are subject to separate service agreements. Use of the Website does not constitute a service agreement.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>4. Limitation of Liability</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          In no event will balizana Technologies, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>5. Governing Law</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          All matters relating to the Website and these Terms of Service, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the laws of the Jurisdiction where the company is headquartered.
        </p>
      </section>
    </div>
  );
};

export default Terms;
