import React, { useMemo } from "react";
import { ELEMENTS } from "../data/elements";


export default function FutureTimelineView() {
  // ⭐ Extract and sort predictions
  const predictions = useMemo(() => {
    const nodes = ELEMENTS.filter(el => el.data && el.data.future);

    const parsed = nodes.map(n => {
      const f = n.data.future;
      const timeline = f.timeline || "";
      const match = timeline.match(/\d{4}/);
      const startYear = match ? parseInt(match[0]) : 9999;

      return {
        label: n.data.label,
        category: n.data.category,
        ...f,
        startYear
      };
    });

    return parsed.sort((a, b) => a.startYear - b.startYear);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #0A001A, #000000)",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* ⭐ Page Title */}
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          color: "#6A00FF",
          textShadow: "0 0 10px #6A00FF"
        }}
      >
        Future Robotics Timeline
      </h1>

      {/* ⭐ Timeline */}
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "800px",
          borderLeft: "2px solid #6A00FF",
          paddingLeft: "20px"
        }}
      >
        {predictions.map((p, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              padding: "10px 15px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              border: "1px solid #6A00FF",
              boxShadow: "0 0 10px #6A00FF55"
            }}
          >
            <h2 style={{ margin: 0, color: "#9D4DFF" }}>
              {p.timeline}
            </h2>

            <h3 style={{ margin: "5px 0", color: "#00C8FF" }}>
              {p.label} — {p.concept}
            </h3>

            <p style={{ opacity: 0.9 }}>{p.summary}</p>

            <p style={{ fontSize: "14px", opacity: 0.7 }}>
              Category: {p.category} • Confidence: {p.confidence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
