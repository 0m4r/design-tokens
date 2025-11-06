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

/**
 * Create a dimension value object according to W3C spec
 */
const createDimensionValue = (value: number, unit: string = 'px') => ({
    value: roundWithDecimals(value, 3),
    unit
})

/**
 * Create a color value object according to W3C spec
 */
const createColorValue = (fill: any) => {
    const hex = rgbaObjectToHex8(fill.value)
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
        colorSpace: 'srgb',
        components: finalComponents,
        ...(alpha !== undefined && alpha !== 1 ? { alpha } : {}),
        hex: hex
    }
}

/**
 * Transform color tokens according to W3C spec
 */
const colorValueTransformer = ({ fill }): W3CTokenDataInterface => {
    const colorValue = createColorValue(fill)

    return {
        $type: 'color' as StandardTokenTypes,
        $value: colorValue,
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                blendMode: fill.blendMode?.toLowerCase() || 'normal'
            }
        }
    }
}

/**
 * Transform shadow tokens according to W3C spec
 */
const shadowValueTransformer = (effects: any[]): W3CTokenDataInterface => {
    const shadows = effects
        .filter(effect => effect.type === 'dropShadow' || effect.type === 'innerShadow')
        .map(effect => ({
            color: createColorValue({ value: effect.color }),
            offsetX: createDimensionValue(effect.offset?.x || 0),
            offsetY: createDimensionValue(effect.offset?.y || 0),
            blur: createDimensionValue(effect.radius || 0),
            spread: createDimensionValue(effect.spread || 0),
            ...(effect.type === 'innerShadow' ? { inset: true } : {})
        }))

    return {
        $type: 'shadow' as StandardTokenTypes,
        $value: shadows.length === 1 ? shadows[0] : shadows
    }
}

/**
 * Transform typography tokens according to W3C spec
 */
const typographyValueTransformer = (textStyle: any): W3CTokenDataInterface => {
    const typographyValue: any = {}

    if (textStyle.fontFamily) {
        typographyValue.fontFamily = textStyle.fontFamily
    }

    if (textStyle.fontSize !== undefined) {
        const fontSize = typeof textStyle.fontSize === 'object' ? textStyle.fontSize.value : textStyle.fontSize
        typographyValue.fontSize = createDimensionValue(fontSize, 'px')
    }

    if (textStyle.fontWeight !== undefined) {
        typographyValue.fontWeight = textStyle.fontWeight
    }

    if (textStyle.letterSpacing !== undefined) {
        const letterSpacing = typeof textStyle.letterSpacing === 'object' ? textStyle.letterSpacing.value : textStyle.letterSpacing
        typographyValue.letterSpacing = createDimensionValue(letterSpacing, 'px')
    }

    if (textStyle.lineHeight !== undefined) {
        // W3C spec expects lineHeight as a number (multiplier of fontSize)
        const lineHeight = typeof textStyle.lineHeight === 'object' ? textStyle.lineHeight.value : textStyle.lineHeight
        const fontSize = typeof textStyle.fontSize === 'object' ? textStyle.fontSize.value : textStyle.fontSize || 16
        typographyValue.lineHeight = roundWithDecimals(lineHeight / fontSize, 3)
    }

    return {
        $type: 'typography' as StandardTokenTypes,
        $value: typographyValue
    }
}/**
 * Transform border tokens according to W3C spec
 */
const borderValueTransformer = (border: any): W3CTokenDataInterface => {
    const borderValue: any = {}

    if (border.color) {
        borderValue.color = createColorValue({ value: border.color })
    }

    if (border.width !== undefined) {
        borderValue.width = createDimensionValue(border.width)
    }

    if (border.style) {
        borderValue.style = border.style === 'solid' ? 'solid' : border.style
    }

    return {
        $type: 'border' as StandardTokenTypes,
        $value: borderValue
    }
}

/**
 * Transform motion/duration tokens according to W3C spec
 */
const durationValueTransformer = (motion: any): W3CTokenDataInterface => {
    const durationValue = {
        value: motion.duration || motion.value || 0,
        unit: motion.unit || 'ms'
    }

    return {
        $type: 'duration' as StandardTokenTypes,
        $value: durationValue
    }
}

/**
 * Transform dimension tokens according to W3C spec
 */
const dimensionValueTransformer = (dimension: any): W3CTokenDataInterface => {
    const value = dimension.value || dimension.width?.value || dimension.height?.value || 0
    const unit = dimension.unit || dimension.width?.unit || dimension.height?.unit || 'px'

    return {
        $type: 'dimension' as StandardTokenTypes,
        $value: createDimensionValue(value, unit)
    }
}

/**
 * Transform font weight tokens according to W3C spec
 */
const fontWeightValueTransformer = (fontWeight: any): W3CTokenDataInterface => {
    const value = typeof fontWeight === 'object' ? fontWeight.value : fontWeight

    return {
        $type: 'fontWeight' as StandardTokenTypes,
        $value: value
    }
}

/**
 * Transform font family tokens according to W3C spec
 */
const fontFamilyValueTransformer = (fontFamily: any): W3CTokenDataInterface => {
    const value = typeof fontFamily === 'object' ? fontFamily.value : fontFamily

    return {
        $type: 'fontFamily' as StandardTokenTypes,
        $value: value
    }
}

