---
order: 4
title: Examples - Nebula
sidemenu: false
---

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="examples" />
```

# Examples

We first present examples of Nebula specifications for common coordinations and then give a more complex example of a visual analytics system in published literature.

All the examples can be found in the templates of the online [editor](/editor). Tweak the json code and learn how to use Nebula grammar to build coordinated views.

## select-set

Example 1

```json
{
  "coordinations": ["select in chart1, then set data in chart2"],
  "visualizations": [
    {
      "id": "chart1",
      "container": "1 1 1 1",
      "visualization": "linechart",
      "props": {
        "data": "covid",
        "x": "Date",
        "y": "Daily new confirmed cases (cases)",
        "detail": "Entity",
        "brushType": "x",
        "colors": [
          "#4e79a7",
          "#f28e2c",
          "#e15759",
          "#76b7b2",
          "#59a14f",
          "#edc949"
        ]
      }
    },
    {
      "id": "chart2",
      "container": "1 1 2 2",
      "visualization": "piechart",
      "props": {
        "data": "covid",
        "range": "Entity",
        "value": "Daily new confirmed cases (cases)",
        "aggregate": "sum",
        "colors": [
          "#4e79a7",
          "#f28e2c",
          "#e15759",
          "#76b7b2",
          "#59a14f",
          "#edc949"
        ]
      }
    }
  ],
  "layout": {
    "width": "800px",
    "height": "300px",
    "rows": ["1fr"],
    "columns": ["1fr", "300px"]
  },
  "data": [
    {
      "name": "covid",
      "path": "https://nebula-vis.github.io/data/daily-cases-covid-19-by-continent.json"
    }
  ]
}
```

<div id="select-set-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select in select-set-example1-chart1, then set data in select-set-example1-chart2',
  ],
  visualizations: [
    {
      id: 'select-set-example1-chart1',
      container: '1 1 1 1',
      visualization: 'linechart',
      props: {
        data: 'covid',
        x: 'Date',
        y: 'Daily new confirmed cases (cases)',
        detail: 'Entity',
        brushType: 'x',
        colors: [
          '#4e79a7',
          '#f28e2c',
          '#e15759',
          '#76b7b2',
          '#59a14f',
          '#edc949',
        ],
      },
    },
    {
      id: 'select-set-example1-chart2',
      container: '1 1 2 2',
      visualization: 'piechart',
      props: {
        data: 'covid',
        range: 'Entity',
        value: 'Daily new confirmed cases (cases)',
        aggregate: 'sum',
        colors: [
          '#4e79a7',
          '#f28e2c',
          '#e15759',
          '#76b7b2',
          '#59a14f',
          '#edc949',
        ],
      },
    },
  ],
  layout: {
    width: '800px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr', '300px'],
  },
  data: [
    {
      name: 'covid',
      path: '/data/daily-cases-covid-19-by-continent.json',
    },
  ],
}

export default () => <NebulaExample spec={spec} target="#select-set-example1" />
```

Example 2

```json
{
  "coordinations": ["select items in chart1, then set data in chart2"],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "scatterplot",
      "container": "1 1 1 1",
      "props": {
        "data": "cars"
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 2 2",
      "props": {
        "data": "cars",
        "x": "power (hp)",
        "y": "0-60 mph (s)",
        "shouldUpdateScales": false
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="select-set-example2"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-set-example2-chart1, then set data in select-set-example2-chart2',
  ],
  visualizations: [
    {
      id: 'select-set-example2-chart1',
      visualization: 'scatterplot',
      container: '1 1 1 1',
      props: {
        data: 'cars',
      },
    },
    {
      id: 'select-set-example2-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
        x: 'power (hp)',
        y: '0-60 mph (s)',
        shouldUpdateScales: false,
      },
    },
  ],
  layout: {
    width: '700px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '1fr'],
  },
  data: [
    {
      name: 'cars',
      path: 'https://nebula-vis.github.io/data/cars.csv',
      format: 'csv',
    },
  ],
}

export default () => <NebulaExample spec={spec} target="#select-set-example2" />
```

## select-select

