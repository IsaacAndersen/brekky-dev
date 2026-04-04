import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Brekky Labs",
  description: "Get help with Brekky Labs apps.",
};

const heading = {
  fontFamily: "var(--font-heading), 'Young Serif', serif",
} as const;

const body = {
  fontFamily: "var(--font-body), 'Bitter', serif",
} as const;

export default function SupportPage() {
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
              marginBottom: 16,
            }}
          >
            Support
          </h1>
          <p style={{ ...body, fontSize: 16, lineHeight: "26px", marginBottom: 32, opacity: 0.7 }}>
            We&apos;re here to help. If you have a question, found a bug, or
            need assistance with any of our apps, reach out and we&apos;ll get
            back to you as soon as we can.
          </p>

          {/* Contact */}
          <section style={{ marginBottom: 48 }}>
            <h2
              style={{
                ...heading,
                fontSize: 28,
                fontWeight: 400,
                marginBottom: 16,
              }}
            >
              Contact Us
            </h2>
            <p style={{ ...body, fontSize: 16, lineHeight: "26px", marginBottom: 12 }}>
              The fastest way to reach us is by email. We aim to respond within
              1–2 business days.
            </p>
            <p style={{ ...body, fontSize: 16, lineHeight: "26px", marginBottom: 8 }}>
              <strong>General support:</strong>{" "}
              <a href="mailto:support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                support@brekky.dev
              </a>
            </p>
            <p style={{ ...body, fontSize: 16, lineHeight: "26px", marginBottom: 8 }}>
              <strong>heyo support:</strong>{" "}
              <a href="mailto:heyo+support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                heyo+support@brekky.dev
              </a>
            </p>
            <p style={{ ...body, fontSize: 16, lineHeight: "26px" }}>
              <strong>1Task support:</strong>{" "}
              <a href="mailto:onetask+support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                onetask+support@brekky.dev
              </a>
            </p>
          </section>

          {/* Apps */}
          <section style={{ marginBottom: 48 }}>
            <h2
              style={{
                ...heading,
                fontSize: 28,
                fontWeight: 400,
                marginBottom: 16,
              }}
            >
              Our Apps
            </h2>

            <div
              style={{
                backgroundColor: "var(--color-input-bg)",
                borderRadius: "15px 0px",
                padding: "24px 28px",
                marginBottom: 16,
              }}
            >
              <h3 style={{ ...heading, fontSize: 22, fontWeight: 400, marginBottom: 8 }}>
                <a href="/heyo" style={{ color: "inherit", textDecoration: "none" }}>heyo</a>
              </h3>
              <p style={{ ...body, fontSize: 15, lineHeight: "24px", marginBottom: 12 }}>
                heyo blocks selected apps until you message a friend. Pick the
                people, pick the apps — one text and everything opens back up.
                Stay close to the people who matter.
              </p>
              <p style={{ ...body, fontSize: 14, opacity: 0.6 }}>
                <a href="https://apps.apple.com/app/id6761399207" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  iOS &middot; Available on the App Store
                </a>
              </p>
            </div>

            <div
              style={{
                backgroundColor: "var(--color-input-bg)",
                borderRadius: "15px 0px",
                padding: "24px 28px",
                marginBottom: 16,
              }}
            >
              <h3 style={{ ...heading, fontSize: 22, fontWeight: 400, marginBottom: 8 }}>
                <a href="/1task" style={{ color: "inherit", textDecoration: "none" }}>1Task</a>
              </h3>
              <p style={{ ...body, fontSize: 15, lineHeight: "24px", marginBottom: 12 }}>
                A single-task focus app for iOS. 1Task helps you concentrate
                on what matters by letting you work on one thing at a time —
                with built-in timers, reflections, and focus analytics.
              </p>
              <p style={{ ...body, fontSize: 14, opacity: 0.6 }}>
                iOS &middot; Coming soon
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2
              style={{
                ...heading,
                fontSize: 28,
                fontWeight: 400,
                marginBottom: 16,
              }}
            >
              Frequently Asked Questions
            </h2>

            <div style={{ marginBottom: 20 }}>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px", fontWeight: 600, marginBottom: 4 }}>
                Is my data stored in the cloud?
              </p>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px" }}>
                Your personal data stays on your device. We collect anonymous
                usage analytics to improve our apps, but nothing is ever tied
                to you individually. See our{" "}
                <a href="/privacy" style={{ color: "var(--color-brand-text)" }}>privacy policy</a>{" "}
                for details.
              </p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px", fontWeight: 600, marginBottom: 4 }}>
                How do I report a bug?
              </p>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px" }}>
                Send an email to{" "}
                <a href="mailto:support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                  support@brekky.dev
                </a>{" "}
                with a description of the issue, your device model, and iOS
                version. Screenshots are always helpful.
              </p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px", fontWeight: 600, marginBottom: 4 }}>
                Can I request a feature?
              </p>
              <p style={{ ...body, fontSize: 16, lineHeight: "26px" }}>
                Absolutely. We love hearing ideas. Email us at{" "}
                <a href="mailto:support@brekky.dev" style={{ color: "var(--color-brand-text)" }}>
                  support@brekky.dev
                </a>{" "}
                and tell us what you&apos;d like to see.
              </p>
            </div>
          </section>

          {/* Links */}
          <section>
            <p style={{ ...body, fontSize: 15, lineHeight: "24px", opacity: 0.6 }}>
              <a href="/privacy" style={{ color: "var(--color-brand-text)" }}>
                Privacy Policy
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
