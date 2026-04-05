import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container" style={{ padding: '120px 5% 80px', maxWidth: '800px', margin: '0 auto', color: 'var(--text)' }}>
      <h1 className="hero-h1">Privacy Policy</h1>
      <p style={{ marginBottom: '20px', color: 'var(--text3)' }}>Last updated: April 2026</p>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Introduction</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          At balizana Technologies, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website balizana.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Information We Collect</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          We collect several types of information from and about users of our Website, including:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Personal information such as name, email address, and phone number when you request a quote.</li>
          <li>Usage details, IP addresses, and information collected through cookies.</li>
          <li>Information about your internet connection and the equipment you use to access our Website.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. How We Use Your Information</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          We use information that we collect about you or that you provide to us, including any personal information:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>4. Data Security</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>5. Contact Information</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@balizana.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
