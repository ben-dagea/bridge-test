"use client"

import LiFiWidgetWrapper from "@/component/lifi-widget-wrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="pt-10">
        <LiFiWidgetWrapper />
      </div>
    </Suspense>

  );
}
