/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionary = require("style-dictionary");

// PATHS
const basePath = "./examples/";
const buildPath = basePath + "build/";

// W3C Token Transformers
StyleDictionary.registerTransform({
  name: "w3c/color/hex",
  type: "value",
  matcher: function (token) {
    return token.$type === "color" && token.$value && token.$value.hex;
  },
  transformer: function (token) {
    return token.$value.hex;
  },
});

StyleDictionary.registerTransform({
  name: "w3c/dimension/px",
  type: "value",
  matcher: function (token) {
    return (
      token.$type === "dimension" &&
      token.$value &&
      typeof token.$value === "object"
    );
  },
  transformer: function (token) {
    return `${token.$value.value}${token.$value.unit}`;
  },
});

StyleDictionary.registerTransform({
  name: "w3c/shadow/css",
  type: "value",
  matcher: function (token) {
    return token.$type === "shadow";
  },
  transformer: function (token) {
    const shadow = token.$value;
    const color = shadow.color.hex || "#000000";
    const offsetX = shadow.offsetX
      ? `${shadow.offsetX.value}${shadow.offsetX.unit}`
      : "0px";
    const offsetY = shadow.offsetY
      ? `${shadow.offsetY.value}${shadow.offsetY.unit}`
      : "0px";
    const blur = shadow.blur
      ? `${shadow.blur.value}${shadow.blur.unit}`
      : "0px";
    const spread = shadow.spread
      ? `${shadow.spread.value}${shadow.spread.unit}`
      : "0px";

    return `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
  },
});

// Custom CSS format for W3C tokens
StyleDictionary.registerFormat({
  name: "w3c/css/variables",
  formatter: function (dictionary) {
    return (
      ":root {\n" +
      dictionary.allTokens
        .map(function (token) {
          // Handle different token types appropriately
          let value = token.value;
          let name = token.name;

          return `  --${name}: ${value};`;
        })
        .join("\n") +
      "\n}"
    );
  },
});

// W3C Transform Group
StyleDictionary.registerTransformGroup({
  name: "w3c/css",
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "w3c/color/hex",
    "w3c/dimension/px",
    "w3c/shadow/css",
  ],
});

// Build configuration for W3C tokens
const StyleDictionaryW3C = StyleDictionary.extend({
  source: [basePath + "input/w3c-tokens.json"],
  platforms: {
    css: {
      transformGroup: "w3c/css",
      buildPath: buildPath + "w3c/css/",
      files: [
        {
          format: "w3c/css/variables",
          destination: "variables.css",
        },
      ],
    },
    js: {
      transformGroup: "w3c/css",
      buildPath: buildPath + "w3c/js/",
      files: [
        {
          format: "javascript/module-flat",
          destination: "tokens.js",
        },
      ],
    },
    json: {
      transformGroup: "w3c/css",
      buildPath: buildPath + "w3c/json/",
      files: [
        {
          format: "json/flat",
          destination: "tokens.json",
        },
      ],
    },
  },
});

console.log("🎨 Building W3C Design Token examples...");
StyleDictionaryW3C.buildAllPlatforms();
console.log("✅ W3C tokens built successfully!");
