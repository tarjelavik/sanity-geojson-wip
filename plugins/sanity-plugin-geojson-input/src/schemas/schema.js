import GeoJSONInput from '../GeoJSONInput'
// import GeoJSONPreview from './GeoJSONPreview'

export default {
  name: 'geojson',
  title: 'GeoJSON',
  type: 'object',
  inputComponent: GeoJSONInput,
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string'
    }
  ]
}
