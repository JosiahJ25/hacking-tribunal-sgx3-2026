# Hacking Tribunal SGX3

#*FutureVision: Predicting the Future through Knowledge Evolution*

> FutureVision is an AI-assisted forecasting platform that deconstructs the architecture of human knowledge by analyzing historical robotics innovation trends to predict future technological breakthroughs.
>
 ## Team Members

| Member | Role |
| :--- | :--- |
| **Nadia Rapheal** (WSSU) | Technical Program Manager & Integration Lead |
| **Josiah Johnson** (WSSU) | Frontend, Visualization & Presentation Lead |
| **Madison Conley** (MVSU) | AI Research & Insight Lead |
| **Usir Jackson** (Claflin) | Data & Knowledge Graph Lead |
| **Jonathan Wembolua** (WSSU) | Graph Analytics & Prediction Lead |

---

> ## Overview

- **What the project does:** It builds a sophisticated robotics-based knowledge graph from Wikipedia and WikiData to identify historical patterns and detect "convergence hotspots" where different disciplines meet.
- **The problem it solves:** It addresses the difficulty of predicting upcoming technological developments by using data-driven analytics to uncover innovation pathways hidden in vast amounts of encyclopedic data.
- **Why it is important:** It makes innovation visible and provides a grounded, scientific basis for understanding the pillars of next-generation breakthroughs.
- **Overall approach:** The system utilizes a recursive Wikipedia crawler, graph centrality metrics (such as PageRank), and a **Retrieval-Augmented Generation (RAG)** engine to generate and rank evidence-based forecasts for the 2026–2036 timeframe.

## Research Question

> How can historical data and innovation trends in robotics be analyzed to accurately forecast future technological developments in the field?

---

## Features

- **Recursive Wikipedia Crawler:** Designed to dig to a **3-depth level** of links for high-quality data collection.
- **Interactive Knowledge Graph Explorer:** A portal where users can filter nodes by sub-field cluster, time period, and convergence score.
- **RAG Forecasting Engine:** Uses the knowledge graph as a factual corpus to produce grounded predictions rather than pure AI-generated text.
- **Convergence Detection System:** Identifies "innovation hotspots" by tracking the acceleration of cross-links between different robotics sub-fields.
- **Temporal Evolution Analysis:** Pulls Wikipedia "first-edit" timestamps to build a birthdate timeline for every concept in the system.

---

## System Architecture

Wikipedia API & WikiData
↓
**Data Extraction** (Token Parser & REBEL Model)
↓
**Knowledge Graph** (NetworkX Construction)
↓
**Historical Analysis** (Temporal Snapshots & Centrality Metrics)
↓
**AI Prediction** (RAG-based Trend Forecasting)
↓
**Interactive Visualization** (React & Cytoscape Dashboard)

---

## Technology Stack

### Programming Languages
- **Python** (Data pipeline, graph analytics, and AI)
- **JavaScript** (Frontend visualization and dashboard)

### Libraries
- **NetworkX:** Core library for graph construction and connectivity analysis.
- **React:** Frontend framework for the interactive user portal.
- **Cytoscape & Cytoscape-fcose:** Used for high-quality browser-based network visualizations.
- **Requests & Wikipedia-API:** Facilitating data retrieval from MediaWiki.
- **JSON:** Serialization format for the knowledge base and concepts.

### AI
- **Anthropic Claude (Haiku & Sonnet):** Powers the forecasting engine and insight reports.
- **REBEL Model (Llama 3 base):** Local model used for efficient, end-to-end relation extraction.
- **GitHub Copilot:** AI assistance for implementation and debugging.

### Platforms
- **Google Colab:** Primary environment for collaborative model development.
- **GitHub & GitHub Pages:** Version control and static hosting for the demo.
- **VS Code:** IDE used for building the visualizer and frontend.

---

## Workflow

1.  **Select Seed Articles:** Identify 5-10 foundational robotics articles on Wikipedia.
2.  **Recursive Crawl:** Pull text, links, and semantic properties (e.g., "part of") to depth level 3.
3.  **Concept-Relation Extraction:** Feed text through the token parser and REBEL model to produce JSON tuples.
4.  **Build Graph:** Construct a directed graph in **NetworkX**, weighting edges based on relationship types.
5.  **Temporal Tracking:** Record the "birthdate" of each node via Wikipedia API history.
6.  **Detect Convergence:** Segment the graph into sub-field clusters and flag accelerated cross-linking.
7.  **Generate Forecasts:** Prompt the AI with subgraphs of convergence hotspots to produce a **Future Trend Report**.
8.  **Visualize:** Deploy an interactive dashboard showing the evolution and predicted breakthroughs.

---

## Data Sources

- **Wikipedia API:** Primary source for article text, wikilinks, and categories.
- **WikiData:** Used for semantic properties like "instance of" and "subclass of", and information about technology context for predictions.
- **Internal Wikipedia Links:** Recursive traversal to establish conceptual depth.
- **AI-generated Predictions:** Explainable insights and narratives grounded in the knowledge graph.

---

















