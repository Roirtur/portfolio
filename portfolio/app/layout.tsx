"use client";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { useState } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import events from "@/scripts/events";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ;
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
    }, 600);

    setRouteChangeTimeout(timeout);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProviderWrapper>
          <Navbar onRouteChange={handleRouteChange} />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}