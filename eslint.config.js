// import globals from "globals";
// import pluginJs from "@eslint/js";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];


import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: globals.browser,  // Use browser globals
        },
        files: ["**/*.js"],  // Apply to all JS files
        rules: {
            "no-console": "error",  // Disallow console.log
            "quotes": ["error", "double", { allowTemplateLiterals: true }],  // Enforce single quotes
        },
    },
    pluginJs.configs.recommended,  // Include recommended JS rules
];
