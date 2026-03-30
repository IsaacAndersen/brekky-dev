"use client";

import { useState, FormEvent } from "react";

function Marquee({
  emoji,
  count,
  reverse,
  speed,
}: {
  emoji: string;
  count: number;
  reverse?: boolean;
  speed?: number;
}) {
  const items = Array.from({ length: count }, (_, i) => (
    <span
      key={i}
      style={{ fontSize: 62, margin: "0 20px", display: "inline-block" }}
    >
      {emoji}
    </span>
  ));

  return (
    <div className="marquee-container">
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ animationDuration: `${speed ?? 20}s` }}
      >
        {items}
        {items}
      </div>
    </div>
  );
}

const heading = {
  fontFamily: "var(--font-heading), 'Young Serif', serif",
} as const;

const body = {
  fontFamily: "var(--font-body), 'Bitter', serif",
} as const;

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

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
      <main style={{ flex: 1 }}>
        {/* Marquee Section */}
        <section style={{ padding: "4px 0" }}>
          <Marquee emoji="🥚" count={16} speed={60} />
          <Marquee emoji="🐣" count={16} reverse speed={50} />
          <Marquee emoji="🐥" count={16} speed={45} />
        </section>

        {/* Apps Section */}
        <section style={{ padding: "60px clamp(20px, 4vw, 50px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                ...heading,
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 400,
                marginBottom: 32,
                letterSpacing: "-0.02em",
              }}
            >
              Our Apps
            </h2>
            <a
              href="/1task"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "20px 24px",
                backgroundColor: "var(--color-input-bg)",
                borderRadius: "15px 0px",
                textDecoration: "none",
                color: "var(--color-brand-text)",
                maxWidth: 480,
                transition: "opacity 0.2s",
              }}
            >
              <img
                src="/app-icon.png"
                alt="1Task app icon"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ ...heading, fontSize: 20, fontWeight: 400, marginBottom: 4 }}>
                  1Task
                </p>
                <p style={{ ...body, fontSize: 14, opacity: 0.6 }}>
                  Focus timer for iOS. One thing at a time.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "68px clamp(20px, 4vw, 50px) 80px" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div className="contact-grid">
              {/* Left - Text */}
              <div>
                <h1
                  style={{
                    ...heading,
                    fontSize: "clamp(40px, 5vw, 62px)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                    marginBottom: 32,
                  }}
                >
                  Contact Us
                </h1>
                <p style={{ ...body, fontSize: 16, lineHeight: "24px", marginTop: 16, marginBottom: 16 }}>
                  Brekky Labs is a software development studio based in
                  Pittsburgh, PA.
                </p>
                <p style={{ ...body, fontSize: 16, lineHeight: "24px", marginTop: 16, marginBottom: 16 }}>
                  We get excited with creative design and ideas that stir the pot.
                </p>
                <p style={{ ...body, fontSize: 16, lineHeight: "24px", marginTop: 16 }}>
                  Stay tuned for what&apos;s cooking.
                </p>
              </div>

              {/* Right - Form */}
              <div>
                {submitted ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <p style={{ ...heading, fontSize: 30 }}>Thank you!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <fieldset
                      style={{
                        border: "none",
                        padding: 0,
                        margin: 0,
                        marginBottom: 20,
                      }}
                    >
                      <legend
                        style={{
                          ...body,
                          fontSize: 16,
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        Name
                      </legend>
                      <div className="name-grid">
                        <div>
                          <label style={{ ...body, fontSize: 12, display: "block", marginBottom: 4 }}>
                            First Name{" "}
                            <span style={{ opacity: 0.6 }}>(required)</span>
                          </label>
                          <input
                            className="form-input"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label style={{ ...body, fontSize: 12, display: "block", marginBottom: 4 }}>
                            Last Name{" "}
                            <span style={{ opacity: 0.6 }}>(required)</span>
                          </label>
                          <input
                            className="form-input"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* Email */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ ...body, fontSize: 16, display: "block", paddingBottom: 4 }}>
                        Email <span style={{ opacity: 0.6 }}>(required)</span>
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ ...body, fontSize: 16, display: "block", paddingBottom: 4 }}>
                        Message <span style={{ opacity: 0.6 }}>(required)</span>
                      </label>
                      <textarea
                        className="form-textarea"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={sending} className="send-btn">
                      {sending ? "Sending..." : "Send"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: "32px 0", textAlign: "center" }}>
        <p style={{ ...body, fontSize: 14.5, marginBottom: 8 }}>
          <strong>Brekky Labs, LLC</strong>
        </p>
        <p style={{ ...body, fontSize: 13, opacity: 0.5 }}>
          <a href="/support" style={{ color: "var(--color-brand-text)" }}>Support</a>
          {" · "}
          <a href="/privacy" style={{ color: "var(--color-brand-text)" }}>Privacy</a>
        </p>
      </footer>
    </div>
  );
}
