import { rgbaObjectToHex8 } from '@utils/convertColor'
import { internalTokenInterface } from '@typings/propertyObject'
import { StandardTokenTypes, W3CTokenDataInterface, W3CTokenGroup, W3CTokenInterface } from '@typings/standardToken'
import roundWithDecimals from '@utils/roundWithDecimals'
import config from '@config/config'

/**
 * W3C Design Token Specification Compliant Transformer
 * Transforms internal token format to W3C DTCG specification format
 * @see https://design-tokens.github.io/community-group/format/
 */

const hexToColorComponents = (hex: string): number[] => {
  // Remove # if present
  hex = hex.replace('#', '')

  // Parse hex to RGB values (0-255) then convert to 0-1 range
  const r = parseInt(hex.substr(0, 2), 16) / 255
  const g = parseInt(hex.substr(2, 2), 16) / 255
  const b = parseInt(hex.substr(4, 2), 16) / 255
  const a = hex.length === 8 ? parseInt(hex.substr(6, 2), 16) / 255 : 1

  return [
    roundWithDecimals(r, 3),
    roundWithDecimals(g, 3),
    roundWithDecimals(b, 3),
    ...(a !== 1 ? [roundWithDecimals(a, 3)] : [])
  ]
}

const colorValueTransformer = ({ fill }): W3CTokenDataInterface => {
  const hex = rgbaObjectToHex8(fill.value)
  // Use original alpha value if available, otherwise extract from hex
  const originalAlpha = fill.value?.a
  const components = hexToColorComponents(hex)
  const alpha = originalAlpha !== undefined ? roundWithDecimals(originalAlpha, 3) : (components.length > 3 ? components[3] : undefined)

  // For components, use original RGBA values when available
  const finalComponents = originalAlpha !== undefined
    ? [
        roundWithDecimals(fill.value.r / 255, 3),
        roundWithDecimals(fill.value.g / 255, 3),
        roundWithDecimals(fill.value.b / 255, 3),
        ...(originalAlpha !== 1 ? [alpha] : [])
      ]
    : components

  return {
    $type: 'color' as StandardTokenTypes,
    $value: {
      colorSpace: 'srgb',
      components: finalComponents,
      ...(alpha !== undefined && alpha !== 1 ? { alpha } : {}),
      hex: hex
    },
    $extensions: {
      'org.lukasoppermann.figmaDesignTokens': {
        blendMode: fill.blendMode?.toLowerCase() || 'normal'
      }
    }
  }
}

const w3cCompliantTransformer = (token: internalTokenInterface, _settings): W3CTokenInterface | W3CTokenGroup => {
  const baseToken = {
    ...(token.description ? { $description: token.description } : {})
  }

  // Simple color transformation for now
  if (token.category === 'color' && token.values && Array.isArray(token.values) && token.values.length > 0) {
    const colorToken = colorValueTransformer(token.values[0])
    return {
      ...baseToken,
      $type: colorToken.$type,
      $value: colorToken.$value,
      $extensions: {
        'org.lukasoppermann.figmaDesignTokens': {
          ...token.extensions[config.key.extensionPluginData],
          ...colorToken.$extensions['org.lukasoppermann.figmaDesignTokens']
        }
      }
    }
  }

  // Simple dimension transformation for sizes
  if (token.category === 'size' && token.values && typeof token.values === 'object' && 'width' in token.values) {
    return {
      ...baseToken,
      $type: 'dimension' as StandardTokenTypes,
      $value: { value: (token.values as any).width.value, unit: 'px' },
      $extensions: {
        'org.lukasoppermann.figmaDesignTokens': {
          ...token.extensions[config.key.extensionPluginData]
        }
      }
    }
  }

  // Fallback to basic transformation
  return {
    ...baseToken,
    $type: 'string' as StandardTokenTypes,
    $value: 'Not implemented yet',
    $extensions: {
      'org.lukasoppermann.figmaDesignTokens': {
        ...token.extensions[config.key.extensionPluginData]
      }
    }
  }
}

export { w3cCompliantTransformer }
