// vite.config.ts
import { defineConfig } from "file:///Users/work/Documents/github/Wagmi/uikit/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///Users/work/Documents/github/Wagmi/uikit/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///Users/work/Documents/github/Wagmi/uikit/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@real-wagmi/uikit",
  version: "1.2.8",
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
    "@testing-library/react": "^14.1.2",
    "@testing-library/react-hooks": "8.0.1",
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
    "@ethersproject/address": "5.7.0",
    "@popperjs/core": "^2.11.8",
    "@reach/portal": "^0.18.0",
    "@real-wagmi/sdk": "^1.2.2",
    "@storybook/addon-themes": "^7.5.3",
    "@types/styled-system": "^5.1.15",
    "@types/uuid": "^9.0.7",
    "framer-motion": "10.11.2",
    react: "^18.2.0",
    "react-feather": "^2.0.8",
    "react-popper": "^2.3.0",
    rebass: "^4.0.7",
    "styled-components": "^5.3.5",
    "styled-system": "^5.1.5",
    tslint: "^6.1.3",
    "tslint-config-prettier": "^1.18.0",
    uuid: "^9.0.1"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3dvcmsvRG9jdW1lbnRzL2dpdGh1Yi9XYWdtaS91aWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dvcmsvRG9jdW1lbnRzL2dpdGh1Yi9XYWdtaS91aWtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvd29yay9Eb2N1bWVudHMvZ2l0aHViL1dhZ21pL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7IiwgIntcbiAgXCJuYW1lXCI6IFwiQHJlYWwtd2FnbWkvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4yLjhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LmNqc1wiLFxuICBcIm1vZHVsZVwiOiBcImRpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9XG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IC0tcnVuXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInByZXBhcmVcIjogXCJ5YXJuIGJ1aWxkXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiV2FnbWlcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjcuMC4xMlwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjcuMC4xMlwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl43LjAuMTJcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdGluZy1saWJyYXJ5XCI6IFwiXjAuMC4xNC1uZXh0LjJcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNS4xMS42XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjEuMlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdC1ob29rc1wiOiBcIjguMC4xXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4xNVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjZcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMS43XCIsXG4gICAgXCJAdHlwZXMvcmViYXNzXCI6IFwiXjQuMC43XCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNS4xLjI1XCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI6IFwiXjMuOS4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIjQuMC4wXCIsXG4gICAgXCJqZXN0LWVudmlyb25tZW50LWpzZG9tXCI6IFwiXjI5LjMuMVwiLFxuICAgIFwiamVzdC1zdHlsZWQtY29tcG9uZW50c1wiOiBcIl43LjAuOFwiLFxuICAgIFwicG9saXNoZWRcIjogXCJeMy4zLjJcIixcbiAgICBcInByb3AtdHlwZXNcIjogXCJeMTUuOC4xXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeNy4wLjEyXCIsXG4gICAgXCJ0aGVtZXByb3ZpZGVyLXN0b3J5Ym9va1wiOiBcIl4xLjcuMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjIuMlwiLFxuICAgIFwidml0ZVwiOiBcIjQuMy45XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy42LjNcIixcbiAgICBcInZpdGVzdFwiOiBcIl4wLjI3LjJcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZXRoZXJzcHJvamVjdC9hZGRyZXNzXCI6IFwiNS43LjBcIixcbiAgICBcIkBwb3BwZXJqcy9jb3JlXCI6IFwiXjIuMTEuOFwiLFxuICAgIFwiQHJlYWNoL3BvcnRhbFwiOiBcIl4wLjE4LjBcIixcbiAgICBcIkByZWFsLXdhZ21pL3Nka1wiOiBcIl4xLjIuMlwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi10aGVtZXNcIjogXCJeNy41LjNcIixcbiAgICBcIkB0eXBlcy9zdHlsZWQtc3lzdGVtXCI6IFwiXjUuMS4xNVwiLFxuICAgIFwiQHR5cGVzL3V1aWRcIjogXCJeOS4wLjdcIixcbiAgICBcImZyYW1lci1tb3Rpb25cIjogXCIxMC4xMS4yXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWZlYXRoZXJcIjogXCJeMi4wLjhcIixcbiAgICBcInJlYWN0LXBvcHBlclwiOiBcIl4yLjMuMFwiLFxuICAgIFwicmViYXNzXCI6IFwiXjQuMC43XCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIl41LjMuNVwiLFxuICAgIFwic3R5bGVkLXN5c3RlbVwiOiBcIl41LjEuNVwiLFxuICAgIFwidHNsaW50XCI6IFwiXjYuMS4zXCIsXG4gICAgXCJ0c2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjEuMTguMFwiLFxuICAgIFwidXVpZFwiOiBcIl45LjAuMVwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjUuMy41XCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL1JlYWxXYWdtaS91aWtpdC5naXRcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTE2XCJcbiAgfSxcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwid2FnbWlcIixcbiAgICBcInVpa2l0XCJcbiAgXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLG9CQUFvQjtBQUN2VSxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7OztBQ0ZoQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxrQkFBa0I7QUFBQSxJQUNsQixLQUFLO0FBQUEsTUFDSCxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLFdBQWE7QUFBQSxJQUNiLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFVO0FBQUEsRUFDVixTQUFXO0FBQUEsRUFDWCxpQkFBbUI7QUFBQSxJQUNqQiwrQkFBK0I7QUFBQSxJQUMvQixpQ0FBaUM7QUFBQSxJQUNqQywwQkFBMEI7QUFBQSxJQUMxQixxQkFBcUI7QUFBQSxJQUNyQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6Qiw4QkFBOEI7QUFBQSxJQUM5Qiw2QkFBNkI7QUFBQSxJQUM3QiwwQkFBMEI7QUFBQSxJQUMxQixnQ0FBZ0M7QUFBQSxJQUNoQyxnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0I7QUFBQSxJQUNwQiwyQkFBMkI7QUFBQSxJQUMzQixpQkFBaUI7QUFBQSxJQUNqQiw0QkFBNEI7QUFBQSxJQUM1QixnQ0FBZ0M7QUFBQSxJQUNoQyx3QkFBd0I7QUFBQSxJQUN4QiwwQkFBMEI7QUFBQSxJQUMxQiwwQkFBMEI7QUFBQSxJQUMxQixVQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsSUFDYixvQkFBb0I7QUFBQSxJQUNwQixXQUFhO0FBQUEsSUFDYiwyQkFBMkI7QUFBQSxJQUMzQixZQUFjO0FBQUEsSUFDZCxNQUFRO0FBQUEsSUFDUixtQkFBbUI7QUFBQSxJQUNuQixRQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsY0FBZ0I7QUFBQSxJQUNkLDBCQUEwQjtBQUFBLElBQzFCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBLElBQ2pCLG1CQUFtQjtBQUFBLElBQ25CLDJCQUEyQjtBQUFBLElBQzNCLHdCQUF3QjtBQUFBLElBQ3hCLGVBQWU7QUFBQSxJQUNmLGlCQUFpQjtBQUFBLElBQ2pCLE9BQVM7QUFBQSxJQUNULGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQjtBQUFBLElBQ2hCLFFBQVU7QUFBQSxJQUNWLHFCQUFxQjtBQUFBLElBQ3JCLGlCQUFpQjtBQUFBLElBQ2pCLFFBQVU7QUFBQSxJQUNWLDBCQUEwQjtBQUFBLElBQzFCLE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixxQkFBcUI7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsWUFBYztBQUFBLEVBQ2QsT0FBUztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxNQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsZUFBaUI7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxVQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7OztBRDFGQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxnQkFBZ0IsR0FBRyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQzdGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AscUJBQXFCO0FBQUEsTUFDbkIsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
