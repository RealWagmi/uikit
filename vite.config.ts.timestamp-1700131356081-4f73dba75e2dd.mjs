// vite.config.ts
import { defineConfig } from "file:///Users/sikorskiy/Documents/altRecipe/realWagmi/uikit/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///Users/sikorskiy/Documents/altRecipe/realWagmi/uikit/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///Users/sikorskiy/Documents/altRecipe/realWagmi/uikit/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@real-wagmi/uikit",
  version: "1.0.8",
  description: "",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  type: "module",
  sideEffects: [
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    }
  },
  scripts: {
    test: "vitest --run",
    build: "vite build",
    prepare: "yarn build",
    storybook: "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  author: "Wagmi",
  license: "MIT",
  devDependencies: {
    "@storybook/addon-essentials": "^7.0.12",
    "@storybook/addon-interactions": "^7.0.12",
    "@storybook/addon-links": "^7.0.12",
    "@storybook/blocks": "^7.0.12",
    "@storybook/react": "^7.0.12",
    "@storybook/react-vite": "^7.0.12",
    "@storybook/testing-library": "^0.0.14-next.2",
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.3",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/react-router-dom": "^5.1.7",
    "@types/rebass": "^4.0.7",
    "@types/styled-components": "^5.1.25",
    "@vanilla-extract/vite-plugin": "^3.9.0",
    "@vitejs/plugin-react": "4.0.0",
    "jest-environment-jsdom": "^29.3.1",
    "jest-styled-components": "^7.0.8",
    polished: "^3.3.2",
    "prop-types": "^15.8.1",
    "react-dom": "^18.2.0",
    "react-router-dom": "^5.2.0",
    storybook: "^7.0.12",
    "themeprovider-storybook": "^1.7.2",
    typescript: "^5.2.2",
    vite: "4.3.9",
    "vite-plugin-dts": "^3.6.3",
    vitest: "^0.27.2"
  },
  dependencies: {
    "@popperjs/core": "^2.11.8",
    "@reach/portal": "^0.18.0",
    "@real-wagmi/sdk": "^1.1.6",
    "@storybook/addon-themes": "^7.5.3",
    "@types/node": "^13.13.5",
    "@types/styled-system": "^5.1.15",
    "framer-motion": "10.11.2",
    react: "^18.2.0",
    "react-feather": "^2.0.8",
    "react-popper": "^2.3.0",
    rebass: "^4.0.7",
    "styled-components": "^5.3.5",
    "styled-system": "^5.1.5",
    tslint: "^6.1.3",
    "tslint-config-prettier": "^1.18.0"
  },
  peerDependencies: {
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^5.3.5"
  },
  repository: "https://github.com/RealWagmi/uikit.git",
  files: [
    "dist"
  ],
  engines: {
    node: ">=16"
  },
  publishConfig: {
    access: "public"
  },
  keywords: [
    "wagmi",
    "uikit"
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Npa29yc2tpeS9Eb2N1bWVudHMvYWx0UmVjaXBlL3JlYWxXYWdtaS91aWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Npa29yc2tpeS9Eb2N1bWVudHMvYWx0UmVjaXBlL3JlYWxXYWdtaS91aWtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2lrb3Jza2l5L0RvY3VtZW50cy9hbHRSZWNpcGUvcmVhbFdhZ21pL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7IiwgIntcbiAgXCJuYW1lXCI6IFwiQHJlYWwtd2FnbWkvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LmNqc1wiLFxuICBcIm1vZHVsZVwiOiBcImRpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9XG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IC0tcnVuXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInByZXBhcmVcIjogXCJ5YXJuIGJ1aWxkXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiV2FnbWlcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjcuMC4xMlwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjcuMC4xMlwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdGluZy1saWJyYXJ5XCI6IFwiXjAuMC4xNC1uZXh0LjJcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNS4xMS42XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjEyLjEuM1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjAuMTVcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMC42XCIsXG4gICAgXCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjEuN1wiLFxuICAgIFwiQHR5cGVzL3JlYmFzc1wiOiBcIl40LjAuN1wiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1jb21wb25lbnRzXCI6IFwiXjUuMS4yNVwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiOiBcIl4zLjkuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCI0LjAuMFwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS4zLjFcIixcbiAgICBcImplc3Qtc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNy4wLjhcIixcbiAgICBcInBvbGlzaGVkXCI6IFwiXjMuMy4yXCIsXG4gICAgXCJwcm9wLXR5cGVzXCI6IFwiXjE1LjguMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjIuMFwiLFxuICAgIFwic3Rvcnlib29rXCI6IFwiXjcuMC4xMlwiLFxuICAgIFwidGhlbWVwcm92aWRlci1zdG9yeWJvb2tcIjogXCJeMS43LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4yLjJcIixcbiAgICBcInZpdGVcIjogXCI0LjMuOVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNi4zXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4yNy4yXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHBvcHBlcmpzL2NvcmVcIjogXCJeMi4xMS44XCIsXG4gICAgXCJAcmVhY2gvcG9ydGFsXCI6IFwiXjAuMTguMFwiLFxuICAgIFwiQHJlYWwtd2FnbWkvc2RrXCI6IFwiXjEuMS42XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLXRoZW1lc1wiOiBcIl43LjUuM1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTMuMTMuNVwiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjE1XCIsXG4gICAgXCJmcmFtZXItbW90aW9uXCI6IFwiMTAuMTEuMlwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1mZWF0aGVyXCI6IFwiXjIuMC44XCIsXG4gICAgXCJyZWFjdC1wb3BwZXJcIjogXCJeMi4zLjBcIixcbiAgICBcInJlYmFzc1wiOiBcIl40LjAuN1wiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNS4zLjVcIixcbiAgICBcInN0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjVcIixcbiAgICBcInRzbGludFwiOiBcIl42LjEuM1wiLFxuICAgIFwidHNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl4xLjE4LjBcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIl41LjMuNVwiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SZWFsV2FnbWkvdWlraXQuZ2l0XCIsXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdFwiXG4gIF0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xNlwiXG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIndhZ21pXCIsXG4gICAgXCJ1aWtpdFwiXG4gIF1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyxvQkFBb0I7QUFDM1csU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxTQUFTOzs7QUNGaEI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLFFBQVU7QUFBQSxFQUNWLE9BQVM7QUFBQSxFQUNULE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1Qsa0JBQWtCO0FBQUEsSUFDbEIsS0FBSztBQUFBLE1BQ0gsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsSUFDVCxTQUFXO0FBQUEsSUFDWCxXQUFhO0FBQUEsSUFDYixtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsaUJBQW1CO0FBQUEsSUFDakIsK0JBQStCO0FBQUEsSUFDL0IsaUNBQWlDO0FBQUEsSUFDakMsMEJBQTBCO0FBQUEsSUFDMUIscUJBQXFCO0FBQUEsSUFDckIsb0JBQW9CO0FBQUEsSUFDcEIseUJBQXlCO0FBQUEsSUFDekIsOEJBQThCO0FBQUEsSUFDOUIsNkJBQTZCO0FBQUEsSUFDN0IsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsMkJBQTJCO0FBQUEsSUFDM0IsaUJBQWlCO0FBQUEsSUFDakIsNEJBQTRCO0FBQUEsSUFDNUIsZ0NBQWdDO0FBQUEsSUFDaEMsd0JBQXdCO0FBQUEsSUFDeEIsMEJBQTBCO0FBQUEsSUFDMUIsMEJBQTBCO0FBQUEsSUFDMUIsVUFBWTtBQUFBLElBQ1osY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2Isb0JBQW9CO0FBQUEsSUFDcEIsV0FBYTtBQUFBLElBQ2IsMkJBQTJCO0FBQUEsSUFDM0IsWUFBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsbUJBQW1CO0FBQUEsSUFDbkIsUUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQSxJQUNqQixtQkFBbUI7QUFBQSxJQUNuQiwyQkFBMkI7QUFBQSxJQUMzQixlQUFlO0FBQUEsSUFDZix3QkFBd0I7QUFBQSxJQUN4QixpQkFBaUI7QUFBQSxJQUNqQixPQUFTO0FBQUEsSUFDVCxpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixRQUFVO0FBQUEsSUFDVixxQkFBcUI7QUFBQSxJQUNyQixpQkFBaUI7QUFBQSxJQUNqQixRQUFVO0FBQUEsSUFDViwwQkFBMEI7QUFBQSxFQUM1QjtBQUFBLEVBQ0Esa0JBQW9CO0FBQUEsSUFDbEIsT0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IscUJBQXFCO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFlBQWM7QUFBQSxFQUNkLE9BQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGVBQWlCO0FBQUEsSUFDZixRQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsVUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGOzs7QUR2RkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE9BQU8sSUFBSTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEtBQUssZ0JBQUksZ0JBQWdCLEdBQUcsR0FBRyxPQUFPLEtBQUssZ0JBQUksWUFBWSxHQUFHLFFBQVE7QUFBQSxJQUM3RjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHFCQUFxQjtBQUFBLE1BQ25CLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNOO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
