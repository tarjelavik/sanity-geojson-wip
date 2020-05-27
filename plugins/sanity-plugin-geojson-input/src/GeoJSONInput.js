import React, {useState, getState} from 'react'
import MapGL, {NavigationControl} from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import Fieldset from 'part:@sanity/components/fieldsets/default'
import {
  PatchEvent,
  set,
  setIfMissing,
  unset,
} from 'part:@sanity/form-builder/patch-event'
import config from 'config:mapbox-input'

export default function GeoJSONInput (props) {
  const { type, value, markers, level } = props
  
  let initialState = {
    data: {
      type: "FeatureCollection",
      features: []
    }
  };
  
  const [geojson, setGeojson] = useState(initialState);
  // const [features, setFeatures] = useState([]);

  return (
    <Fieldset legend={type.title} description={type.description} markers={markers} level={level}>
      Test
      <MapGL
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={config.apiKey}
        latitude={37.78}
        longitude={-122.41}
        zoom={11}
      >
        <NavigationControl showZoom position='top-right' />
        <Draw
          // onDrawCreate={({features}) => setGeojson({features})}
          // onDrawUpdate={({features}) => setGeojson({features})}
          data={geojson.data}
          onChange={(data) => setGeojson({ data })}
          userProperties={true}
        />
      </MapGL>
      <div>
        <pre>{JSON.stringify(geojson, null, 2)}</pre>
      </div>
    </Fieldset>
  )
}
