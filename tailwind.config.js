/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    colors: {
      gray: {
        300: "#999999",
      },
      red: {
        300: "#E50000",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        300: "#141414",
        400: "#1A1A1A",
        500: "#262626",
      },
      transparent: "transparent",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        27: "27px",
        57: "57px",
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        14: "14px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        50: "50px",
        64: "64px",
        100: "100px",
        110: "110px",
        120: "120px",
      },
      borderWidth: {
        DEFAULT: "1px",
        4: "4px",
      },
      borderRadius: {
        DEFAULT: "1px",
        4: "4px",
        8: "8px",
        12: "12px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
