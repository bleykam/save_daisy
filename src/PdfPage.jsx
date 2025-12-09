import { useState } from "react";
import PdfViewer from "./PdfViewer.jsx";
import BondVetPdf from "./assets/Penny_Bond_Vet.pdf";
import BluePearlPdf from "./assets/Penny_Blue_Pearl.pdf";

const reports = [
  {
    id: "bond",
    title: "Bond Vet Report",
    file: BondVetPdf,
  },
  {
    id: "bluepearl",
    title: "BluePearl ER Report",
    file: BluePearlPdf,
  },
];

export default function PdfPage() {
  const [activeId, setActiveId] = useState(reports[0].id);
  const activeReport = reports.find((report) => report.id === activeId) ?? reports[0];

  return (
    <div className="App w-100">
      <div className="bg-white shadow-sm rounded-4 p-4 my-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
          <div>
            <h2 className="h2 mb-1">Medical PDFs</h2>
            <p className="mb-0 text-muted">Switch between reports and download the files.</p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {reports.map((report) => (
              <button
                key={report.id}
                className={`btn ${report.id === activeId ? "btn-dark" : "btn-outline-dark"} btn-sm`}
                onClick={() => setActiveId(report.id)}
                type="button"
              >
                {report.title}
              </button>
            ))}
          </div>
        </div>

        <PdfViewer src={activeReport.file} />

        <div className="mt-3 d-flex align-items-center gap-3">
          <a href={activeReport.file} className="link-secondary" download>
            Download {activeReport.title}
          </a>
        </div>
      </div>
    </div>
  );
}
