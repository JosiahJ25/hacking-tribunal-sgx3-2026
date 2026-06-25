export const ELEMENTS = [
  {
    data: {
      id: "lidar",
      label: "LiDAR Sensor",
      type: "Sensor",
      description:
        "LiDAR provides 3D mapping and depth perception for autonomous robots.",
      relationships: ["Feeds data into SLAM Algorithm"],
      future: {
        concept: "Solid-state LiDAR on a chip",
        timeline: "2026–2028",
        confidence: "High",
        summary:
          "LiDAR is expected to shrink from spinning mechanical units to cheap solid-state chips, making it standard even in consumer robotics."
      }
    }
  },
  {
    data: {
      id: "camera",
      label: "Vision Camera",
      type: "Sensor",
      description:
        "Cameras allow robots to interpret visual information.",
      relationships: ["Feeds data into SLAM Algorithm"],
      future: {
        concept: "Event-based (neuromorphic) cameras",
        timeline: "2027–2030",
        confidence: "Medium",
        summary:
          "Traditional frame-based cameras are likely to be supplemented by event cameras that capture motion with microsecond latency and far lower power draw."
      }
    }
  },
  {
    data: {
      id: "motor",
      label: "Servo Motor",
      type: "Actuator",
      description: "Servo motors provide precise rotational control.",
      relationships: ["Drives the Robotic Arm"],
      future: {
        concept: "Integrated smart actuators with onboard AI",
        timeline: "2026–2029",
        confidence: "High",
        summary:
          "Motors are trending toward built-in torque sensing and local AI control loops, reducing reliance on centralized processing."
      }
    }
  },
  {
    data: {
      id: "arm",
      label: "Robotic Arm",
      type: "Mechanism",
      description: "A robotic arm performs manipulation tasks.",
      relationships: [
        "Driven by Servo Motor",
        "Controlled by Navigation System"
      ],
      future: {
        concept: "Soft, compliant manipulators",
        timeline: "2028–2032",
        confidence: "Medium",
        summary:
          "Rigid robotic arms are expected to be increasingly replaced or supplemented by soft robotics for safer human-robot interaction."
      }
    }
  },
  {
    data: {
      id: "slam",
      label: "SLAM Algorithm",
      type: "AI System",
      description: "SLAM maps environments while tracking position.",
      relationships: [
        "Consumes LiDAR Sensor data",
        "Consumes Vision Camera data",
        "Feeds Navigation System"
      ],
      future: {
        concept: "Neural SLAM (learned mapping vs. geometric)",
        timeline: "2027–2030",
        confidence: "Medium",
        summary:
          "SLAM is expected to shift from hand-tuned geometric algorithms to end-to-end learned representations, improving robustness in dynamic environments."
      }
    }
  },
  {
    data: {
      id: "navigation",
      label: "Navigation System",
      type: "AI System",
      description: "Plans robot movement paths.",
      relationships: [
        "Consumes SLAM Algorithm output",
        "Controls Robotic Arm"
      ],
      future: {
        concept: "End-to-end learned navigation policies",
        timeline: "2028–2031",
        confidence: "Low",
        summary:
          "Navigation stacks may move away from modular planners toward single learned policies trained on massive simulated and real-world datasets."
      }
    }
  },

// ⭐ Additional Robotics Nodes

  {
    data: {
      id: "imu",
      label: "IMU Sensor",
      type: "Sensor",
      description: "Measures acceleration and rotation for robot stabilization.",
      relationships: ["Feeds data into Control Loop"],
      future: {
        concept: "Quantum‑precision IMUs",
        timeline: "2029–2034",
        confidence: "Medium",
        summary: "Next‑gen IMUs may use quantum effects for near‑perfect drift‑free orientation."
      }
    }
  },

  {
    data: {
      id: "ultrasonic",
      label: "Ultrasonic Sensor",
      type: "Sensor",
      description: "Short‑range obstacle detection using sound waves.",
      relationships: ["Supports Mobile Base navigation"],
      future: {
        concept: "Wide‑angle ultrasonic arrays",
        timeline: "2026–2029",
        confidence: "High",
        summary: "Cheap multi‑directional ultrasonic arrays will improve indoor navigation."
      }
    }
  },

  {
    data: {
      id: "linear_actuator",
      label: "Linear Actuator",
      type: "Actuator",
      description: "Converts rotational motion into linear movement.",
      relationships: ["Drives Gripper"],
      future: {
        concept: "Self‑lubricating actuators",
        timeline: "2027–2031",
        confidence: "Medium",
        summary: "Maintenance‑free actuators will reduce mechanical wear in robots."
      }
    }
  },

  {
    data: {
      id: "brushless_motor",
      label: "Brushless Motor",
      type: "Actuator",
      description: "High‑efficiency motor used in mobile robots and drones.",
      relationships: ["Powers Mobile Base"],
      future: {
        concept: "AI‑optimized motor control",
        timeline: "2028–2033",
        confidence: "High",
        summary: "Motors will dynamically adjust torque curves using onboard ML."
      }
    }
  },

  {
    data: {
      id: "object_detection",
      label: "Object Detection Model",
      type: "AI System",
      description: "Identifies objects in camera images.",
      relationships: ["Supports Navigation System"],
      future: {
        concept: "Real‑time 3D object detection",
        timeline: "2027–2030",
        confidence: "High",
        summary: "3D detection will become standard for safe manipulation and navigation."
      }
    }
  },

  {
    data: {
      id: "path_planning",
      label: "Path Planning AI",
      type: "AI System",
      description: "Computes optimal movement paths for robots.",
      relationships: ["Controls Mobile Base"],
      future: {
        concept: "End‑to‑end learned planners",
        timeline: "2028–2032",
        confidence: "Medium",
        summary: "Planners may shift from A* and RRT to fully learned policies."
      }
    }
  },

  {
    data: {
      id: "mobile_base",
      label: "Mobile Base",
      type: "Mechanism",
      description: "Provides locomotion via wheels or tracks.",
      relationships: ["Powered by Brushless Motor", "Guided by Navigation System"],
      future: {
        concept: "Omni‑directional bases",
        timeline: "2026–2029",
        confidence: "High",
        summary: "Holonomic drive systems will allow precise sideways movement."
      }
    }
  },

  {
    data: {
      id: "gripper",
      label: "Gripper",
      type: "Mechanism",
      description: "End‑effector used for grasping objects.",
      relationships: ["Driven by Linear Actuator"],
      future: {
        concept: "Adaptive soft grippers",
        timeline: "2027–2031",
        confidence: "High",
        summary: "Soft robotics will enable safe handling of delicate objects."
      }
    }
  },

  {
    data: {
      id: "battery_pack",
      label: "Battery Pack",
      type: "Power",
      description: "Stores electrical energy for the robot.",
      relationships: ["Feeds Power Management Unit"],
      future: {
        concept: "Solid‑state batteries",
        timeline: "2026–2030",
        confidence: "High",
        summary: "Higher density and safer batteries will extend robot runtime."
      }
    }
  },

  {
    data: {
      id: "pmu",
      label: "Power Management Unit",
      type: "Power",
      description: "Regulates voltage and distributes power.",
      relationships: ["Powers all subsystems"],
      future: {
        concept: "Smart PMUs with predictive load balancing",
        timeline: "2028–2033",
        confidence: "Medium",
        summary: "AI‑driven PMUs will optimize power usage in real time."
      }
    }
  },

  {
    data: {
      id: "control_loop",
      label: "Control Loop",
      type: "Autonomy",
      description: "Feedback system that stabilizes robot behavior.",
      relationships: ["Consumes IMU Sensor data"],
      future: {
        concept: "Self‑tuning control loops",
        timeline: "2027–2030",
        confidence: "High",
        summary: "Control loops will auto‑adjust gains using reinforcement learning."
      }
    }
  },

  {
    data: {
      id: "localization",
      label: "Localization Module",
      type: "Autonomy",
      description: "Determines robot position within a map.",
      relationships: ["Supports Navigation System"],
      future: {
        concept: "GPS‑independent localization",
        timeline: "2029–2035",
        confidence: "Low",
        summary: "Robots may localize using ambient signals instead of GPS."
      }
    }
  },

  // ⭐ NEW EDGES (connecting new nodes to the main graph)
  { data: { source: "imu", target: "control_loop" } },
  { data: { source: "ultrasonic", target: "mobile_base" } },

  { data: { source: "linear_actuator", target: "gripper" } },
  { data: { source: "brushless_motor", target: "mobile_base" } },

  { data: { source: "object_detection", target: "navigation" } },
  { data: { source: "path_planning", target: "navigation" } },

  { data: { source: "mobile_base", target: "navigation" } },
  { data: { source: "gripper", target: "arm" } },

  { data: { source: "battery_pack", target: "pmu" } },
  { data: { source: "pmu", target: "mobile_base" } },
  { data: { source: "pmu", target: "arm" } },

  { data: { source: "control_loop", target: "arm" } },
  { data: { source: "localization", target: "navigation" } },

  { data: { source: "lidar", target: "slam" } },
  { data: { source: "camera", target: "slam" } },
  { data: { source: "slam", target: "navigation" } },
  { data: { source: "motor", target: "arm" } },
  { data: { source: "navigation", target: "arm" } }
];