"use client";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import MobileWarning from "@/components/MobileWarning";
import { useState } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import events from "@/scripts/events";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();
  const router = useRouter();
  const pathname = usePathname();

  const [routeChangeTimeout, setRouteChangeTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleRouteChange = (newRoute: string) => {
    events.emit("routeChanged", newRoute);

    if (routeChangeTimeout) {
      clearTimeout(routeChangeTimeout);
    }

    const timeout = setTimeout(() => {
      if (newRoute !== pathname) {
        router.push(newRoute);
      }
    }, 700);

    setRouteChangeTimeout(timeout);
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProviderWrapper>
          {isMobile ? (
            <MobileWarning />
          ) : (
            <>
              <Navbar onRouteChange={handleRouteChange} />
              {children}
            </>
          )}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}