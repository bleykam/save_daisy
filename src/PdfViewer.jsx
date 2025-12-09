import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Use the locally bundled worker so the viewer works without hitting the network.
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfViewer({ src }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pageWidth =
    typeof window !== "undefined"
      ? Math.min(720, window.innerWidth - 48)
      : 720;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={pageWidth} />
      </Document>

      {numPages && (
        <div className="mt-3 d-flex align-items-center gap-2">
          <button
            onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
            disabled={pageNumber <= 1}
            className="btn btn-outline-dark btn-sm"
          >
            Prev
          </button>
          <span className="fw-semibold">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="btn btn-outline-dark btn-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default PdfViewer;
