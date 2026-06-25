import React from "react";
import "./SidePanel.css";

export default function SidePanel({ isOpen, onClose, nodeData }) {
  return (
    <div className={`sidepanel ${isOpen ? "open" : ""}`}>
      {nodeData && (
        <>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close panel"
          >
            ×
          </button>

          <h2>{nodeData.label}</h2>

          <p>
            <strong>Type:</strong> {nodeData.type}
          </p>

          <h3>Description</h3>
          <p>{nodeData.description}</p>

          <h3>Relationships</h3>
          {nodeData.relationships && nodeData.relationships.length > 0 ? (
            <ul>
              {nodeData.relationships.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">No known relationships.</p>
          )}

          {nodeData.future && (
            <>
              <h3>Future Projection</h3>
              <p>
                <strong>Concept:</strong> {nodeData.future.concept}
              </p>
              <p>
                <strong>Timeline:</strong> {nodeData.future.timeline}
              </p>
              <p>
                <strong>Confidence:</strong> {nodeData.future.confidence}
              </p>
              <p>{nodeData.future.summary}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}