```json
{
  "coordinations": ["select items in chart1, then select items in chart2"],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "scatterplot",
      "container": "1 1 1 1",
      "props": {
        "data": "cars"
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 2 2",
      "props": {
        "data": "cars",
        "x": "power (hp)",
        "y": "0-60 mph (s)"
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="select-select-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-select-example1-chart1, then select items in select-select-example1-chart2',
  ],
  visualizations: [
    {
      id: 'select-select-example1-chart1',
      visualization: 'scatterplot',
      container: '1 1 1 1',
      props: {
        data: 'cars',
      },
    },
    {
      id: 'select-select-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
        x: 'power (hp)',
        y: '0-60 mph (s)',
      },
    },
  ],
  layout: {
    width: '700px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '1fr'],
  },
  data: [
    {
      name: 'cars',
      path: '/data/cars.csv',
      format: 'csv',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#select-select-example1" />
)
```

## select-filter

```json
{
  "coordinations": ["select items in chart1, then filter items in chart2"],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "barchart",
      "container": "1 1 1 1",
      "props": {
        "data": "cars"
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 2 2",
      "props": {
        "data": "cars"
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="select-filter-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-filter-example1-chart1, then filter items in select-filter-example1-chart2',
  ],
  visualizations: [
    {
      id: 'select-filter-example1-chart1',
      visualization: 'barchart',
      container: '1 1 1 1',
      props: {
        data: 'cars',
      },
    },
    {
      id: 'select-filter-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
      },
    },
  ],
  layout: {
    width: '700px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '1fr'],
  },
  data: [
    {
      name: 'cars',
      path: '/data/cars.csv',
      format: 'csv',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#select-filter-example1" />
)
```

## select-navigate

```json
{
  "coordinations": ["select items in chart1, then navigate ranges in chart2"],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "scatterplot",
      "container": "1 1 1 1",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1"
      }
    },
    {
      "id": "chart2",
      "visualization": "map",
      "container": "1 1 2 2",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1",
        "brushType": "xy",
        "bottomEdge": "bottom",
        "circleColor": "#80B1D3",
        "mapStyle": {
          "mapLayerStyle": "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
          "annotionLayerStyle": "http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}",
          "minZoom": 3,
          "maxZoom": 20,
          "centerPoint": [30.2708376789, 120.130177269],
          "zoom": 10,
          "zoomControl": false,
          "attributionControl": false
        }
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="select-navigate-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-navigate-example1-chart1, then navigate ranges in select-navigate-example1-chart2',
  ],
  visualizations: [
    {
      id: 'select-navigate-example1-chart1',
      visualization: 'scatterplot',
      container: '1 1 1 1',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
      },
    },
    {
      id: 'select-navigate-example1-chart2',
      visualization: 'map',
      container: '1 1 2 2',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
        brushType: 'xy',
        bottomEdge: 'bottom',
        circleColor: '#80B1D3',
        mapStyle: {
          mapLayerStyle:
            '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
          annotionLayerStyle:
            'http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}',
          minZoom: 3,
          maxZoom: 20,
          centerPoint: [30.2708376789, 120.130177269],
          zoom: 10,
          zoomControl: false,
          attributionControl: false,
        },
      },
    },
  ],
  layout: {
    width: '700px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '1fr'],
  },
  data: [
    {
      name: 'houses',
      path: '/data/houses.json',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#select-navigate-example1" />
)
```

## navigate-navigate

