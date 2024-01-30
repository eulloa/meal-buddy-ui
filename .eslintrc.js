module.exports = {
  paserOptions: {
    sourceType: "module",
  },
  plugins: ["react", "@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": ["error"],
  },
};
