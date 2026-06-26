import React, { useMemo } from "react";
import predictions from "../data/robotics_knowledge_base_with_predictions.json";

export default function FutureConceptsView() {
  // ⭐ Extract and sort concepts alphabetically
  const concepts = useMemo(() => {
    const entries = Object.entries(predictions.predictions_index || {});

    return entries
      .map(([concept, data]) => {
        const ft = data.forward_trajectory;
        const pred = data.predecessors;
        const back = data.backward_analysis;

        return {
          concept,
          maturation: ft?.maturation_timeline || "Unknown",
          impact: ft?.future_impact || "No impact description available.",
          applications: ft?.emerging_applications || [],
          convergence: ft?.convergence_with || [],
          criticality: back?.criticality_level || "unknown",
          origin: pred?.timeline_origin || "Unknown"
        };
      })
      .sort((a, b) => a.concept.localeCompare(b.concept));
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
        Future Robotics Concepts Explorer
      </h1>

      <p style={{ maxWidth: "800px", opacity: 0.8, textAlign: "center" }}>
        Explore predicted robotics concepts for 2026–2036.  
        Each concept includes emerging applications, convergence technologies,  
        future impact, and estimated maturation timelines.
      </p>

      {/* ⭐ Concepts Grid */}
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {concepts.map((c, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "10px",
              border: "1px solid #6A00FF",
              boxShadow: "0 0 10px #6A00FF55"
            }}
          >
            <h2 style={{ margin: 0, color: "#9D4DFF" }}>{c.concept}</h2>

            <p style={{ margin: "5px 0", opacity: 0.8 }}>
              <strong>Maturation:</strong> {c.maturation}
            </p>

            <p style={{ margin: "5px 0", opacity: 0.8 }}>
              <strong>Criticality:</strong> {c.criticality}
            </p>

            <h4 style={{ marginTop: "10px", color: "#00C8FF" }}>
              Future Impact
            </h4>
            <p style={{ opacity: 0.9 }}>{c.impact}</p>

            <h4 style={{ marginTop: "10px", color: "#B388FF" }}>
              Emerging Applications
            </h4>
            <ul>
              {c.applications.map((app, i) => (
                <li key={i} style={{ opacity: 0.8 }}>
                  {app}
                </li>
              ))}
            </ul>

            <h4 style={{ marginTop: "10px", color: "#FF8CFF" }}>
              Convergence With
            </h4>
            <ul>
              {c.convergence.map((tech, i) => (
                <li key={i} style={{ opacity: 0.8 }}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
