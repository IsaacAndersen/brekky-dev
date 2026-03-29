import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1Task: Focus timer — One thing at a time",
  description:
    "1Task is a focus timer for iOS. One task at a time.",
};

const heading = {
  fontFamily: "var(--font-heading), 'Young Serif', serif",
} as const;

const body = {
  fontFamily: "var(--font-body), 'Bitter', serif",
} as const;

const APP_STORE_URL = "https://apps.apple.com/app/id6756553551";

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "14px 28px",
        backgroundColor: "var(--color-brand-btn)",
        color: "var(--color-brand-btn-text)",
        borderRadius: "45px 0px",
        textDecoration: "none",
        ...body,
        fontSize: 16,
        transition: "opacity 0.2s",
      }}
    >
      Download on the App Store
    </a>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ flex: 1, minWidth: 240 }}>
      <p
        style={{
          ...body,
          fontSize: 13,
          opacity: 0.4,
          marginBottom: 6,
          letterSpacing: "0.05em",
          textTransform: "uppercase" as const,
        }}
      >
        {number}
      </p>
      <h3
        style={{
          ...heading,
          fontSize: 22,
          fontWeight: 400,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ ...body, fontSize: 15, lineHeight: "24px", opacity: 0.75 }}>
        {description}
      </p>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-input-bg)",
        borderRadius: "15px 0px",
        padding: "24px 28px",
      }}
    >
      <h3
        style={{
          ...heading,
          fontSize: 20,
          fontWeight: 400,
          marginBottom: 6,
        }}
      >
        {title}
      </h3>
      <p style={{ ...body, fontSize: 15, lineHeight: "24px", opacity: 0.75 }}>
        {description}
      </p>
    </div>
  );
}

export default function OneTaskPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        style={{
          padding: "0 clamp(20px, 4vw, 50px)",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...body,
            fontSize: 14,
            color: "var(--color-brand-text)",
            textDecoration: "none",
            opacity: 0.6,
          }}
        >
          App Store
        </a>
      </header>

      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            padding: "80px clamp(20px, 4vw, 50px) 60px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              ...body,
              fontSize: 14,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              opacity: 0.4,
              marginBottom: 16,
            }}
          >
            1Task: Focus timer
          </p>
          <h1
            style={{
              ...heading,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: 24,
              maxWidth: 700,
            }}
          >
            Your to-do list is the problem.
          </h1>
          <p
            style={{
              ...body,
              fontSize: "clamp(17px, 2vw, 20px)",
              lineHeight: 1.5,
              maxWidth: 540,
              marginBottom: 40,
              opacity: 0.75,
            }}
          >
            1Task is a focus timer for iOS. One task, one timer, and a
            moment to reflect when you are done.
          </p>
          <AppStoreBadge />

          {/* Screenshot placeholder */}
          <div
            style={{
              marginTop: 60,
              backgroundColor: "var(--color-input-bg)",
              borderRadius: "15px 0px",
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 700,
            }}
          >
            <p style={{ ...body, fontSize: 15, opacity: 0.3 }}>
              Screenshots coming soon
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section
          style={{
            padding: "80px clamp(20px, 4vw, 50px)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 400,
              marginBottom: 48,
              letterSpacing: "-0.02em",
            }}
          >
            How it works.
          </h2>
          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "wrap" as const,
            }}
          >
            <Step
              number="01"
              title="Type your task."
              description='The app asks "What&#39;s next?" You type one thing. A timer starts. No inbox, no backlog, no prioritization.'
            />
            <Step
              number="02"
              title="Focus."
              description="The timer runs. Pause if you need to. Nothing else competing for your attention."
            />
            <Step
              number="03"
              title="Reflect."
              description="Done? Rate how it felt. Add a note if you want. Move on."
            />
          </div>
        </section>

        {/* Why */}
        <section
          style={{
            padding: "60px clamp(20px, 4vw, 50px)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 400,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            The anti-list app.
          </h2>
          <p
            style={{
              ...body,
              fontSize: 17,
              lineHeight: "28px",
              maxWidth: 600,
              marginBottom: 16,
              opacity: 0.75,
            }}
          >
            Most productivity apps help you manage more tasks. 1Task only
            lets you have one. Pick something, do it, reflect on how it went.
          </p>
          <p
            style={{
              ...body,
              fontSize: 17,
              lineHeight: "28px",
              maxWidth: 600,
              opacity: 0.75,
            }}
          >
            The reflection after each task builds up over time. You start to
            see patterns in your focus, your energy, and what kind of work
            drains you.
          </p>
        </section>

        {/* Features */}
        <section
          style={{
            padding: "60px clamp(20px, 4vw, 50px) 80px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 400,
              marginBottom: 32,
              letterSpacing: "-0.02em",
            }}
          >
            Features.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            <Feature
              title="Live Activity + Dynamic Island"
              description="Timer on your lock screen without opening the app. Glance and get back to work."
            />
            <Feature
              title="Home screen widget"
              description="See your task, pause, or complete it right from your home screen. No app launch needed."
            />
            <Feature
              title="Siri Shortcuts"
              description="&quot;Start a task called...&quot; Hands-free task creation when your hands are full."
            />
            <Feature
              title="Streaks + analytics"
              description="Daily streaks, focus time charts, sentiment tracking. See your patterns over days and weeks."
            />
            <Feature
              title="Reflection"
              description="Sentiment rating and notes after each task. Builds self-awareness without the overhead of journaling."
            />
            <Feature
              title="Privacy by architecture"
              description="All data stays on your device. No account, no sync, no tracking."
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          style={{
            padding: "60px clamp(20px, 4vw, 50px) 100px",
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center" as const,
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 400,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            One thing at a time.
          </h2>
          <p
            style={{
              ...body,
              fontSize: 17,
              opacity: 0.6,
              marginBottom: 32,
            }}
          >
            Free on iPhone.
          </p>
          <AppStoreBadge />
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "32px clamp(20px, 4vw, 50px)",
          textAlign: "center" as const,
        }}
      >
        <p style={{ ...body, fontSize: 14, opacity: 0.5, marginBottom: 8 }}>
          Made by{" "}
          <a href="/" style={{ color: "var(--color-brand-text)" }}>
            Brekky Labs
          </a>{" "}
          in Pittsburgh.
        </p>
        <p style={{ ...body, fontSize: 13, opacity: 0.4 }}>
          <a href="/support" style={{ color: "var(--color-brand-text)" }}>
            Support
          </a>
          {" · "}
          <a href="/privacy" style={{ color: "var(--color-brand-text)" }}>
            Privacy
          </a>
          {" · "}
          <a
            href="mailto:onetask+support@brekky.dev"
            style={{ color: "var(--color-brand-text)" }}
          >
            onetask+support@brekky.dev
          </a>
        </p>
      </footer>
    </div>
  );
}
