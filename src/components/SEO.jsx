export default function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "balizana Technologies",
    "url": "https://balizana.com",
    "logo": "https://balizana.com/logo.png",
    "description": "Enterprise-grade custom software solutions including inventory systems, auction platforms, and procurement solutions.",
    "sameAs": [
      "https://www.linkedin.com/company/balizana",
      "https://twitter.com/balizana",
      "https://facebook.com/balizana"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96350-88335",
      "contactType": "Customer Service",
      "email": "info@balizana.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Software Technology Park of India, Room No.1, Mangal Bhawan, Nehru Nagar East",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "postalCode": "490006",
      "addressCountry": "IN"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
