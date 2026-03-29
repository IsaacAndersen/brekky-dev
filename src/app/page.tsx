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
          padding: "0 50px",
          height: 80,
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
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
          <Marquee emoji="🥚" count={12} speed={24} />
          <Marquee emoji="🐣" count={12} reverse speed={20} />
          <Marquee emoji="🐥" count={12} speed={18} />
        </section>

        {/* Contact Section */}
        <section style={{ padding: "68px 50px 80px" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1.7fr",
              gap: 64,
            }}
          >
            {/* Left - Text */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 62,
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: 32,
                }}
              >
                Contact Us
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: "24px",
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                Brekky Labs is a software development studio based in
                Pittsburgh, PA.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: "24px",
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                We get excited with creative design and ideas that stir the pot.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: "24px",
                  marginTop: 16,
                }}
              >
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
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 30,
                    }}
                  >
                    Thank you!
                  </p>
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
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        fontWeight: 600,
                        marginBottom: 8,
                      }}
                    >
                      Name
                    </legend>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <div>
                        <label
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            display: "block",
                            marginBottom: 4,
                          }}
                        >
                          First Name{" "}
                          <span style={{ opacity: 0.6 }}>(required)</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            display: "block",
                            marginBottom: 4,
                          }}
                        >
                          Last Name{" "}
                          <span style={{ opacity: 0.6 }}>(required)</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Email */}
                  <div style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        display: "block",
                        paddingBottom: 4,
                      }}
                    >
                      Email{" "}
                      <span style={{ opacity: 0.6 }}>(required)</span>
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
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        display: "block",
                        paddingBottom: 4,
                      }}
                    >
                      Message{" "}
                      <span style={{ opacity: 0.6 }}>(required)</span>
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
                  <button
                    type="submit"
                    disabled={sending}
                    className="send-btn"
                  >
                    {sending ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: "32px 0", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5 }}>
          <strong>Brekky Labs, LLC</strong>
        </p>
      </footer>
    </div>
  );
}
