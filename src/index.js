const ALWAYS = 'always'
const OFF = false
const ERROR = true
const COLOR_HEX_CASE = 'lower'
const COLOR_HEX_LENGTH = 'short'
const INDENTATION = 2
const LINEBREAKS = 'unix'
const MAX_EMPTY_LINES = 2
const MAX_NESTING_DEPTH = 2
const NUMBER_MAX_PRECISION = 2
const PROPERTY_CASE = 'lower'
const STRING_QUOTES = 'single'
const UNIT_CASE = 'lower'
const VALUE_KEYWORD_CASE = 'lower'

module.exports = {
  'color-no-invalid-hex': ERROR,
  'font-family-no-duplicate-names': ERROR,
  'font-family-no-missing-generic-family-keyword': ERROR,
  'function-calc-no-invalid': ERROR,
  'function-calc-no-unspaced-operator': ERROR,
  'function-linear-gradient-no-nonstandard-direction': ERROR,
  'string-no-newline': ERROR,
  'unit-no-unknown': ERROR,
  'property-no-unknown': ERROR,
  'keyframe-declaration-no-important': ERROR,
  'declaration-block-no-duplicate-properties': ERROR,
  'block-no-empty': ERROR,
  'selector-pseudo-class-no-unknown': ERROR,
  'selector-pseudo-element-no-unknown': ERROR,
  'selector-type-no-unknown': ERROR,
  'media-feature-name-no-unknown': ERROR,
  'at-rule-no-unknown': ERROR,
  'comment-no-empty': ERROR,
  'no-duplicate-selectors': ERROR,
  'no-empty-source': ERROR,
  'no-extra-semicolons': ERROR,
  'no-invalid-double-slash-comments': ERROR,
  'color-named': ['never', {
    ignoreProperties: ['composes']
  }],
  'color-no-hex': OFF,
  'function-url-no-scheme-relative': ERROR,
  'number-max-precision': NUMBER_MAX_PRECISION,
  'shorthand-property-no-redundant-values': ERROR,
  'value-no-vendor-prefix': ERROR,
  'property-no-vendor-prefix': ERROR,
  'declaration-block-no-redundant-longhand-properties': ERROR,
  'declaration-no-important': ERROR,
  'at-rule-no-vendor-prefix': ERROR,
  'max-nesting-depth': MAX_NESTING_DEPTH,
  'no-unknown-animations': ERROR,
  'color-hex-case': COLOR_HEX_CASE,
  'color-hex-length': COLOR_HEX_LENGTH,
  'function-url-quotes': ERROR,
  'function-whitespace-after': ALWAYS,
  'number-leading-zero': ALWAYS,
  'number-no-trailing-zeros': ERROR,
  'string-quotes': STRING_QUOTES,
  'length-zero-no-unit': ERROR,
  'unit-case': UNIT_CASE,
  'value-keyword-case': VALUE_KEYWORD_CASE,
  'property-case': PROPERTY_CASE,
  indentation: INDENTATION,
  linebreaks: LINEBREAKS,
  'max-empty-lines': MAX_EMPTY_LINES,
  'no-eol-whitespace': ERROR,
  'no-missing-end-of-source-newline': ERROR,
  'no-empty-first-line': ERROR,
  'unicode-bom': 'never'
}
