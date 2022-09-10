// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useRouter } from "next/router";
import { useEffect } from "react";

import { EventInfo } from "@/lib/track";

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
    ga: any;
  }
}

const trackingId = "UA-120251616-1";

export const useTracking = () => {
  const router = useRouter();
  // Initialize ga
  useEffect(() => {
    if (window.ga) return;
    if (trackingId) {
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            // eslint-disable-next-line prefer-rest-params
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
      );

      window.ga("create", trackingId, "auto");
      window.ga("send", "pageview");
    }
  }, []);

  // track events automatically
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    setTimeout(() => {
      if (typeof window.ga === "undefined") return;
      const page = router.basePath + router.pathname;
      window.ga("send", "pageview", page);
    }, 0);
  }, [router.pathname, router.basePath]);

  const track = (info: EventInfo) => {
    if (typeof window === "undefined") return;
    if (typeof window.ga === "undefined") return;
    window.ga("send", {
      hitType: "event",
      ...info,
    });
  };

  return track;
};
