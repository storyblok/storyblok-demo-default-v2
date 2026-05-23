// This file is used to parse custom fields from plugins in Storyblok and convert them into JSON Schema definitions for TypeScript generation.
module.exports = function (fieldName) {
  const colorFields = [
    'primary_highlight_color',
    'highlight_1_color',
    'highlight_2_color',
    'highlight_3_color',
    'primary_background_color',
    'background_1_color',
    'background_2_color',
    'background_3_color',
    'background_4_color',
    'background_5_color',
    'background_6_color',
    'background_7_color',
    'background_8_color',
    'background_9_color',
    'background_10_color',
    'primary_dark_color',
  ]
  if (colorFields.includes(fieldName)) {
    return {
      [fieldName]: {
        type: 'object',
        properties: {
          color: { type: 'string' },
        },
        required: ['color'],
        additionalProperties: false,
      },
    }
  }
}
