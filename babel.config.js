module.exports = {
  presets: [
    "next/babel",
    "linaria/babel",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
  ],
};