import type { BlendType } from './valueTypes'

export type customTokenTypes = 'custom-spacing' |
  'custom-radius' |
  'custom-fontStyle' |
  'custom-shadow' |
  'custom-transition' |
  'custom-stroke' |
  'custom-grid' |
  'custom-gradient' |
  'custom-opacity'

export type StandardTokenTypes = 'string' |
  'number' |
  'object' |
  'array' |
  'boolean' |
  'null' |
  'color' |
  'dimension' |
  'font' |
  'fontFamily' |
  'fontWeight' |
  'duration' |
  'border' |
  'shadow' |
  'typography' |
  customTokenTypes

export type StandardTokenValueType = string | number | Array<any> | Object | Boolean | null

export type StandardCompositeTokenValueType = {
  [key: string]: StandardTokenValueType,
}

export type StandardTokenGroup = {
  [name: string]: {
    description?: string
    [name: string | number]: StandardTokenDataInterface | string
  }
}

export type pluginExtensionKey = 'org.lukasoppermann.figmaDesignTokens'

export type StandardTokenExtensionsInterface = {
  [key: string | pluginExtensionKey]: any | {
    styleId?: string,
    exportKey?: string,
    category?: string,
    group?: string,
    unit?: string,
  }
}

export type StandardTokenDataInterface = {
  description?: string,
  value: StandardTokenValueType | StandardCompositeTokenValueType,
  type: StandardTokenTypes,
  blendMode?: BlendType,
  extensions?: StandardTokenExtensionsInterface
}

export type W3CTokenDataInterface = {
  $description?: string,
  $value: StandardTokenValueType | StandardCompositeTokenValueType,
  $type: StandardTokenTypes,
  $extensions?: StandardTokenExtensionsInterface
}

export type W3CTokenInterface = {
  name?: string
} & W3CTokenDataInterface

export type W3CTokenGroup = {
  [name: string]: {
    $description?: string
    [name: string | number]: W3CTokenDataInterface | string
  }
}

export type W3CColorValue = {
  colorSpace: 'srgb' | 'p3' | 'rec2020' | 'lab' | 'lch' | 'oklab' | 'oklch',
  components: number[],
  alpha?: number,
  hex?: string
}

export type W3CDimensionValue = {
  value: number,
  unit: 'px' | 'rem' | 'em' | '%' | 'vw' | 'vh' | string
}

export type StandardTokenInterface = {
  name: string
} & StandardTokenDataInterface