```json
{
  "coordinations": [
    "navigate ranges in chart1, then navigate ranges in chart2"
  ],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "map",
      "container": "1 1 1 1",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1",
        "brushType": "xy",
        "bottomEdge": "bottom",
        "circleColor": "#80B1D3",
        "mapStyle": {
          "mapLayerStyle": "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
          "annotionLayerStyle": "http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}",
          "minZoom": 3,
          "maxZoom": 20,
          "centerPoint": [30.2708376789, 120.130177269],
          "zoom": 10,
          "zoomControl": false,
          "attributionControl": false
        }
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 3 3",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1"
      }
    }
  ],
  "layout": {
    "width": "750px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "50px", "1fr"]
  },
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="navigate-navigate-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'navigate ranges in navigate-navigate-example1-chart1, then navigate ranges in navigate-navigate-example1-chart2',
  ],
  visualizations: [
    {
      id: 'navigate-navigate-example1-chart1',
      visualization: 'map',
      container: '1 1 1 1',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
        brushType: 'xy',
        bottomEdge: 'bottom',
        circleColor: '#80B1D3',
        mapStyle: {
          mapLayerStyle:
            '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
          annotionLayerStyle:
            'http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}',
          minZoom: 3,
          maxZoom: 20,
          centerPoint: [30.2708376789, 120.130177269],
          zoom: 10,
          zoomControl: false,
          attributionControl: false,
        },
      },
    },
    {
      id: 'navigate-navigate-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 3 3',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
      },
    },
  ],
  layout: {
    width: '750px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '50px', '1fr'],
  },
  data: [
    {
      name: 'houses',
      path: '/data/houses.json',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#navigate-navigate-example1" />
)
```

<!-- ## select-reconfigure
多选框+button+lineup，reconfigure order？ -->

## navigate-select

```json
{
  "coordinations": [
    {
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.visibleRange"] },
        { "name": "$d2", "bind": ["chart2.data"] },
        { "name": "$d3", "bind": ["chart2.selection.unidirectional"] }
      ],
      "transformation": {
        "name": "ranges-to-items",
        "input": ["$d1", "$d2"],
        "output": ["$d3"]
      }
    }
  ],
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "map",
      "container": "1 1 1 1",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1",
        "brushType": "xy",
        "bottomEdge": "bottom",
        "circleColor": "#80B1D3",
        "mapStyle": {
          "mapLayerStyle": "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
          "annotionLayerStyle": "http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}",
          "minZoom": 3,
          "maxZoom": 20,
          "centerPoint": [30.2708376789, 120.130177269],
          "zoom": 10,
          "zoomControl": false,
          "attributionControl": false
        }
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 3 3",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1"
      }
    }
  ],
  "layout": {
    "width": "750px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "50px", "1fr"]
  },
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="navigate-select-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    {
      'data-visualization': [
        { name: '$d1', bind: ['navigate-select-example1-chart1.visibleRange'] },
        { name: '$d2', bind: ['navigate-select-example1-chart2.data'] },
        {
          name: '$d3',
          bind: ['navigate-select-example1-chart2.selection.unidirectional'],
        },
      ],
      transformation: {
        name: 'ranges-to-items',
        input: ['$d1', '$d2'],
        output: ['$d3'],
      },
    },
  ],
  visualizations: [
    {
      id: 'navigate-select-example1-chart1',
      visualization: 'map',
      container: '1 1 1 1',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
        brushType: 'xy',
        bottomEdge: 'bottom',
        circleColor: '#80B1D3',
        mapStyle: {
          mapLayerStyle:
            '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
          annotionLayerStyle:
            'http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}',
          minZoom: 3,
          maxZoom: 20,
          centerPoint: [30.2708376789, 120.130177269],
          zoom: 10,
          zoomControl: false,
          attributionControl: false,
        },
      },
    },
    {
      id: 'navigate-select-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 3 3',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
      },
    },
  ],
  layout: {
    width: '750px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '50px', '1fr'],
  },
  data: [
    {
      name: 'houses',
      path: '/data/houses.json',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#navigate-select-example1" />
)
```

## encode-encode

> // Experimental

```json
{
  "coordinations": [
    "encode size in chart1 with slider, then encode size in chart2"
  ],
  "visualizations": [
    {
      "id": "slider",
      "visualization": "slider",
      "container": "1 1 1 1",
      "props": {
        "min": 1,
        "max": 10,
        "value": 4
      }
    },
    {
      "id": "chart1",
      "visualization": "scatterplot",
      "container": "1 1 2 2",
      "props": {
        "data": "cars"
      }
    },
    {
      "id": "chart2",
      "visualization": "scatterplot",
      "container": "1 1 3 3",
      "props": {
        "data": "cars",
        "x": "power (hp)",
        "y": "0-60 mph (s)"
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["150px", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="encode-encode-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'set value in encode-encode-example1-slider, then encode size in encode-encode-example1-chart1 and encode-encode-example1-chart2',
  ],
  visualizations: [
    {
      id: 'encode-encode-example1-slider',
      visualization: 'slider',
      container: '1 1 1 1',
      props: {
        min: 1,
        max: 10,
        value: 4,
      },
    },
    {
      id: 'encode-encode-example1-chart1',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
      },
    },
    {
      id: 'encode-encode-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 3 3',
      props: {
        data: 'cars',
        x: 'power (hp)',
        y: '0-60 mph (s)',
      },
    },
  ],
  layout: {
    width: '700px',
    height: '350px',
    rows: ['1fr'],
    columns: ['150px', '1fr', '1fr'],
  },
  data: [
    {
      name: 'cars',
      path: 'https://nebula-vis.github.io/data/cars.csv',
      format: 'csv',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#encode-encode-example1" />
)
```

