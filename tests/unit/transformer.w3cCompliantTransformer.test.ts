import { w3cCompliantTransformer } from '@src/transformer/w3cCompliantTransformer'
import { internalTokenInterface } from '@typings/propertyObject'

describe('w3cCompliantTransformer', () => {
    const mockSettings = {}

    describe('color tokens', () => {
        it('should transform color token with proper $type and $value structure', () => {
            const colorToken: internalTokenInterface = {
                name: 'primary',
                category: 'color',
                exportKey: 'color',
                description: 'Primary brand color',
                values: [{
                    fill: {
                        value: { r: 255, g: 0, b: 0, a: 1 },
                        blendMode: 'normal'
                    }
                }],
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(colorToken, mockSettings)

            expect(result).toEqual({
                $description: 'Primary brand color',
                $type: 'color',
                $value: {
                    colorSpace: 'srgb',
                    components: [1, 0, 0],
                    hex: '#ff0000ff'
                },
                $extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        blendMode: 'normal',
                        exportKey: 'styles'
                    }
                }
            })
        })
    })

    describe('size tokens', () => {
        it('should transform size token with proper dimension structure', () => {
            const sizeToken: internalTokenInterface = {
                name: 'medium',
                category: 'size',
                exportKey: 'size',
                values: {
                    width: { value: 16 }
                },
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(sizeToken, mockSettings)

            expect(result).toEqual({
                $type: 'dimension',
                $value: { value: 16, unit: 'px' },
                $extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            })
        })
    })

    describe('fallback handling', () => {
        it('should handle unsupported token types with fallback', () => {
            const unsupportedToken: internalTokenInterface = {
                name: 'test',
                category: 'string',
                exportKey: 'variables',
                values: { value: 'test' },
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(unsupportedToken, mockSettings)

            expect(result).toEqual({
                $type: 'string',
                $value: 'Not implemented yet',
                $extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            })
        })
    })

    describe('W3C compliance validation', () => {
        it('should include $ prefixes for reserved properties', () => {
            const token: internalTokenInterface = {
                name: 'test',
                category: 'color',
                exportKey: 'color',
                description: 'Test color',
                values: [{
                    fill: {
                        value: { r: 0, g: 255, b: 0, a: 1 }
                    }
                }],
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(token, mockSettings)

            // Should have $ prefixes for W3C reserved properties
            expect(result).toHaveProperty('$type')
            expect(result).toHaveProperty('$value')
            expect(result).toHaveProperty('$description')
            expect(result).toHaveProperty('$extensions')
        })

        it('should structure color values according to W3C spec', () => {
            const colorToken: internalTokenInterface = {
                name: 'blue',
                category: 'color',
                exportKey: 'color',
                values: [{
                    fill: {
                        value: { r: 0, g: 0, b: 255, a: 0.5 }
                    }
                }],
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(colorToken, mockSettings)

            expect(result.$value).toEqual({
                colorSpace: 'srgb',
                components: [0, 0, 1, 0.5],
                alpha: 0.5,
                hex: '#0000ff80'
            })
        })

        it('should structure dimension values with value and unit', () => {
            const sizeToken: internalTokenInterface = {
                name: 'large',
                category: 'size',
                exportKey: 'size',
                values: {
                    width: { value: 32 }
                },
                extensions: {
                    'org.lukasoppermann.figmaDesignTokens': {
                        exportKey: 'styles'
                    }
                }
            }

            const result = w3cCompliantTransformer(sizeToken, mockSettings)

            expect(result.$value).toEqual({
                value: 32,
                unit: 'px'
            })
        })
    })
})