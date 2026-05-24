export const floColors = {
  abyss: ["#0B1020", "#0F172A", "#111827"],
  aura: ["#89AEE6", "#7DA7D9", "#94B8FF"],
  glow: ["#F4D58D", "#E6C27A", "#FFC857"],
  mist: ["#7C6EE6", "#8B7DFF", "#6E67D8"],
} as const;

export const floRhythm = {
  hover: { min: 0.3, max: 0.6 },
  breathing: { min: 3, max: 6 },
  pageTransition: { min: 0.8, max: 1.4 },
  openingText: { min: 1.2, max: 2.2 },
} as const;
