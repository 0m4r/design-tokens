# FAQ

## What is the W3C Design Token Community Group (DTCG) specification?

The [W3C Design Token Community Group specification](https://design-tokens.github.io/community-group/format/) is the official standard for design token exchange format. The plugin now includes full support for this specification, which means:

- **Standardized structure**: Tokens use proper `$` prefixes for reserved properties (`$type`, `$value`, `$description`, `$extensions`)
- **Interoperability**: Tokens exported in W3C format can be used across different tools and platforms that support the standard
- **Future-proof**: Following the official specification ensures compatibility with emerging design token tools

## How do I export tokens in W3C DTCG format?

When using the [`standard` token format](https://github.com/lukasoppermann/design-tokens#standard-w3c-dtcg-specification), the plugin automatically exports tokens that comply with the W3C specification. The exported tokens will include:

- Color tokens with `colorSpace: 'srgb'` and `components` array format
- Dimension tokens with `{ value: number, unit: string }` structure
- Proper `$extensions` for Figma-specific metadata
- All reserved properties prefixed with `$`

## What's the difference between the standard format and W3C compliance?

The standard format has been updated to fully comply with the W3C DTCG specification. This means better structure, standardized property names, and compatibility with other W3C-compliant tools. The key improvements include:

- **Color precision**: More accurate color values using the original RGBA values instead of hex conversion
- **Structured values**: Dimension and color values follow the official W3C schema
- **Extensions**: Figma-specific data is properly preserved under `$extensions` using reverse domain notation

## Why does style dictionary output [object Object]?

If you are using the [`standard` token format](https://github.com/lukasoppermann/design-tokens#standard-w3c-dtcg-specification) you are expected to write your own transformers ([See examples](https://github.com/lukasoppermann/design-tokens/tree/main/examples)).
While this is a bit more work at first, you can get much better results like splitting dark and light mode, or getting correct conversions for iOS and Android.

To get simple conversion out of the box you need without any custom code, you need to change to the [`original` token format](https://github.com/lukasoppermann/design-tokens#original-deprecated).

## Why is the original format marked as deprecated?

This is the format that was originally shipped with the plugin. It is still in here for compatibility reasons and will stay for a long time.

It is marked as deprecated to push users towards the new `standard` format and to show that it will not receive any new feature updates.
