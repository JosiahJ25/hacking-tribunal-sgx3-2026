import { HashRouter as Router } from "react-router-dom";

import GraphView from "./GraphView";
import TimelineView from "./TimelineView";
import FutureConceptsView from "./FutureConceptsView";
import FutureTimelineView from "./pages/FutureTimelineView";



export default function App() {
  return (
    <Router>
      <nav
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "0 20px",
          background: "#0f0f0f"
        }}
      >
        <Link to="/">Graph</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/future-timeline">Future Timeline</Link>
        <Link to="/future-concepts" style={{ marginLeft: "20px", color: "white" }}>
          Future Concepts
        </Link>


      </nav>

      <Routes>
        <Route
          path="/"
          element={<GraphView />}
        />

        <Route
          path="/timeline"
          element={<TimelineView />}
        />

        <Route path="/future-concepts" element={<FutureConceptsView />} />

        <Route path="/future-timeline" element={<FutureTimelineView />} />



      </Routes>
    </Router>
  );
}