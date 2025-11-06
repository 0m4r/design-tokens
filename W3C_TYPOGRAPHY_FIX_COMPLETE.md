# W3C Typography Transformer Bug Fix

## Issue

The W3C transformer was throwing an error when processing typography tokens:

```
Uncaught Error: Invalid parameters, both value "[object Object]" (object) and decimalPlaces "3" (number) must be of type number
    at roundWithDecimals
    at createDimensionValue
    at typographyValueTransformer
```

## Root Cause

The typography transformer was passing object values (with `value` and `unit` properties) directly to `createDimensionValue()`, which expects a numeric `value` parameter. The function `roundWithDecimals()` was receiving an object instead of a number.

## Solution

Fixed the `typographyValueTransformer` function to properly extract numeric values from object-structured font properties:

### Before (Broken)

```typescript
if (textStyle.fontSize !== undefined) {
  typographyValue.fontSize = createDimensionValue(textStyle.fontSize);
}

if (textStyle.letterSpacing !== undefined) {
  typographyValue.letterSpacing = createDimensionValue(textStyle.letterSpacing);
}
```

### After (Fixed)

```typescript
if (textStyle.fontSize !== undefined) {
  const fontSize =
    typeof textStyle.fontSize === "object"
      ? textStyle.fontSize.value
      : textStyle.fontSize;
  typographyValue.fontSize = createDimensionValue(fontSize, "px");
}

if (textStyle.letterSpacing !== undefined) {
  const letterSpacing =
    typeof textStyle.letterSpacing === "object"
      ? textStyle.letterSpacing.value
      : textStyle.letterSpacing;
  typographyValue.letterSpacing = createDimensionValue(letterSpacing, "px");
}
```

## Changes Made

1. **Typography Transformer Fix**: Updated `typographyValueTransformer` to handle object-structured font properties properly
2. **Value Extraction**: Added proper extraction of numeric values from objects before passing to `createDimensionValue`
3. **Line Height Calculation**: Fixed line height calculation to properly handle both object and numeric values
4. **Test Coverage**: Added comprehensive test for typography tokens with object-structured properties

## Impact

- ✅ W3C typography tokens now process correctly without runtime errors
- ✅ Maintains backward compatibility with simple numeric values
- ✅ Proper W3C DTCG format output with dimension objects (`{value: number, unit: string}`)
- ✅ All existing tests continue to pass
- ✅ New test coverage for object-structured typography properties

## Test Results

- **Unit Tests**: 42/42 test suites passing (183 tests)
- **Integration Tests**: 3/3 test suites passing (22 tests)
- **New Test**: Added typography test with object properties - passes

## Generated Output Example

**Input (Figma Format)**:

```json
{
  "category": "font",
  "values": {
    "fontSize": { "value": 24 },
    "fontWeight": 600,
    "fontFamily": "Inter",
    "letterSpacing": { "value": 0.5 },
    "lineHeight": { "value": 32 }
  }
}
```

**Output (W3C DTCG Format)**:

```json
{
  "$type": "typography",
  "$value": {
    "fontFamily": "Inter",
    "fontSize": { "value": 24, "unit": "px" },
    "fontWeight": 600,
    "letterSpacing": { "value": 0.5, "unit": "px" },
    "lineHeight": 1.333
  }
}
```

## Status

✅ **COMPLETE** - Typography token processing now fully functional in W3C transformer
