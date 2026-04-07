"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogTracker({
  apiKey,
  apiHost,
}: {
  apiKey: string;
  apiHost: string;
}) {
  useEffect(() => {
    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "memory",
    });

    return () => {
      posthog.reset();
    };
  }, [apiKey, apiHost]);

  return null;
}

export function trackAppStoreClick() {
  posthog.capture("app_store_link_clicked", {
    source: "website",
    page: window.location.pathname,
  });
}
