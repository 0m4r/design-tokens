// Tokens transformed to the W3C Design Token Community Group specification format
// @see https://design-tokens.github.io/community-group/format/
export const w3cTransformedTokens = {
    /**
     * size
     */
    size: {
        $description: 'a size description',
        $type: 'dimension',
        $value: { value: 16, unit: 'px' },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'size'
            }
        }
    },
    /**
     * breakpoint
     */
    breakpoint: {
        $description: 'a breakpoint description',
        $type: 'dimension',
        $value: { value: 1024, unit: 'px' },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'breakpoint'
            }
        }
    },
    /**
     * opacity
     */
    opacity: {
        $description: 'an opacity description',
        $type: 'number',
        $value: 0.3,
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'opacity'
            }
        }
    },
    /**
     * spacing
     */
    spacing: {
        $description: 'a spacing token',
        $type: 'custom-spacing',
        $value: {
            top: { value: 24, unit: 'px' },
            bottom: { value: 16, unit: 'px' },
            right: { value: 20, unit: 'px' },
            left: { value: 8, unit: 'px' }
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'spacing'
            }
        }
    },
    /**
     * radiusMixed
     */
    radiusMixed: {
        $description: 'a mixed radius token',
        $type: 'custom-radius',
        $value: {
            topLeft: { value: 1, unit: 'px' },
            topRight: { value: 2, unit: 'px' },
            bottomRight: { value: 3, unit: 'px' },
            bottomLeft: { value: 4, unit: 'px' },
            smoothing: 0.5
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'radius'
            }
        }
    },
    /**
     * radiusSingle
     */
    radiusSingle: {
        $description: 'a single radius token',
        $type: 'custom-radius',
        $value: {
            topLeft: { value: 5, unit: 'px' },
            topRight: { value: 5, unit: 'px' },
            bottomLeft: { value: 5, unit: 'px' },
            bottomRight: { value: 5, unit: 'px' },
            smoothing: 0.0
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'radius'
            }
        }
    },
    /**
     * grid
     */
    grid: {
        $description: 'a grid token',
        $type: 'custom-grid',
        $value: {
            pattern: 'columns',
            sectionSize: { value: 8, unit: 'px' },
            gutterSize: { value: 8, unit: 'px' },
            alignment: 'center',
            count: 6,
            offset: { value: 16, unit: 'px' }
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'grid'
            }
        }
    },
    multiGrid: {
        $description: 'a multiGrid token',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'grid'
            }
        },
        0: {
            $type: 'custom-grid',
            $value: {
                pattern: 'columns',
                sectionSize: { value: 8, unit: 'px' },
                gutterSize: { value: 8, unit: 'px' },
                alignment: 'center',
                count: 6,
                offset: { value: 16, unit: 'px' }
            }
        },
        1: {
            $type: 'custom-grid',
            $value: {
                pattern: 'columns',
                sectionSize: { value: 8, unit: 'px' },
                gutterSize: { value: 8, unit: 'px' },
                alignment: 'center',
                count: 6,
                offset: { value: 16, unit: 'px' }
            }
        }
    },
    /**
     * font
     */
    font: {
        $description: 'a font token',
        $type: 'typography',
        $value: {
            fontFamily: 'Helvetica',
            fontSize: { value: 16, unit: 'px' },
            fontWeight: 700,
            fontStyle: 'italic',
            fontStretch: 'normal',
            letterSpacing: { value: 19.2, unit: 'px' },
            lineHeight: { value: 19.2, unit: 'px' },
            textDecoration: 'underline',
            $extensions: {
                'org.lukasoppermann.figmaDesignTokens': {
                    paragraphIndent: 0,
                    paragraphSpacing: 12
                }
            }
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'font'
            }
        }
    },
    typography: {
        $description: 'a typography token',
        fontFamily: {
            $type: 'fontFamily',
            $value: 'Helvetica'
        },
        fontSize: {
            $type: 'dimension',
            $value: { value: 16, unit: 'px' }
        },
        fontStretch: {
            $type: 'string',
            $value: 'normal'
        },
        fontStyle: {
            $type: 'string',
            $value: 'italic'
        },
        fontWeight: {
            $type: 'fontWeight',
            $value: 700
        },
        letterSpacing: {
            $type: 'dimension',
            $value: { value: 0.3, unit: 'px' }
        },
        lineHeight: {
            $type: 'dimension',
            $value: { value: 18, unit: 'px' }
        },
        paragraphIndent: {
            $type: 'dimension',
            $value: { value: 0, unit: 'px' }
        },
        paragraphSpacing: {
            $type: 'dimension',
            $value: { value: 12, unit: 'px' }
        },
        textCase: {
            $type: 'string',
            $value: 'none'
        },
        textDecoration: {
            $type: 'string',
            $value: 'underline'
        }
    },

    fontLhPercent: {
        $description: 'Font with lineheight in percent',
        fontSize: {
            $value: { value: 16, unit: 'px' },
            $type: 'dimension'
        },
        textDecoration: {
            $value: 'underline',
            $type: 'string'
        },
        fontFamily: {
            $value: 'Helvetica',
            $type: 'fontFamily'
        },
        fontWeight: {
            $value: 700,
            $type: 'fontWeight'
        },
        fontStyle: {
            $value: 'italic',
            $type: 'string'
        },
        fontStretch: {
            $value: 'normal',
            $type: 'string'
        },
        letterSpacing: {
            $value: { value: 0.3, unit: 'px' },
            $type: 'dimension'
        },
        lineHeight: {
            $value: { value: 24, unit: 'px' },
            $type: 'dimension'
        },
        paragraphIndent: {
            $value: { value: 0, unit: 'px' },
            $type: 'dimension'
        },
        paragraphSpacing: {
            $value: { value: 12, unit: 'px' },
            $type: 'dimension'
        },
        textCase: {
            $value: 'none',
            $type: 'string'
        }
    },
    /**
     * border
     */
    border: {
        $description: 'a border token',
        $type: 'border',
        $value: {
            color: {
                colorSpace: 'srgb',
                components: [1, 0.902, 0],
                hex: '#ffe600ff'
            },
            width: { value: 4, unit: 'px' },
            style: {
                dashArray: [
                    { value: 5, unit: 'px' },
                    { value: 5, unit: 'px' }
                ],
                lineCap: 'none'
            }
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'border',
                align: 'center',
                lineJoin: 'round',
                miterLimit: 0
            }
        }
    },
    /**
     * gradient
     */
    gradient: {
        $description: 'a gradient token',
        $type: 'custom-gradient',
        $value: {
            gradientType: 'linear',
            rotation: 45,
            stops: [
                {
                    position: 0,
                    color: {
                        colorSpace: 'srgb',
                        components: [1, 0.902, 0, 0.251],
                        hex: '#ffe60040'
                    }
                },
                {
                    position: 1,
                    color: {
                        colorSpace: 'srgb',
                        components: [0, 0.392, 0.980, 0.502],
                        hex: '#0064fa80'
                    }
                }
            ]
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'gradient'
            }
        }
    },
    /**
     * color
     */
    color: {
        $description: 'a color token',
        $type: 'color',
        $value: {
            colorSpace: 'srgb',
            components: [1, 0.902, 0],
            hex: '#ffe600ff'
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'color',
                blendMode: 'normal'
            }
        }
    },
    aliasColor: {
        $description: 'a color token',
        $type: 'color',
        $value: '{{color}}',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'color',
                blendMode: 'normal',
                alias: '{color}'
            }
        }
    },
    multiColor: {
        $description: 'a multi color token',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'color'
            }
        },
        0: {
            $type: 'color',
            $value: {
                colorSpace: 'srgb',
                components: [1, 0.902, 0],
                hex: '#ffe600ff'
            },
            $extensions: {
                'org.lukasoppermann.figmaDesignTokens': {
                    blendMode: 'normal'
                }
            }
        },
        1: {
            $type: 'color',
            $value: {
                colorSpace: 'srgb',
                components: [0, 0.392, 1, 0.502],
                hex: '#0064ff80'
            },
            $extensions: {
                'org.lukasoppermann.figmaDesignTokens': {
                    blendMode: 'normal'
                }
            }
        }
    },
    /**
     * gradient and color
     */
    gradientAndColor: {
        $description: 'a gradient and color token',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'gradient'
            }
        },
        0: {
            $type: 'custom-gradient',
            $value: {
                gradientType: 'linear',
                rotation: 45,
                stops: [
                    {
                        position: 0,
                        color: {
                            colorSpace: 'srgb',
                            components: [1, 0.902, 0],
                            hex: '#ffe600ff'
                        }
                    },
                    {
                        position: 1,
                        color: {
                            colorSpace: 'srgb',
                            components: [0, 0.392, 0.980],
                            hex: '#0064faff'
                        }
                    }
                ]
            }
        },
        1: {
            $type: 'color',
            $value: {
                colorSpace: 'srgb',
                components: [0, 0.392, 1, 0.502],
                hex: '#0064ff80'
            },
            $extensions: {
                'org.lukasoppermann.figmaDesignTokens': {
                    blendMode: 'normal'
                }
            }
        }
    },
    colorAndGradient: {
        $description: 'a color and gradient token',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'color'
            }
        },
        0: {
            $type: 'color',
            $value: {
                colorSpace: 'srgb',
                components: [1, 0.902, 0],
                hex: '#ffe600ff'
            },
            $extensions: {
                'org.lukasoppermann.figmaDesignTokens': {
                    blendMode: 'normal'
                }
            }
        },
        1: {
            $type: 'custom-gradient',
            $value: {
                gradientType: 'linear',
                rotation: 45,
                stops: [
                    {
                        position: 0,
                        color: {
                            colorSpace: 'srgb',
                            components: [1, 0.902, 0],
                            hex: '#ffe600ff'
                        }
                    },
                    {
                        position: 1,
                        color: {
                            colorSpace: 'srgb',
                            components: [0, 0.392, 0.980],
                            hex: '#0064faff'
                        }
                    }
                ]
            }
        }
    },
    /**
     * effect
     */
    effect: {
        $description: 'an effect token',
        $type: 'shadow',
        $value: {
            color: {
                colorSpace: 'srgb',
                components: [0.039, 0.047, 0.055, 0.102],
                hex: '#0a0c0e1a'
            },
            offsetX: { value: 2, unit: 'px' },
            offsetY: { value: 4, unit: 'px' },
            blur: { value: 0, unit: 'px' },
            spread: { value: 0, unit: 'px' }
        },
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'effect'
            }
        }
    },
    blurEffect: {
        $description: 'an effect token',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'effect'
            }
        }
    },
    multiEffect: {
        $description: 'a multi effect token',
        $type: 'shadow',
        $value: [
            {
                color: {
                    colorSpace: 'srgb',
                    components: [0.039, 0.047, 0.055, 0.102],
                    hex: '#0a0c0e1a'
                },
                offsetX: { value: 2, unit: 'px' },
                offsetY: { value: 4, unit: 'px' },
                blur: { value: 0, unit: 'px' },
                spread: { value: 0, unit: 'px' }
            },
            {
                color: {
                    colorSpace: 'srgb',
                    components: [0.039, 0.047, 0.055, 0.2],
                    hex: '#0a0c0e33'
                },
                offsetX: { value: 2, unit: 'px' },
                offsetY: { value: 4, unit: 'px' },
                blur: { value: 0, unit: 'px' },
                spread: { value: 0, unit: 'px' }
            }
        ],
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'effect'
            }
        }
    },
    /**
     * motion
     */
    motion: {
        $description: 'a motion token',
        $type: 'duration',
        $value: '200ms',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'motion',
                transitionType: 'slide_in',
                direction: 'top',
                easingType: 'cubicBezier',
                easingFunction: {
                    x1: 0.41999998688697815,
                    y1: 1,
                    x2: 0,
                    y2: 1
                }
            }
        }
    },
    springMotion: {
        $description: 'a springMotion token',
        $type: 'duration',
        $value: '300ms',
        $extensions: {
            'org.lukasoppermann.figmaDesignTokens': {
                exportKey: 'motion',
                transitionType: 'slide_out',
                direction: 'top',
                easingType: 'spring',
                easingFunction: {
                    mass: 1,
                    stiffness: 15,
                    damping: 300
                }
            }
        }
    }
    // END of object
}