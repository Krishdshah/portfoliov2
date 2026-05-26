"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

export default function PDFViewerClient() {
  return (
    <div
      className="
        relative
        overflow-y-auto
        rounded-2xl
        border
        border-white/10
        bg-white
        shadow-2xl
      "
      style={{
        width: "760px",
        height: "82vh",
      }}
    >
      <Document
        file="/resume/krish_d_shah_resume.pdf"
        loading={
          <div className="flex h-full items-center justify-center text-black">
            Loading Dossier...
          </div>
        }
      >
        <Page
          pageNumber={1}
          width={760}
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>
    </div>
  );
}