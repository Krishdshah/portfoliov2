"use client";

import dynamic from "next/dynamic";

const PDF = dynamic(() => import("./pdf-viewer-client"), {
  ssr: false,
});

export default function PDFViewer() {
  return <PDF />;
}