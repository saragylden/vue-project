module.exports = {
  env: {
    browser: true,
    node: true,
    'cypress/globals': true, // Add this line
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended', // Add this line if you're using Cypress plugin for ESLint
  ],
  plugins: [
    'cypress', // Add this line if you're using Cypress plugin for ESLint
  ],
};
