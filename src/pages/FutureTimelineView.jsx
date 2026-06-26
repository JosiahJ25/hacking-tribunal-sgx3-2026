import React, { useMemo } from "react";
import predictions from "../data/robotics_knowledge_base_with_predictions.json";

export default function FutureTimelineView() {
  // ⭐ Extract predictions from predictions_index
  const timelineItems = useMemo(() => {
    const entries = Object.entries(predictions.predictions_index || {});

    // Parse "2028-2034" → { start: 2028, end: 2034 }
    const parseRange = (rangeStr) => {
      if (!rangeStr) return { start: 9999, end: 9999 };
      const parts = rangeStr.split("-");
      return {
        start: parseInt(parts[0]),
        end: parseInt(parts[1])
      };
    };

    return entries
      .map(([concept, data]) => {
        const ft = data.forward_trajectory;
        if (!ft || !ft.maturation_timeline) return null;

        const range = parseRange(ft.maturation_timeline);

        return {
          concept,
          startYear: range.start,
          endYear: range.end,
          impact: ft.future_impact,
          applications: ft.emerging_applications || []
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.startYear - b.startYear);
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
        Future Robotics Timeline (2026–2036)
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
        {timelineItems.map((item, index) => (
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
              {item.startYear}–{item.endYear}
            </h2>

            <h3 style={{ margin: "5px 0", color: "#00C8FF" }}>
              {item.concept}
            </h3>

            <p style={{ opacity: 0.9 }}>{item.impact}</p>

            <h4 style={{ marginTop: "10px", color: "#B388FF" }}>
              Emerging Applications:
            </h4>

            <ul>
              {item.applications.map((app, i) => (
                <li key={i} style={{ opacity: 0.8 }}>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}