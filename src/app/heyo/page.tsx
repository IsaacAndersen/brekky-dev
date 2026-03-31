import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "heyo: reach out — Message a friend. Unlock your day.",
  description:
    "heyo blocks your apps until you message someone.",
};

const heading = {
  fontFamily: "var(--font-heading), 'Young Serif', serif",
} as const;

const body = {
  fontFamily: "var(--font-body), 'Bitter', serif",
} as const;

const PURPLE = "#9370DB";

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(147, 112, 219, 0.08)",
        borderRadius: "16px",
        padding: "24px 28px",
      }}
    >
      <h3
        style={{
          ...heading,
          fontSize: 20,
          fontWeight: 400,
          marginBottom: 6,
          color: "#2d2d2a",
        }}
      >
        {title}
      </h3>
      <p style={{ ...body, fontSize: 15, lineHeight: "24px", color: "#2d2d2a", opacity: 0.7 }}>
        {description}
      </p>
    </div>
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
          color: PURPLE,
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
          color: "#2d2d2a",
        }}
      >
        {title}
      </h3>
      <p style={{ ...body, fontSize: 15, lineHeight: "24px", color: "#2d2d2a", opacity: 0.7 }}>
        {description}
      </p>
    </div>
  );
}

export default function HeyoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFF8F0",
        color: "#2d2d2a",
      }}
    >
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
            color: "#2d2d2a",
            textDecoration: "none",
          }}
        >
          Brekky Labs
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <img
              src="/heyo-icon.png"
              alt="heyo app icon"
              style={{
                width: 48,
                height: 48,
                borderRadius: 11,
              }}
            />
            <p
              style={{
                ...body,
                fontSize: 14,
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
                color: PURPLE,
              }}
            >
              heyo: reach out
            </p>
          </div>
          <h1
            style={{
              ...heading,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: 24,
              maxWidth: 700,
              color: "#2d2d2a",
            }}
          >
            Message a friend. Unlock your day.
          </h1>
          <p
            style={{
              ...body,
              fontSize: "clamp(17px, 2vw, 20px)",
              lineHeight: 1.5,
              maxWidth: 540,
              marginBottom: 40,
              color: "#2d2d2a",
              opacity: 0.7,
            }}
          >
            heyo blocks your apps until you message someone.
          </p>
          <p
            style={{
              ...body,
              fontSize: 15,
              color: PURPLE,
            }}
          >
            Coming soon to iOS
          </p>

          {/* Screenshot placeholder */}
          <div
            style={{
              marginTop: 60,
              background: `linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(147, 112, 219, 0.12) 100%)`,
              borderRadius: 16,
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 700,
            }}
          >
            <p style={{ ...body, fontSize: 15, color: PURPLE, opacity: 0.4 }}>
              Screenshots coming soon
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section
          style={{
            padding: "40px clamp(20px, 4vw, 50px) 80px",
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
              color: "#2d2d2a",
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
              title="Pick your apps."
              description="Choose which apps to block. Social media, games, whatever you want to limit. heyo locks them each day."
            />
            <Step
              number="02"
              title="Reach out."
              description="Send a message to someone in your contacts. A friend, a family member, anyone real."
            />
            <Step
              number="03"
              title="Go about your day."
              description="Apps unlock. Track your streak and see who you've been talking to."
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
              color: "#2d2d2a",
            }}
          >
            The deal.
          </h2>
          <p
            style={{
              ...body,
              fontSize: 17,
              lineHeight: "28px",
              maxWidth: 600,
              marginBottom: 16,
              color: "#2d2d2a",
              opacity: 0.7,
            }}
          >
            heyo asks you to text someone before your apps unlock.
            One message, then you&apos;re done.
          </p>
          <p
            style={{
              ...body,
              fontSize: 17,
              lineHeight: "28px",
              maxWidth: 600,
              color: "#2d2d2a",
              opacity: 0.7,
            }}
          >
            The streak tracks your consistency. The blocking is just the
            mechanism.
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
              color: "#2d2d2a",
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
              title="App blocking"
              description="Pick which apps to lock. They stay blocked until you reach out to someone. Uses iOS Screen Time, no workarounds."
            />
            <Feature
              title="Smart suggestions"
              description="Your favorites show up first. Friends you haven't talked to in a while get surfaced. One tap to message or call."
            />
            <Feature
              title="Flexible schedule"
              description="Block all day or set a custom window. Take a break when you need one. Pause entirely if life gets busy."
            />
            <Feature
              title="Privacy first"
              description="All data stays on your device. No account, no sync, no tracking. Delete the app and it's gone."
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
              color: "#2d2d2a",
            }}
          >
            One message to start your day.
          </h2>
          <p
            style={{
              ...body,
              fontSize: 15,
              color: PURPLE,
            }}
          >
            Coming soon to iOS
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "32px clamp(20px, 4vw, 50px)",
          textAlign: "center" as const,
        }}
      >
        <p style={{ ...body, fontSize: 14, color: "#2d2d2a", opacity: 0.4, marginBottom: 8 }}>
          Made by{" "}
          <a href="/" style={{ color: "#2d2d2a" }}>
            Brekky Labs
          </a>{" "}
          in Pittsburgh.
        </p>
        <p style={{ ...body, fontSize: 13, color: "#2d2d2a", opacity: 0.3 }}>
          <a href="/support" style={{ color: "#2d2d2a" }}>
            Support
          </a>
          {" · "}
          <a href="/privacy" style={{ color: "#2d2d2a" }}>
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
}
