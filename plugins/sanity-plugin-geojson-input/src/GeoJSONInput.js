import React from 'react'
import Fieldset from 'part:@sanity/components/fieldsets/default'

export default function GeoJSONInput (props) {
  const {type, value, markers, level} = props

  return (
    <Fieldset legend={type.title} description={type.description} markers={markers} level={level}>
      Im an input
    </Fieldset>
  )
}
