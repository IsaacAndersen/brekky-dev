import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "heyo: reach out",
  description:
    "An iOS app that blocks selected apps until a message goes out.",
  icons: {
    icon: "/heyo-icon.png",
  },
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
              style={{ width: 48, height: 48, borderRadius: 11 }}
            />
            <p
              style={{
                ...heading,
                fontSize: 22,
                letterSpacing: "-0.01em",
                color: PURPLE,
              }}
            >
              heyo
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
            Stay close to the people who matter.
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
            heyo locks selected apps until a message goes out. Pick
            the people, pick the apps. One text and everything opens
            back up.
          </p>
          <a
            href="https://apps.apple.com/app/id6761399207"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", transition: "opacity 0.2s" }}
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              style={{ height: 54 }}
            />
          </a>

          {/* Screenshots */}
          <div
            style={{
              marginTop: 60,
              display: "flex",
              gap: 16,
              overflowX: "auto" as const,
              scrollSnapType: "x mandatory" as const,
              scrollBehavior: "smooth" as const,
              paddingBottom: 16,
              maxWidth: "calc(100vw - clamp(40px, 8vw, 100px))",
              scrollbarWidth: "none" as const,
            }}
          >
            {["1_1_locked", "2_4_message_prompts", "3_2_complete_streak", "4_3_shield", "5_5_progress"].map((name) => (
              <img
                key={name}
                src={`/screenshots/heyo/${name}.png`}
                alt={`heyo screenshot`}
                style={{
                  height: 500,
                  width: "auto",
                  borderRadius: "12px",
                  flexShrink: 0,
                  scrollSnapAlign: "start" as const,
                }}
              />
            ))}
          </div>
        </section>

        {/* Features */}
        <section
          style={{
            padding: "40px clamp(20px, 4vw, 50px) 80px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            <Feature
              title="Smart suggestions"
              description="Favorites first. People who haven't been contacted in a while get bumped up. One tap to message or call."
            />
            <Feature
              title="App blocking"
              description="Selected apps stay locked until a message goes out. Uses iOS Screen Time."
            />
            <Feature
              title="Flexible schedule"
              description="Block all day or set a custom window. Breaks and pauses built in."
            />
            <Feature
              title="Privacy first"
              description="Your data stays on your device. No account, no sync. Anonymous usage analytics only."
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          style={{
            padding: "40px clamp(20px, 4vw, 50px) 100px",
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
            One message to start the day.
          </h2>
          <a
            href="https://apps.apple.com/app/id6761399207"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", transition: "opacity 0.2s" }}
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              style={{ height: 54 }}
            />
          </a>
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