## reconfigure-reconfigure

Reorder the columns of one of the charts, and the other one will follow as well.

```json
{
  "coordinations": [
    "reconfigure order in chart1, then reconfigure order in chart2"
  ],
  "visualizations": [
    {
      "id": "chart1",
      "container": "1 2 1 1",
      "visualization": "lineup",
      "props": {
        "data": "cars",
        "order": ["economy (mpg)", "displacement (cc)", "power (hp)"],
        "color": ["#66c2a5", "#fc8d62", "#8da0cb"]
      }
    },
    {
      "id": "chart2",
      "container": "1 1 3 3",
      "visualization": "barchart",
      "props": {
        "data": "cars",
        "x": "year",
        "y": ["economy (mpg)", "displacement (cc)", "power (hp)"],
        "color": ["#66c2a5", "#fc8d62", "#8da0cb"],
        "aggregate": ["average", "average", "average", "average"],
        "count": 6,
        "stacked": true
      }
    }
  ],
  "layout": {
    "width": "800px",
    "height": "350px",
    "rows": ["1fr"],
    "columns": ["1fr", "50px", "350px"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="reconfigure-reconfigure-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'reconfigure order in reconfigure-reconfigure-example1-chart1, then reconfigure order in reconfigure-reconfigure-example1-chart2',
  ],
  visualizations: [
    {
      id: 'reconfigure-reconfigure-example1-chart1',
      container: '1 1 1 1',
      visualization: 'lineup',
      props: {
        data: 'cars',
        order: ['economy (mpg)', 'displacement (cc)', 'power (hp)'],
        color: ['#66c2a5', '#fc8d62', '#8da0cb'],
      },
    },
    {
      id: 'reconfigure-reconfigure-example1-chart2',
      container: '1 1 3 3',
      visualization: 'barchart',
      props: {
        data: 'cars',
        x: 'year',
        y: ['economy (mpg)', 'displacement (cc)', 'power (hp)'],
        color: ['#66c2a5', '#fc8d62', '#8da0cb'],
        aggregate: ['average', 'average', 'average', 'average'],
        count: 6,
        stacked: true,
      },
    },
  ],
  layout: {
    width: '800px',
    height: '350px',
    rows: ['1fr'],
    columns: ['1fr', '50px', '350px'],
  },
  data: [
    {
      name: 'cars',
      path: '/data/cars.csv',
      format: 'csv',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#reconfigure-reconfigure-example1" />
)
```

## with data transformation

The points highlighted in the third scatterplot are the intersection of the selected points in the first and the second scatterplots.

```json
{
  "coordinations": [
    "select in chart1 and chart2, then intersect with $1 and $2, then select in chart3"
  ],
  "visualizations": [
    {
      "id": "chart1",
      "container": "1 1 1 1",
      "visualization": "scatterplot",
      "props": {
        "data": "cars"
      }
    },
    {
      "id": "chart2",
      "container": "1 1 2 2",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Horsepower",
        "y": "Acceleration"
      }
    },
    {
      "id": "chart3",
      "container": "2 2 1 2",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Displacement",
        "y": "Weight_in_lbs"
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "700px",
    "rows": ["1fr", "1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.json"
    }
  ]
}
```

