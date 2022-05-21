export const positionOptions = [
  { value: 0, label: "0%" },
  { value: 10, label: "10%" },
  { value: 20, label: "20%" },
  { value: 30, label: "30%" },
  { value: 40, label: "40%" },
  { value: 50, label: "50%" },
  { value: 60, label: "60%" },
  { value: 70, label: "70%" },
  { value: 80, label: "80%" },
  { value: 90, label: "90%" },
  { value: 100, label: "100%" },
];

export const rotationOptions = [
  { value: 0, label: "0°" },
  { value: 45, label: "45°" },
  { value: 90, label: "90°" },
  { value: 135, label: "135°" },
  { value: 180, label: "180°" },
  { value: 225, label: "225°" },
  { value: 270, label: "270°" },
  { value: 315, label: "315°" },
  { value: 360, label: "360°" },
];

export const typeOptions = [
  { value: "Linear", label: "Linear" },
  { value: "Radial", label: "Radial" },
];

export const defaultGradient = {
  rotation: 90,
  type: "Linear",
  colors: [
    {
      value: "#C81D77",
      position: 0,
    },
    {
      value: "#6710C2",
      position: 100,
    },
  ],
};
