
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-mcp"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }, async viteFinal(config) {
    const { default: tailwindcss } = await import('@tailwindcss/vite');
    config.plugins.push(tailwindcss());
    return config;
  }
};
export default config;