<div id="with-transformation-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'
const spec = {
  coordinations: [
    'select in with-transformation-example1-chart1 and with-transformation-example1-chart2, then intersect with $1 and $2, then select in with-transformation-example1-chart3',
  ],
  visualizations: [
    {
      id: 'with-transformation-example1-chart1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
      },
    },
    {
      id: 'with-transformation-example1-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'with-transformation-example1-chart3',
      container: '2 2 1 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Displacement',
        y: 'Weight_in_lbs',
      },
    },
  ],
  layout: {
    width: '700px',
    height: '700px',
    rows: ['1fr', '1fr'],
    columns: ['1fr', '1fr'],
  },
  data: [
    {
      name: 'cars',
      path: '/data/cars.json',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#with-transformation-example1" />
)
```

## Complex MCV

A complex multiple coordinated views as in the system of [SRVis](https://ieeexplore.ieee.org/document/8456575).

```json
{
  "coordinations": [
    "select items in map, then set data in histo-top, histo-left, stackedbar-right, and stackedbar-bottom, select items in lineup",
    {
      "how": "select ranges in any, then select ranges in others",
      "visualizations": [
        "histo-top",
        "histo-left",
        "stackedbar-right",
        "stackedbar-bottom",
        "map"
      ]
    },
    "navigate ranges in map, then navigate ranges in histo-top, histo-left, stackedbar-right, stackedbar-bottom",
    "navigate items in map, then set data in lineup",
    "reconfigure order in lineup, then encode y in stackedbar-right, stackedbar-bottom"
  ],
  "visualizations": [
    {
      "id": "map",
      "container": "2 2 2 2",
      "visualization": "map",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": "lat1",
        "brushType": "xy",
        "bottomEdge": "bottom",
        "circleColor": "#80B1D3",
        "mapStyle": {
          "mapLayerStyle": "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
          "annotionLayerStyle": "http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}",
          "minZoom": 3,
          "maxZoom": 20,
          "centerPoint": [30.2708376789, 120.130177269],
          "zoom": 10,
          "zoomControl": false,
          "attributionControl": false
        }
      }
    },
    {
      "id": "histo-top",
      "container": "1 1 2 2",
      "visualization": "barchart",
      "props": {
        "data": "houses",
        "x": "lng1",
        "aggregate": "max",
        "y": "Floor Size",
        "count": 100,
        "bottomEdge": "bottom",
        "margin": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 5
        },
        "isDisplay": false
      }
    },
    {
      "id": "histo-left",
      "container": "2 2 1 1",
      "visualization": "barchart",
      "props": {
        "data": "houses",
        "x": "lat1",
        "aggregate": "count",
        "count": 100,
        "bottomEdge": "right",
        "margin": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 5
        },
        "isDisplay": false
      }
    },
    {
      "id": "stackedbar-right",
      "container": "2 2 3 3",
      "visualization": "barchart",
      "props": {
        "data": "houses",
        "x": "lat1",
        "y": ["Living Rooms", "Bedrooms", "Floor Size"],
        "aggregate": ["sum", "sum", "max"],
        "scaleY": [1, 1, 0.01],
        "count": 100,
        "color": ["#fc8d62", "#8da0cb", "#a6d854"],
        "bottomEdge": "left-mirror",
        "margin": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 5
        },
        "stacked": true,
        "isDisplay": false
      }
    },
    {
      "id": "stackedbar-bottom",
      "container": "3 3 2 2",
      "visualization": "barchart",
      "props": {
        "data": "houses",
        "x": "lng1",
        "y": ["Living Rooms", "Bedrooms", "Floor Size"],
        "aggregate": ["sum", "sum", "max"],
        "scaleY": [1, 1, 0.01],
        "count": 100,
        "color": ["#fc8d62", "#8da0cb", "#a6d854"],
        "bottomEdge": "top-mirror",
        "margin": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 5
        },
        "stacked": true,
        "isDisplay": false
      }
    },
    {
      "id": "lineup",
      "container": "1 3 4 4",
      "visualization": "lineup",
      "props": {
        "data": "houses",
        "order": ["Living Rooms", "Bedrooms", "Floor Size"],
        "color": ["#fc8d62", "#8da0cb", "#a6d854"]
      }
    }
  ],
  "layout": {
    "width": "1250px",
    "height": "800px",
    "rows": ["100px", "800px", "100px"],
    "columns": ["100px", "600px", "100px", "1fr"]
  },
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="srvis"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/NebulaExample.tsx'

