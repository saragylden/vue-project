module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended', // Add Cypress recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'cypress', // Add Cypress plugin
  ],
  rules: {
    // Add your custom rules here
  },
  overrides: [
    {
      files: ['cypress/**/*.js'], // Apply Cypress-specific rules to test files
      env: {
        'cypress/globals': true, // Add Cypress globals
      },
    },
  ],
};