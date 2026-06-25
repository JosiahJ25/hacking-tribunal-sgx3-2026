import React, { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import SidePanel from "./components/SidePanel";
import { ELEMENTS } from "./data/elements";
import smallData from "./data/SMALL_knowledge_base.json";


fcose(cytoscape);


const STYLE = [
  {
    selector: "node",
    style: {
      label: "data(label)",
      width: 120,
      height: 120,
      "background-color": "#6A00FF",
      color: "white",
      "text-wrap": "wrap",
      "text-max-width": 90,
      "text-valign": "center",
      "text-halign": "center",
      "font-size": 12,
      "border-width": 3,
      "border-color": "#00E5FF",
      shape: "round-rectangle"
    }
  },
  {
    selector: "edge",
    style: {
      width: 3,
      "line-color": "#8A2BE2",
      "target-arrow-color": "#8A2BE2",
      "target-arrow-shape": "triangle",
      "curve-style": "bezier"
    }
  },
  {
    selector: "node:selected",
    style: {
      "border-color": "#FF00E5",
      "border-width": 5
    }
  },


  // ⭐ COSMIC TRIBUNAL CATEGORY COLORS
  {
    selector: 'node[type = "Sensor"]',
    style: {
      "background-color": "#00C8FF" // Electric Blue
    }
  },
  {
    selector: 'node[type = "Actuator"]',
    style: {
      "background-color": "#00FF9C" // Cosmic Green
    }
  },
  {
    selector: 'node[type = "Mechanism"]',
    style: {
      "background-color": "#FFB300" // Solar Gold
    }
  },
  {
    selector: 'node[type = "AI System"]',
    style: {
      "background-color": "#FF3AF2" // Tribunal Magenta
    }
  },
  {
    selector: 'node[type = "Power"]',
    style: {
      "background-color": "#9D4DFF" // Nebula Purple
    }
  },
  {
    selector: 'node[type = "Autonomy"]',
    style: {
      "background-color": "#00FFD5" // Star‑Teal
    }
  }




];

export default function GraphView() {
  const cyContainerRef = useRef(null);
  const cyInstanceRef = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);



  useEffect(() => {
    if (!cyContainerRef.current) return;

    // Destroy any prior instance before creating a new one.
    // This is the key fix for "only some nodes work" / wrong data bugs,
    // which happen when multiple cytoscape instances stack on one container.
    if (cyInstanceRef.current) {
      cyInstanceRef.current.removeAllListeners();
      cyInstanceRef.current.destroy();
      cyInstanceRef.current = null;
    }

    const cy = cytoscape({
      container: cyContainerRef.current,
      elements: ELEMENTS,
      style: STYLE,
      layout: {
        name: "fcose",
        animate: true,
        nodeRepulsion: 8000,
        idealEdgeLength: 120,
        quality: "default"
      }
    });

    cyInstanceRef.current = cy;

    // Ensure cytoscape picks up the container's real dimensions
    // once layout/paint has actually settled (fixes half-rendered graphs).
    cy.ready(() => {
      cy.resize();
      cy.fit(undefined, 40);
    });

    cy.on("tap", "node", (event) => {
      const nodeData = event.target.data();
      setSelectedNode(nodeData);
      setPanelOpen(true);
    });

    // Clicking the background closes the panel
    cy.on("tap", (event) => {
      if (event.target === cy) {
        setPanelOpen(false);
      }
    });

    // Also catch window resizes so the graph never gets stuck
    // rendered at a stale (e.g. half-screen) size.
    const handleResize = () => cy.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cy.removeAllListeners();
      cy.destroy();
      if (cyInstanceRef.current === cy) {
        cyInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 70px)",
        minWidth: 0
      }}
    >

      {/* ⭐ Search Bar */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          background: "rgba(10, 0, 30, 0.7)",
          padding: "14px 16px",
          borderRadius: "8px",
          border: "1px solid #6A00FF",
          backdropFilter: "blur(6px)",
          width: "300px"
        }}
      >
        <input
          type="text"
          placeholder="Search robotics nodes..."
          value={searchQuery}

          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);

            const query = value.toLowerCase();

            if (!query) {
              setSuggestions([]);
              return;
            }

            const matches = cyInstanceRef.current.nodes().filter(n =>
              n.data("label").toLowerCase().includes(query)
            );

            setSuggestions(matches.map(n => n.data("label")));
          }}

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const query = searchQuery.toLowerCase();

              const matches = cyInstanceRef.current.nodes().filter(n =>
                n.data("label").toLowerCase().includes(query)
              );

              if (matches.length > 0) {
                const target = matches[0];

                cyInstanceRef.current.animate({
                  center: { eles: target },
                  duration: 600
                });

                target.select();
                setSelectedNode(target.data());
                setPanelOpen(true);
                setSuggestions([]);
              }
            }
          }}

          style={{
            width: "100%",
            padding: "8px 1px",
            borderRadius: "6px",
            border: "1px solid #6A00FF",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            fontSize: "14px",
            outline: "none"
          }}
        />

        {/* ⭐ Suggestions Dropdown INSIDE the search bar */}
        {suggestions.length > 0 && (
          <div
            style={{
              marginTop: "14px",
              background: "rgba(10, 0, 30, 0.85)",
              border: "1px solid #6A00FF",
              borderRadius: "20px",
              maxHeight: "150px",
              overflowY: "auto"
            }}
          >
            {suggestions.map((label, index) => (
              <div
                key={index}
                onClick={() => {
                  const node = cyInstanceRef.current.$(`node[label = "${label}"]`);
                  if (node && node.length > 0) {
                    const target = node[0];

                    cyInstanceRef.current.animate({
                      center: { eles: target },
                      duration: 600
                    });

                    target.select();
                    setSelectedNode(target.data());
                    setPanelOpen(true);
                    setSuggestions([]);
                    setSearchQuery(label);
                  }
                }}
                style={{
                  padding: "6px 12px",
                  cursor: "pointer",
                  color: "white"
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ⭐ Graph */}
      <div
        ref={cyContainerRef}
        style={{
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, #0A001A, #000000)"
        }}
      />

      {/* ⭐ Side Panel */}
      <SidePanel
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        nodeData={selectedNode}
      />

      {/* ⭐ Cosmic Legend */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          background: "rgba(10, 0, 30, 0.7)",
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid #6A00FF",
          color: "white",
          fontSize: "14px",
          lineHeight: "20px",
          backdropFilter: "blur(6px)",
          zIndex: 999
        }}
      >
        <div><span style={{ color: "#00C8FF" }}>■</span> Sensor</div>
        <div><span style={{ color: "#00FF9C" }}>■</span> Actuator</div>
        <div><span style={{ color: "#FFB300" }}>■</span> Mechanism</div>
        <div><span style={{ color: "#FF3AF2" }}>■</span> AI System</div>
        <div><span style={{ color: "#9D4DFF" }}>■</span> Power</div>
        <div><span style={{ color: "#00FFD5" }}>■</span> Autonomy</div>
      </div>

    </div>
  );
}