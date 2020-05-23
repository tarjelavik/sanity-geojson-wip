import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import GeoJSONInput from '../plugins/sanity-plugin-geojson-input/src/GeoJSONInput'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'place',
      title: 'Place',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'definedBy',
          title: 'Defined by',
          type: 'geojson'
        }
      ]
    },
    {
      name: 'geojson',
      title: 'GeoJSON',
      type: 'object',
      fields: [
        {
          name: 'value',
          title: 'Value',
          type: 'string',
          inputComponent: GeoJSONInput
        }
      ]
    }
  ])
})