const spec = {
  coordinations: [
    'select items in map, then set data in histo-top, histo-left, stackedbar-right, and stackedbar-bottom, select items in lineup',
    {
      how: 'select ranges in any, then select ranges in others',
      visualizations: [
        'histo-top',
        'histo-left',
        'stackedbar-right',
        'stackedbar-bottom',
        'map',
      ],
    },
    'navigate ranges in map, then navigate ranges in histo-top, histo-left, stackedbar-right, stackedbar-bottom',
    'navigate items in map, then set data in lineup',
    'reconfigure order in lineup, then encode y in stackedbar-right, stackedbar-bottom',
  ],
  visualizations: [
    {
      id: 'map',
      container: '2 2 2 2',
      visualization: 'map',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
        brushType: 'xy',
        bottomEdge: 'bottom',
        circleColor: '#80B1D3',
        mapStyle: {
          mapLayerStyle:
            '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
          annotionLayerStyle:
            'http://t{s}.tianditu.com/DataServer?T=eva_w&X={x}&Y={y}&L={z}&tk={key}',
          minZoom: 3,
          maxZoom: 20,
          centerPoint: [30.2708376789, 120.130177269],
          zoom: 10,
          zoomControl: false,
          attributionControl: false,
        },
      },
    },
    {
      id: 'histo-top',
      container: '1 1 2 2',
      visualization: 'barchart',
      props: {
        data: 'houses',
        x: 'lng1',
        aggregate: 'max',
        y: 'Floor Size',
        count: 100,
        bottomEdge: 'bottom',
        margin: {
          right: 0,
          left: 0,
          top: 0,
          bottom: 5,
        },
        isDisplay: false,
      },
    },
    {
      id: 'histo-left',
      container: '2 2 1 1',
      visualization: 'barchart',
      props: {
        data: 'houses',
        x: 'lat1',
        aggregate: 'count',
        count: 100,
        bottomEdge: 'right',
        margin: {
          right: 0,
          left: 0,
          top: 0,
          bottom: 5,
        },
        isDisplay: false,
      },
    },
    {
      id: 'stackedbar-right',
      container: '2 2 3 3',
      visualization: 'barchart',
      props: {
        data: 'houses',
        x: 'lat1',
        y: ['Living Rooms', 'Bedrooms', 'Floor Size'],
        aggregate: ['sum', 'sum', 'max'],
        scaleY: [1, 1, 0.01],
        count: 100,
        color: ['#fc8d62', '#8da0cb', '#a6d854'],
        bottomEdge: 'left-mirror',
        margin: {
          right: 0,
          left: 0,
          top: 0,
          bottom: 5,
        },
        stacked: true,
        isDisplay: false,
      },
    },
    {
      id: 'stackedbar-bottom',
      container: '3 3 2 2',
      visualization: 'barchart',
      props: {
        data: 'houses',
        x: 'lng1',
        y: ['Living Rooms', 'Bedrooms', 'Floor Size'],
        aggregate: ['sum', 'sum', 'max'],
        scaleY: [1, 1, 0.01],
        count: 100,
        color: ['#fc8d62', '#8da0cb', '#a6d854'],
        bottomEdge: 'top-mirror',
        margin: {
          right: 0,
          left: 0,
          top: 0,
          bottom: 5,
        },
        stacked: true,
        isDisplay: false,
      },
    },
    {
      id: 'lineup',
      container: '1 3 4 4',
      visualization: 'lineup',
      props: {
        data: 'houses',
        order: ['Living Rooms', 'Bedrooms', 'Floor Size'],
        color: ['#fc8d62', '#8da0cb', '#a6d854'],
      },
    },
  ],
  layout: {
    width: '1250px',
    height: '800px',
    rows: ['100px', '800px', '100px'],
    columns: ['100px', '600px', '100px', '1fr'],
  },
  data: [
    {
      name: 'houses',
      path: 'https://nebula-vis.github.io/data/houses.json',
    },
  ],
}

export default () => (
  <NebulaExample spec={spec} target="#srvis" position="vertical" />
)
```
