import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Brekky Labs",
  description: "Privacy policy for Brekky Labs apps and services.",
};

const heading = {
  fontFamily: "var(--font-heading), 'Young Serif', serif",
} as const;

const body = {
  fontFamily: "var(--font-body), 'Bitter', serif",
} as const;

const sectionStyle = { marginBottom: 36 } as const;
const h2Style = {
  ...heading,
  fontSize: 24,
  fontWeight: 400,
  marginBottom: 12,
} as const;
const pStyle = {
  ...body,
  fontSize: 16,
  lineHeight: "26px",
  marginBottom: 12,
} as const;

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        style={{
          padding: "0 clamp(20px, 4vw, 50px)",
          height: 80,
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            ...heading,
            fontSize: 23,
            letterSpacing: "-0.5px",
            color: "var(--color-brand-text)",
            textDecoration: "none",
          }}
        >
          Brekky Labs
        </a>
      </header>

      {/* Main */}
      <main style={{ flex: 1, padding: "40px clamp(20px, 4vw, 50px) 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              ...heading,
              fontSize: "clamp(36px, 5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: 8,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ ...body, fontSize: 14, opacity: 0.5, marginBottom: 32 }}>
            Effective date: March 29, 2026
          </p>

          <section style={sectionStyle}>
            <p style={pStyle}>
              Brekky Labs, LLC (&ldquo;Brekky Labs,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) builds software for iOS
              and other platforms. This Privacy Policy explains how we handle
              information in connection with our apps and our website at
              brekky.dev.
            </p>
            <p style={pStyle}>
              The short version: <strong>we don&apos;t collect your data.</strong>{" "}
              Our apps are designed to keep your information on your device.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Information We Do Not Collect</h2>
            <p style={pStyle}>
              Our apps do not collect, transmit, or store any personal
              information on external servers. We do not use analytics services,
              advertising frameworks, or third-party tracking of any kind.
            </p>
            <p style={pStyle}>
              Specifically, we do not collect:
            </p>
            <ul style={{ ...body, fontSize: 16, lineHeight: "26px", marginBottom: 12, paddingLeft: 24 }}>
              <li style={{ marginBottom: 6 }}>Names, email addresses, or contact information</li>
              <li style={{ marginBottom: 6 }}>Location data</li>
              <li style={{ marginBottom: 6 }}>Device identifiers or advertising IDs</li>
              <li style={{ marginBottom: 6 }}>Usage analytics or behavioral data</li>
              <li style={{ marginBottom: 6 }}>Health, financial, or biometric data</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Data Stored on Your Device</h2>
            <p style={pStyle}>
              Our apps may store data locally on your device to provide their
              core functionality. For example, One Task stores your tasks,
              timers, reflections, and focus statistics in on-device storage.
              This data never leaves your device and is not accessible to us.
            </p>
            <p style={pStyle}>
              If you delete an app, all locally stored data is removed with it.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Website</h2>
            <p style={pStyle}>
              Our website at brekky.dev does not use cookies, analytics, or
              tracking scripts. If you contact us through our contact form or
              support email, we will only use your information to respond to your
              inquiry.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Third-Party Services</h2>
            <p style={pStyle}>
              Our apps do not integrate with third-party services that collect
              user data. We do not use ad networks, analytics platforms, or
              social media SDKs.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Children&apos;s Privacy</h2>
            <p style={pStyle}>
              Our apps do not knowingly collect information from children under
              13. Because we don&apos;t collect personal information from anyone,
              this applies equally to all users.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Changes to This Policy</h2>
            <p style={pStyle}>
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will update the effective date at the top
              of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Contact</h2>
            <p style={pStyle}>
              If you have questions about this Privacy Policy or our practices,
              contact us at{" "}
              <a href="mailto:support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                support@brekky.dev
              </a>
              .
            </p>
          </section>

          {/* Links */}
          <section>
            <p style={{ ...body, fontSize: 15, lineHeight: "24px", opacity: 0.6 }}>
              <a href="/support" style={{ color: "var(--color-brand-text)" }}>
                Support
              </a>
              {" · "}
              <a href="/" style={{ color: "var(--color-brand-text)" }}>
                Home
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "32px 0", textAlign: "center" }}>
        <p style={{ ...body, fontSize: 14.5 }}>
          <strong>Brekky Labs, LLC</strong>
        </p>
      </footer>
    </div>
  );
}
