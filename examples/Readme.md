# Examples

Some example custom amazon style dictionary transformers to use together with the standard token format and W3C Design Token Community Group (DTCG) specification.

## Standard Format Examples

- `input/standard-tokens.json` is the token file exported from figma using the standard format
- `build` is the directory with all the output files for iOS, Android and web
- `build.js` is running amazon style dictionary and has all the configuration. You can run it with the command `node ./examples/build.js`.
- `libs` has all modules that transform the json for the specific platforms
- `filesToCopy` is holding all files that are not generated but should just be copied to the build directory

## W3C DTCG Format Examples

**✨ New: W3C Design Token Community Group (DTCG) specification support!**

- `input/w3c-tokens.json` is a W3C compliant token file with proper `$` prefixes and structured values
- `build-w3c.js` demonstrates how to work with W3C format tokens including:
  - Custom transformers for W3C color tokens (`colorSpace`, `components`, `hex`)
  - Custom transformers for W3C dimension tokens (`value`, `unit` objects)
  - Custom transformers for W3C shadow tokens (structured shadow values)
  - Custom transformers for W3C typography tokens (structured font properties)
- Run W3C examples with: `node ./examples/build-w3c.js`

### W3C Token Structure Examples

The W3C format uses `$` prefixes for reserved properties and structured values:

**Color Token:**

```json
{
  "$type": "color",
  "$value": {
    "colorSpace": "srgb",
    "components": [0.016, 0.294, 1],
    "hex": "#044affff"
  },
  "$extensions": {
    "org.lukasoppermann.figmaDesignTokens": {
      "blendMode": "normal"
    }
  }
}
```

**Dimension Token:**

```json
{
  "$type": "dimension",
  "$value": {
    "value": 32,
    "unit": "px"
  }
}
```

**Typography Token:**

```json
{
  "$type": "typography",
  "$value": {
    "fontFamily": "Akzidenz-Grotesk Pro",
    "fontSize": { "value": 20, "unit": "px" },
    "fontWeight": 700,
    "lineHeight": { "value": 32, "unit": "px" }
  }
}
```

## Running the Examples

1. **Standard format**: `node ./examples/build.js`
2. **W3C format**: `node ./examples/build-w3c.js`

Both examples will generate output files in the `build/` directory, demonstrating how to transform design tokens for different platforms and use cases.
