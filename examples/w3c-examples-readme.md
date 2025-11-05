# W3C Design Token Examples

This directory contains examples of how to work with W3C Design Token Community Group (DTCG) specification compliant tokens.

## Key Features Demonstrated

### 1. W3C Token Structure

- Proper `$` prefixes for reserved properties (`$type`, `$value`, `$description`, `$extensions`)
- Structured color values with `colorSpace` and `components`
- Structured dimension values with `value` and `unit` objects
- Proper extension handling with reverse domain notation

### 2. Custom Transformers

The `build-w3c.js` file includes custom Style Dictionary transformers for:

- **Colors**: Extract hex values from W3C color objects
- **Dimensions**: Convert `{value, unit}` objects to CSS values
- **Shadows**: Transform structured shadow objects to CSS box-shadow
- **Typography**: Handle structured font properties

### 3. Output Formats

Examples generate tokens in multiple formats:

- CSS custom properties
- JavaScript modules
- JSON flat structure

## Usage

```bash
# Run the W3C examples
node ./examples/build-w3c.js

# Output will be generated in:
# - build/w3c/css/variables.css
# - build/w3c/js/tokens.js
# - build/w3c/json/tokens.json
```

## Token Examples

See `input/w3c-tokens.json` for complete examples of W3C compliant tokens including:

- Color tokens with precise color values
- Dimension tokens for sizes and breakpoints
- Typography tokens with structured font properties
- Shadow tokens with structured shadow values

## Integration with Figma Design Tokens Plugin

These examples work with tokens exported from the Figma Design Tokens plugin when using:

- **Standard format** selected in plugin settings
- **W3C compliant transformer** output format

The plugin will automatically generate tokens in this W3C specification format.