const w3cCompliantTransformer = (token: internalTokenInterface, _settings): W3CTokenInterface | W3CTokenGroup => {
    const baseToken = {
        name: token.name, // Preserve the name property for grouping
        ...(token.description ? { $description: token.description } : {})
    }

    const baseExtensions = {
        'org.lukasoppermann.figmaDesignTokens': {
            ...token.extensions[config.key.extensionPluginData]
        }
    }

    // Color tokens
    if (token.category === 'color' && token.values && Array.isArray(token.values) && token.values.length > 0) {
        const colorToken = colorValueTransformer(token.values[0])
        return {
            ...baseToken,
            $type: colorToken.$type,
            $value: colorToken.$value,
            $extensions: {
                ...baseExtensions,
                'org.lukasoppermann.figmaDesignTokens': {
                    ...baseExtensions['org.lukasoppermann.figmaDesignTokens'],
                    ...colorToken.$extensions['org.lukasoppermann.figmaDesignTokens']
                }
            }
        }
    }

    // Effect tokens (shadow)
    if (token.category === 'effect' && token.values && Array.isArray(token.values)) {
        const shadowToken = shadowValueTransformer(token.values)
        return {
            ...baseToken,
            $type: shadowToken.$type,
            $value: shadowToken.$value,
            $extensions: baseExtensions
        }
    }

    // Typography tokens
    if (token.category === 'font' && token.values && typeof token.values === 'object') {
        const typographyToken = typographyValueTransformer(token.values)
        return {
            ...baseToken,
            $type: typographyToken.$type,
            $value: typographyToken.$value,
            $extensions: baseExtensions
        }
    }

    // Motion/Duration tokens
    if (token.category === 'motion' && token.values && typeof token.values === 'object') {
        const durationToken = durationValueTransformer(token.values)
        return {
            ...baseToken,
            $type: durationToken.$type,
            $value: durationToken.$value,
            $extensions: baseExtensions
        }
    }

    // Size/Dimension tokens
    if (token.category === 'size' && token.values && typeof token.values === 'object') {
        const dimensionToken = dimensionValueTransformer(token.values)
        return {
            ...baseToken,
            $type: dimensionToken.$type,
            $value: dimensionToken.$value,
            $extensions: baseExtensions
        }
    }

    // Spacing tokens
    if (token.category === 'spacing' && token.values) {
        const values = token.values as any
        const value = values.value || values.top?.value || values.left?.value || 0
        const unit = values.unit || values.top?.unit || values.left?.unit || 'px'

        return {
            ...baseToken,
            $type: 'dimension' as StandardTokenTypes,
            $value: createDimensionValue(value, unit),
            $extensions: baseExtensions
        }
    }

    // Border radius tokens
    if (token.category === 'radius' && token.values) {
        const values = token.values as any
        const value = values.radius?.value || values.value || 0
        const unit = values.radius?.unit || values.unit || 'px'

        return {
            ...baseToken,
            $type: 'dimension' as StandardTokenTypes,
            $value: createDimensionValue(value, unit),
            $extensions: baseExtensions
        }
    }

    // Opacity tokens (as numbers)
    if (token.category === 'opacity' && token.values !== undefined) {
        const values = token.values as any
        const value = values.opacity?.value || values.value || values

        return {
            ...baseToken,
            $type: 'number' as StandardTokenTypes,
            $value: roundWithDecimals(value, 3),
            $extensions: baseExtensions
        }
    }

    // Grid tokens (transform to dimension)
    if (token.category === 'grid' && token.values && typeof token.values === 'object') {
        const values = token.values as any
        const value = Array.isArray(values) && values.length > 0
            ? (values[0].sectionSize?.value || values[0].gutterSize?.value || 0)
            : (values.width || values.height || values.value || 0)

        return {
            ...baseToken,
            $type: 'dimension' as StandardTokenTypes,
            $value: createDimensionValue(value),
            $extensions: baseExtensions
        }
    }

    // Breakpoint tokens (transform to dimension)
    if (token.category === 'breakpoint' && token.values) {
        const values = token.values as any
        const value = values.width?.value || values.value || values

        return {
            ...baseToken,
            $type: 'dimension' as StandardTokenTypes,
            $value: createDimensionValue(value),
            $extensions: baseExtensions
        }
    }

    // Handle border tokens specifically if they exist
    if (token.category === 'border' && token.values && typeof token.values === 'object') {
        const borderToken = borderValueTransformer(token.values)
        return {
            ...baseToken,
            $type: borderToken.$type,
            $value: borderToken.$value,
            $extensions: baseExtensions
        }
    }

    // Default fallback for unknown token types - preserve original structure
    const value = token.values !== undefined ? token.values : 'Unknown token structure'
    const tokenType = typeof value === 'string' ? 'string' :
        typeof value === 'number' ? 'number' :
            'string'

    return {
        ...baseToken,
        $type: tokenType as StandardTokenTypes,
        $value: value !== undefined ? value : `Unknown token category: ${token.category}`,
        $extensions: baseExtensions
    }
}

export { w3cCompliantTransformer }
