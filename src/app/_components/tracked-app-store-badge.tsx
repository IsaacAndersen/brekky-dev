"use client";

import { trackAppStoreClick } from "./posthog-tracker";

export function TrackedAppStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", transition: "opacity 0.2s" }}
      onClick={() => trackAppStoreClick()}
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        style={{ height: 54 }}
      />
    </a>
  );
}
