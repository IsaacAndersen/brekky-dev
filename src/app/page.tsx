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
    <span key={i} className="text-5xl md:text-7xl mx-3 md:mx-5 inline-block">
      {emoji}
    </span>
  ));

  const duration = speed ?? 20;
  const style = {
    animationDuration: `${duration}s`,
  };

  return (
    <div className="marquee-container py-2">
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={style}
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-12 py-6">
        <a
          href="/"
          className="font-[family-name:var(--font-heading)] text-[23px] tracking-[-0.5px] no-underline"
          style={{ color: "var(--color-brand-text)" }}
        >
          Brekky Labs
        </a>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Marquee Section */}
        <section className="py-6 md:py-10">
          <Marquee emoji="🥚" count={12} speed={24} />
          <Marquee emoji="🐣" count={12} reverse speed={20} />
          <Marquee emoji="🐥" count={12} speed={18} />
        </section>

        {/* Contact Section */}
        <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left - Text */}
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-[3.7rem] leading-[1.06] tracking-[-0.02em] font-normal mb-8">
                Contact Us
              </h1>
              <p className="font-[family-name:var(--font-body)] text-base mb-4">
                Brekky Labs is a software development studio based in
                Pittsburgh, PA.
              </p>
              <p className="font-[family-name:var(--font-body)] text-base mb-4">
                We get excited with creative design and ideas that stir the pot.
              </p>
              <p className="font-[family-name:var(--font-body)] text-base">
                Stay tuned for what&apos;s cooking.
              </p>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <p className="font-[family-name:var(--font-heading)] text-3xl">
                    Thank you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <fieldset className="border-none p-0 mb-5">
                    <legend className="font-[family-name:var(--font-body)] text-base font-semibold mb-3">
                      Name
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-[family-name:var(--font-body)] text-xs block mb-1">
                          First Name{" "}
                          <span className="opacity-60">(required)</span>
                        </label>
                        <input
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
                        <label className="font-[family-name:var(--font-body)] text-xs block mb-1">
                          Last Name{" "}
                          <span className="opacity-60">(required)</span>
                        </label>
                        <input
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
                  <div className="mb-5">
                    <label className="font-[family-name:var(--font-body)] text-xs block mb-1">
                      Email <span className="opacity-60">(required)</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-body)] text-xs block mb-1">
                      Message <span className="opacity-60">(required)</span>
                    </label>
                    <textarea
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
                    className="send-btn mt-2"
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
      <footer className="py-8 text-center">
        <p className="font-[family-name:var(--font-body)] text-sm">
          <strong>Brekky Labs, LLC</strong>
        </p>
      </footer>
    </div>
  );
}
