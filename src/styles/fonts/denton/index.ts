import LocalFont from "next/font/local";

const denton = LocalFont({
  src: [
    {
      path: "./DentonCondensedTest-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./DentonCondensedTest-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./DentonCondensedTest-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-denton",
});

export default denton;
