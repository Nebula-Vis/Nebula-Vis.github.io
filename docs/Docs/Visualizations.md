---
order: 3
title: Visualizations
---

# Visualizations

We have built in common visualization charts and integrated some third-party libraries to aid construction of multi-view visualizations.

To instantiate a visualization with Nebula, add a _visualization object_ in the `visualizations` field in the Nebula specification.

## Visualization Object

The common structure of a visualization object is as follows.

| Properties    | Type     | Description                                                                                                         |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------ |
| id            | `string` | **_Required_**. Unique ID for a visualization instance.                                                             |
| container     | `string` | **_Required_**. Container name or grid interval, based on the layout defined in the Nebula specification.           |
| visualization | `string` | **_Required_**. The name of the visualization type.                                                                 |
| props         | `Object` | **_Required_**. Specification for the visualization instance; the structure varies depending on visualization type. |

## Built-in Visualizations

The built-in visualization types are listed below.

- [Scatterplot](#scatterplot)
- [Bar chart](#bar-chart)
- [Line chart](#line-chart)
- [Parallel coordinates](#parallel-coordinates)
- [Radial coordinates](#radial-coordinates)
- [Pie chart](#pie-chart)
- [Donut chart](#donut-chart)
- [Sector chart](#sector-chart)
- [Area chart](#area-chart)
- [Heatmap](#heatmap)
- [Tree](#tree)
- [Treemap](#treemap)
- [Sunburst chart](#sunburst-chart)
- [Node-link graph](#node-link-graph)
- [Map](#map)
- [Button](#button)
- [Input](#input)
- [Slider](#slider)
- [Select](#select)
- [LineUp](#lineup)
- [Vega-Lite](#vega-lite)

Note that we have also integrated some functionalities of [LineUp](https://github.com/lineupjs/lineupjs) and [Vega-Lite](https://vega.github.io/vega-lite/), showing Nebula's compatibility.

See below for the structure of the `prop` field of each visualization type.

### Scatterplot

| Properties     | Type                       | Description                                                                                                  | Manipulation Method | Target |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------- | ------ |
| data           | `string`                   | The data name. **Note**: it receives data value array in visualization implementation.                       | set                 | data   |
| x              | `string`                   | The data field encoded by the x channel. **Default**: the first quantitative attribute's name of the data.   | encode              | x      |
| y              | `string`                   | The data field encoded by the y channel. **Default**: the second quantitative attribute's name of the data.  | encode              | y      |
| scale          | `Object<string, number[]>` | Data extents of the x and y axes. **Default**: `{[x]: [xAttr.min, xAttr.max], [y]: [yAttr.min, yAttr.max]}`. | navigate            | ranges |
| selection      | `Array`                    | The collection of selected data items. **Default**: all items of the data.                                   | select              | items  |
| size           | `number`                   | The radius of the point, in pixels. **Default**: `4`.                                                        | encode              | size   |
| color          | `string`                   | The color of the point, css color string. **Default**: `#66C2A5`.                                            | encode              | color  |
| alternateColor | `string`                   | The color of the point de-emphasized points, css color string. **Default**: `#B3B3B3`.                       | -                   | -      |
| filteredData   | `Array`                    | The filtered data items.                                                                                     | filter              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "scatterplot1",
      "container": "1 1 1 1",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Acceleration",
        "y": "Horsepower"
      }
    }
  ],
  "data": [
    { "name": "cars", "path": "https://nebula-vis.github.io/data/cars.json" }
  ]
}
```

<div id="scatterplotExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'scatterplot1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Acceleration',
        y: 'Horsepower',
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'cars', path: '/data/cars.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#scatterplotExample" />
)
```

### Bar Chart

| Property       |  Type                       | Description                                                                                                 | Method   | Target    |
| -------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- | --------- |
| data           |  `string`                   |  The data name. **Note**: it receives data value array in visualization implementation.                     | set      | data      |
| x              |  `string`                   | The data field encoded by the x channel. **Default**: the first quantitative attribute's name of the data.  | encode   | x         |
| y              |  `string`                   | The data field encoded by the y channel. **Default**: the second quantitative attribute's name of the data. | encode   | y         |
| count          |  `number`                   | The number of the bar. **Default**: `5`.                                                                    | encode   | count     |
| aggregate      |  `string`                   | The aggregate method to deal data in each part. **Default**: `count`.                                       | encode   | aggregate |
| selection      |  `Array`                    | The collection of selected data items. **Default**: all items of the data.                                  | select   | items     |
| selectedXRange |  `Object<string, number[]>` | The range of x that is selected. **Default**: `{}`.                                                         | select   | ranges    |
| xRange         |  `Array`                    | The range of x that displaying. **Default**: `[]`.                                                          | navigate | ranges    |
| bottomEdge     |  `string`                   | Orientation of bottom edge. **Default**: `bottom`.                                                          | -        | -         |
| margin         |  `Object<string, number>`   | The margins around bars. **Default**: `{top: 20, right: 20, bottom: 35, left: 30, between: 1}`.             | -        | -         |
| isDisplay      |  `boolean`                  | Axis display or not. **Default**: `true`.                                                                   | -        | -         |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "bar-chart",
      "container": "1 1 1 1",
      "visualization": "barchart",
      "props": {
        "data": "houses",
        "x": "Unit Price",
        "y": ["Living Rooms", "Bedrooms"],
        "aggregate": ["average", "average"],
        "stacked": true
      }
    }
  ],
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="barchartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'bar-chart',
      container: '1 1 1 1',
      visualization: 'barchart',
      props: {
        data: 'houses',
        x: 'Unit Price',
        y: ['Living Rooms', 'Bedrooms'],
        aggregate: ['average', 'average'],
        stacked: true,
        margin: {
          left: 50,
          top: 20,
          right: 50,
          bottom: 40,
        },
      },
    },
  ],
  data: [{ name: 'houses', path: '/data/houses.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#barchartExample" />
)
```

### Line Chart

| Property       |  Type                       | Description                                                                                                    | Method | Target |
| -------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| data           |  `string`                   |  The data name. **Note**: it receives data value array in visualization implementation.                        | set    | data   |
| x              |  `string`                   | The data field encoded by the x channel. **Default**: the first quantitative attribute's name of the data.     | encode | x      |
| y              |  `string`                   | The data field encoded by the y channel. **Default**: The second quantitative attribute's name of the data.    | encode | y      |
| detail         |  `string`                   | The data field encoded by the label channel. **Default**: The third quantitative attribute's name of the data. | encode | y      |
| brushType      |  `string`                   | The type of brush, select x, select y or select area. **Default**: `xy`.                                       | encode | type   |
| selectedXRange |  `Object<string, number[]>` | The range of x that is selected. **Default**: `{}`.                                                            | select | ranges |
| selection      |  `Array`                    | The collection of selected data items. **Default**: all items of the data.                                     | select | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "line-chart",
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
    }
  ],
  "data": [
    {
      "name": "covid",
      "path": "https://nebula-vis.github.io/data/daily-cases-covid-19-by-continent.json"
    }
  ]
}
```

<div id="linechartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '500px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'line-chart',
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
  ],
  coordinations: [],
  data: [
    { name: 'covid', path: '/data/daily-cases-covid-19-by-continent.json' },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#linechartExample" />
)
```

### Parallel Coordinates

| Properties | Type     | Description             | Manipulation Method | Target |
| ---------- | -------- | ----------------------- | ------------------- | ------ |
| data       | `Array`  | the data items          | set                 | data   |
| color      | `string` | the stroke color        | encode              | data   |
| selection  | `Array`  | the selected data items | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "parallel-coordinates",
      "container": "1 1 1 1",
      "visualization": "parallel",
      "props": {
        "data": "cars",
        "encoding": {
          "color": "steelblue"
        }
      }
    }
  ],
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="parallelExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '600px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'parallel-coordinates',
      container: '1 1 1 1',
      visualization: 'parallel',
      props: {
        data: 'cars',
        selection: [],
        encoding: {
          color: 'steelblue',
        },
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'cars',
      path: '/data/cars.csv',
      format: 'csv',
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#parallelExample" />
)
```

### Radial Coordinates

| Properties | Type     | Description             | Manipulation Method | Target |
| ---------- | -------- | ----------------------- | ------------------- | ------ |
| data       | `Array`  | the data items          | set                 | data   |
| color      | `string` | the stoke color         | encode              | data   |
| selection  | `Array`  | the selected data items | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "radial-coordinates",
      "container": "1 1 1 1",
      "visualization": "radial",
      "props": {
        "data": "cars",
        "selection": [],
        "encoding": {
          "color": "steelblue"
        }
      }
    }
  ],
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
```

<div id="radialExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'radial-coordinates',
      container: '1 1 1 1',
      visualization: 'radial',
      props: {
        data: 'cars',
        selection: [],
        encoding: {
          color: 'steelblue',
        },
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'cars', path: '/data/cars.csv', format: 'csv' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#radialExample" />
)
```

### Pie Chart

| Properties | Type     | Description                                     | Manipulation Method | Target |
| ---------- | -------- | ----------------------------------------------- | ------------------- | ------ |
| data       | `Array`  | the data items                                  | set                 | data   |
| x          | `string` | the data attribute encoded by x channel (range) | encode              | x      |
| y          | `string` | the data attribute encoded by y channel (value) | encode              | y      |
| selection  | `Array`  | the data items                                  | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "pie-chart",
      "container": "1 1 1 1",
      "visualization": "piechart",
      "props": {
        "data": "pie-data",
        "range": "name",
        "value": "value",
        "aggregate": "average"
      }
    }
  ],
  "data": [
    {
      "name": "pie-data",
      "values": [
        { "name": "flare", "value": 260 },
        { "name": "flare", "value": 255 },
        { "name": "animate", "value": 210 },
        { "name": "data", "value": 110 },
        { "name": "data", "value": 165 },
        { "name": "flex", "value": 101 },
        { "name": "physics", "value": 244 },
        { "name": "physics", "value": 131 },
        { "name": "query", "value": 327 }
      ]
    }
  ]
}
```

<div id="piechartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'pie-chart',
      container: '1 1 1 1',
      visualization: 'piechart',
      props: {
        data: 'pie-data',
        range: 'name',
        value: 'value',
        aggregate: 'average',
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'pie-data',
      values: [
        { name: 'flare', value: 260 },
        { name: 'flare', value: 255 },
        { name: 'animate', value: 210 },
        { name: 'data', value: 110 },
        { name: 'data', value: 165 },
        { name: 'flex', value: 101 },
        { name: 'physics', value: 244 },
        { name: 'physics', value: 131 },
        { name: 'query', value: 327 },
      ],
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#piechartExample" />
)
```

### Donut Chart

| Properties | Type     | Description                                     | Manipulation Method | Target |
| ---------- | -------- | ----------------------------------------------- | ------------------- | ------ |
| data       | `Array`  | the data items                                  | set                 | data   |
| x          | `string` | the data attribute encoded by x channel (range) | encode              | x      |
| y          | `string` | the data attribute encoded by y channel (value) | encode              | y      |
| selection  | `Array`  | the data items                                  | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "donut-chart",
      "container": "1 1 1 1",
      "visualization": "donutchart",
      "props": {
        "data": "donut-data",
        "range": "name",
        "value": "value",
        "innerRadius": 0.5,
        "aggregate": "sum"
      }
    }
  ],
  "data": [
    {
      "name": "donut-data",
      "values": [
        { "name": "flare", "value": 260 },
        { "name": "flare", "value": 255 },
        { "name": "animate", "value": 210 },
        { "name": "data", "value": 110 },
        { "name": "data", "value": 165 },
        { "name": "flex", "value": 101 },
        { "name": "physics", "value": 244 },
        { "name": "physics", "value": 131 },
        { "name": "query", "value": 327 }
      ]
    }
  ]
}
```

<div id="donutchartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'donut-chart',
      container: '1 1 1 1',
      visualization: 'donutchart',
      props: {
        data: 'donut-data',
        range: 'name',
        value: 'value',
        innerRadius: 0.5,
        aggregate: 'sum',
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'donut-data',
      values: [
        { name: 'flare', value: 260 },
        { name: 'flare', value: 255 },
        { name: 'animate', value: 210 },
        { name: 'data', value: 110 },
        { name: 'data', value: 165 },
        { name: 'flex', value: 101 },
        { name: 'physics', value: 244 },
        { name: 'physics', value: 131 },
        { name: 'query', value: 327 },
      ],
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#donutchartExample" />
)
```

### Sector Chart

| Properties | Type     | Description                                     | Manipulation Method | Target |
| ---------- | -------- | ----------------------------------------------- | ------------------- | ------ |
| data       | `Array`  | the data items                                  | set                 | data   |
| x          | `string` | the data attribute encoded by x channel (range) | encode              | x      |
| y          | `string` | the data attribute encoded by y channel (value) | encode              | y      |
| selection  | `Array`  | the data items                                  | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "sector-chart",
      "container": "1 1 1 1",
      "visualization": "sectorchart",
      "props": {
        "data": "sector-data",
        "range": "name",
        "value": "value",
        "innerRadius": 0.5,
        "aggregate": "min"
      }
    }
  ],
  "data": [
    {
      "name": "sector-data",
      "values": [
        { "name": "flare", "value": 260 },
        { "name": "flare", "value": 255 },
        { "name": "animate", "value": 210 },
        { "name": "data", "value": 110 },
        { "name": "data", "value": 165 },
        { "name": "flex", "value": 101 },
        { "name": "physics", "value": 244 },
        { "name": "physics", "value": 131 },
        { "name": "query", "value": 327 }
      ]
    }
  ]
}
```

<div id="sectorchartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'sector-chart',
      container: '1 1 1 1',
      visualization: 'sectorchart',
      props: {
        data: 'sector-data',
        range: 'name',
        value: 'value',
        innerRadius: 0.5,
        aggregate: 'min',
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'sector-data',
      values: [
        { name: 'flare', value: 260 },
        { name: 'flare', value: 255 },
        { name: 'animate', value: 210 },
        { name: 'data', value: 110 },
        { name: 'data', value: 165 },
        { name: 'flex', value: 101 },
        { name: 'physics', value: 244 },
        { name: 'physics', value: 131 },
        { name: 'query', value: 327 },
      ],
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#sectorchartExample" />
)
```

### Area Chart

| Properties | Type                       | Description                                                                                           | Manipulation Method | Target |
| ---------- | -------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------- | ------ |
| data       | `string`                   | The data name. **Note**: it receives data value array in visualization implementation.                | set                 | data   |
| x          | `string`                   | **Default**: the first quantitative attribute's name of the data.                                     | encode              | x      |
| y          | `Array<string>`            | **Default**: the second to the last quantitative attribute's names in alphabetical order of the data. | encode              | y      |
| selection  | `Array`                    | The collection of selected data items. **Default**: all items in data field.                          | select              | items  |
| scale      | `Object<string, number[]>` | Data domains in x axis. **Default**: `{[x]: [xAttr.min, xAttr.max]}`                                  | navigate            | ranges |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "area-chart",
      "container": "1 1 1 1",
      "visualization": "areachart",
      "props": {
        "data": "areachart",
        "x": "month",
        "y": ["apples", "bananas", "dates"]
      }
    }
  ],
  "data": [
    {
      "name": "areachart",
      "values": [
        {
          "month": 1,
          "apples": 3840,
          "bananas": 1920,
          "cherries": 960,
          "dates": 400
        },
        {
          "month": 2,
          "apples": 1600,
          "bananas": 1440,
          "cherries": 960,
          "dates": 400
        },
        {
          "month": 3,
          "apples": 640,
          "bananas": 960,
          "cherries": 640,
          "dates": 400
        },
        {
          "month": 4,
          "apples": 320,
          "bananas": 480,
          "cherries": 640,
          "dates": 400
        }
      ]
    }
  ]
}
```

<div id="areachartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'area-chart',
      container: '1 1 1 1',
      visualization: 'areachart',
      props: {
        data: 'areachart',
        x: 'month',
        y: ['apples', 'bananas', 'dates'],
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'areachart',
      values: [
        { month: 1, apples: 3840, bananas: 1920, cherries: 960, dates: 400 },
        { month: 2, apples: 1600, bananas: 1440, cherries: 960, dates: 400 },
        { month: 3, apples: 640, bananas: 960, cherries: 640, dates: 400 },
        { month: 4, apples: 320, bananas: 480, cherries: 640, dates: 400 },
      ],
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#areachartExample" />
)
```

### Heatmap

| Properties | Type                       | Description                             | Manipulation Method | Target |
| ---------- | -------------------------- | --------------------------------------- | ------------------- | ------ |
| data       | `Array`                    | the data items                          | set                 | data   |
| x          | `string`                   | the data attribute encoded by x channel | encode              | x      |
| y          | `string`                   | the data attribute encoded by y channel | encode              | y      |
| scale      | `Object<string, number[]>` | the value ranges of the x attribute     | navigate            | -      |
| selection  | `Array`                    | the selected data items                 | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "heat-map",
      "container": "1 1 1 1",
      "visualization": "heatmap2d",
      "props": {
        "data": "cars",
        "encoding": {
          "x": "Horsepower",
          "y": "Weight_in_lbs",
          "z": "Miles_per_Gallon",
          "countX": 8,
          "countY": 5
          //...
        },
        "aggregate": "average"
      }
    }
  ],
  "data": [
    { "name": "cars", "path": "https://nebula-vis.github.io/data/cars.json" }
  ]
}
```

<div id="heatmapExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'heat-map',
      container: '1 1 1 1',
      visualization: 'heatmap2d',
      props: {
        data: 'cars',
        encoding: {
          x: 'Horsepower',
          y: 'Acceleration',
          z: 'Miles_per_Gallon',
          countX: 5,
          countY: 8,
          bgColor: 'white',
          axisSwitch: true,
          rectMargin: 3,
          xAxisSpace: 20,
          yAxisSpace: 60,
          margin: 10,
        },
        aggregate: 'average',
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'cars', path: '/data/cars.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#heatmapExample" />
)
```

### Tree

| Properties | Type     | Description             | Manipulation Method | Target  |
| ---------- | -------- | ----------------------- | ------------------- | ------- |
| data       | `Object` | the data items          | set                 | data    |
| selection  | `Object` | the selected data items | select              | subtree |

<br/>

```json
{
  // ...
  "visualizations": [
    {
      "id": "tree",
      "container": "1 1 1 1",
      "visualization": "tree",
      "props": {
        "selection": null,
        "data": "test-tree",
        "nodeId": "name"
      }
    }
  ],
  "data": [
    {
      "name": "test-tree",
      "path": "https://nebula-vis.github.io/data/test-tree.json"
    }
  ]
}
```

<div id="treeExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '550px',
    height: '420px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'tree',
      container: '1 1 1 1',
      visualization: 'tree',
      props: {
        selection: null,
        data: 'test-tree',
        nodeId: 'name',
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'test-tree', path: '/data/test-tree.json' }],
}
export default () => <VisualizationsExample spec={spec} target="#treeExample" />
```

### Treemap

| Properties | Type     | Description             | Manipulation Method | Target  |
| ---------- | -------- | ----------------------- | ------------------- | ------- |
| data       | `Object` | the data items          | set                 | data    |
| selection  | `Object` | the selected data items | select              | subtree |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "tree-map",
      "container": "1 1 1 1",
      "visualization": "treemap",
      "props": {
        "selection": null,
        "data": "test-tree",
        "nodeId": "name",
        "tile": "treemapDice"
      }
    }
  ],
  "data": [
    {
      "name": "test-tree",
      "path": "https://nebula-vis.github.io/data/test-tree.json"
    }
  ]
}
```

<div id="treemapExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '500px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'tree-map',
      container: '1 1 1 1',
      visualization: 'treemap',
      props: {
        selection: null,
        data: 'test-tree',
        nodeId: 'name',
        tile: 'treemapDice',
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'test-tree', path: '/data/test-tree.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#treemapExample" />
)
```

### Sunburst Chart

| Properties | Type     | Description             | Manipulation Method | Target |
| ---------- | -------- | ----------------------- | ------------------- | ------ |
| data       | `Object` | the data items          | set                 | data   |
| selection  | `Object` | the selected data items | select              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "sunburst-chart",
      "container": "1 1 1 1",
      "visualization": "sunburstchart",
      "props": {
        "data": "test-tree",
        "nodeId": "name",
        "innerRadius": 0.5,
        "aggregate": "min"
      }
    }
  ],
  "data": [
    {
      "name": "test-tree",
      "path": "https://nebula-vis.github.io/data/test-tree.json"
    }
  ]
}
```

<div id="sunburstchartExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '450px',
    height: '450px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'sunburst-chart',
      container: '1 1 1 1',
      visualization: 'sunburstchart',
      props: {
        data: 'test-tree',
        nodeId: 'name',
        innerRadius: 0.5,
        aggregate: 'min',
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'test-tree', path: '/data/test-tree.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#sunburstchartExample" />
)
```

### Node-Link Graph

| Properties | Type     | Description                                                                                                          | Manipulation Method | Target |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ------------------- | ------ |
| data       | `string` | The data name. **Note**: it receives `{nodes: Array<Object>, links: Array<Object>}` in visualization implementation. | set                 | data   |
| selection  | `Array`  | The collection of selected nodes. **Default**: all items in the nodes list.                                          | select              | items  |
| nodeId     | `string` | The id field of a node referenced by a link. **Default**: `'id'`.                                                    | -                   | -      |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "node-link-graph",
      "container": "1 1 1 1",
      "visualization": "graph",
      "props": {
        "data": "miserables"
      }
    }
  ],
  "data": [
    {
      "name": "miserables",
      "path": "https://nebula-vis.github.io/data/miserables.json"
    }
  ]
}
```

<div id="nodelinkgraphExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'node-link-graph',
      container: '1 1 1 1',
      visualization: 'graph',
      props: {
        data: 'miserables',
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'miserables',
      path: '/data/miserables.json',
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#nodelinkgraphExample" />
)
```

### Map

| Property     |  Type                       | Description                                                                                                 | Method   | Target |
| ------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------ |
| data         |  `string`                   |  The data name. **Note**: it receives data value array in visualization implementation.                     | set      | data   |
| x            |  `string`                   | The data field encoded by the x channel. **Default**: the first quantitative attribute's name of the data.  | encode   | x      |
| y            |  `string`                   | The data field encoded by the y channel. **Default**: The second quantitative attribute's name of the data. | encode   | y      |
| brushType    |  `string`                   | The type of brush, select x, select y or select area. **Default**: `xy`.                                    | encode   | type   |
| selectedArea |  `Object<string, number[]>` | The range of x and y that is selected. **Default**: `{}`.                                                   | select   | ranges |
| selection    |  `Array`                    | The collection of selected data items. **Default**: all items of the data.                                  | select   | items  |
| visibleData  |  `Array`                    | The data that is visible in the map. **Default**: `[]`.                                                     | navigate | items  |
| visibleRange |  `Object<string, number[]>` | The data range that is visible in the map. **Default**: `{}`.                                               | navigate | ranges |
| mapStyle     |  `Object`                   | The data range that is visible in the map. **Default**: `{}`.                                               | -        | -      |
| circleColor  |  `string`                   | The color of the circle in the map. **Default**: `#80B1D3`.                                                 | -        | -      |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "map",
      "container": "1 1 1 1",
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
          "centerPoint": [30.2708376789, 120.130177269],
          "zoom": 10
          // ...
        }
      }
    }
  ],
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="mapExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '500px',
    height: '500px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'map',
      container: '1 1 1 1',
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
  ],
  coordinations: [],
  data: [
    {
      name: 'houses',
      path: '/data/houses.json',
    },
  ],
}
export default () => <VisualizationsExample spec={spec} target="#mapExample" />
```

### Button

| Properties | Type      | Description                                                                                                                           | Manipulation Method | Target |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------ |
| text       | `string`  | The text displayed on the button. **Default**: `''`                                                                                   | set                 | value  |
| clicked    | `boolean` | The clicked status of the button. When button clicked set to true; after 50ms set to false. **Note**: not configurable through props. | -                   | -      |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "button",
      "container": "1 1 1 1",
      "visualization": "button",
      "props": {
        "text": "test button"
      }
    }
  ]
  // ...
}
```

<div id="buttonExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '300px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'button',
      container: '1 1 1 1',
      visualization: 'button',
      props: {
        text: 'test button',
      },
    },
  ],
  coordinations: [],
  data: [],
}
export default () => (
  <VisualizationsExample spec={spec} target="#buttonExample" />
)
```

### Input

| Properties | Type     | Description                                                                                                                                  | Manipulation Method | Target |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------ |
| value      | `string` | The default value of the input. The string value may be parsed into a json object before passing to other visualizatoins. **Default**: `''`. | set                 | value  |
| label      | `string` | The label of the input.                                                                                                                      | -                   | -      |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "input",
      "container": "1 1 1 1",
      "visualization": "input",
      "props": {
        "value": "[\"C\", \"A\", \"B\"]"
      }
    }
  ]
  // ...
}
```

<div id="inputExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '300px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'input',
      container: '1 1 1 1',
      visualization: 'input',
      props: {
        value: '["C", "A", "B"]',
      },
    },
  ],
  coordinations: [],
  data: [],
}
export default () => (
  <VisualizationsExample spec={spec} target="#inputExample" />
)
```

### Slider

| Properties | Type     | Description                                            | Manipulation Method | Target |
| ---------- | -------- | ------------------------------------------------------ | ------------------- | ------ |
| min        | `number` | The min value of the slider range. **_Required_**.     | -                   | -      |
| max        | `number` | The max value of the slider range. **_Required_**.     | -                   | -      |
| value      | `number` | The value of the slider. **Default**: the `min` value. | set                 | value  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "slider",
      "container": "1 1 1 1",
      "visualization": "slider",
      "props": {
        "min": 1,
        "max": 6,
        "value": 3
      }
    }
  ]
  // ...
}
```

<div id="sliderExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '300px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'slider',
      container: '1 1 1 1',
      visualization: 'slider',
      props: {
        min: 1,
        max: 6,
        value: 3,
      },
    },
  ],
  coordinations: [],
  data: [],
}
export default () => (
  <VisualizationsExample spec={spec} target="#sliderExample" />
)
```

### Select

| Properties | Type                          | Description                                             | Manipulation Method | Target |
| ---------- | ----------------------------- | ------------------------------------------------------- | ------------------- | ------ |
| options    | `Array<string>`               | The options of the select. **Default**: `[]`            | set                 | data   |
| selected   | <code>string&#124;null</code> | The selected option of the select. **Default**: `null`. | set                 | value  |
| lebel      | `string`                      | The label of the select                                 | -                   | -      |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "select",
      "container": "1 1 1 1",
      "visualization": "select",
      "props": {
        "options": ["#feb72b", "#4cbbb9", "#fa744f"],
        "selected": "#feb72b"
      }
    }
  ]
  // ...
}
```

<div id="selectExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '300px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'select',
      container: '1 1 1 1',
      visualization: 'select',
      props: {
        options: ['#feb72b', '#4cbbb9', '#fa744f'],
        selected: '#feb72b',
      },
    },
  ],
  coordinations: [],
  data: [],
}
export default () => (
  <VisualizationsExample spec={spec} target="#selectExample" />
)
```

### LineUp

Integrates some of the simple functionalities of [LineUpJs](https://github.com/lineupjs/lineupjs). Supports quantitative fields only.

| Properties   | Type            | Description                                                                                  | Manipulation Method | Target |
| ------------ | --------------- | -------------------------------------------------------------------------------------------- | ------------------- | ------ |
| data         | `string`        | The data name. **Note**: it receives data value array in visualization implementation.       | set                 | data   |
| selection    | `Array`         | The collection of selected data items. **Default**: all items in data field.                 | select              | items  |
| order        | `Array<string>` | The order of attribute. **Default**: all quantitative attribute names in alphabetical order. | reconfigure         | order  |
| filteredData | `Array`         | the filtered data items.                                                                     | filter              | items  |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "lineup",
      "container": "1 1 1 1",
      "visualization": "lineup",
      "props": {
        "data": "houses",
        "order": ["Living Rooms", "Bedrooms", "Floor Size"],
        "color": ["#fc8d62", "#8da0cb", "#a6d854"]
      }
    }
  ],
  // ...
  "data": [
    {
      "name": "houses",
      "path": "https://nebula-vis.github.io/data/houses.json"
    }
  ]
}
```

<div id="lineupExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '500px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'lineup',
      container: '1 1 1 1',
      visualization: 'lineup',
      props: {
        data: 'houses',
        order: ['Living Rooms', 'Bedrooms', 'Floor Size'],
        color: ['#fc8d62', '#8da0cb', '#a6d854'],
      },
    },
  ],
  coordinations: [],
  data: [{ name: 'houses', path: '/data/houses.json' }],
}
export default () => (
  <VisualizationsExample spec={spec} target="#lineupExample" />
)
```

### Vega-Lite

Integrates some of the functionalities of [Vega-Lite](https://vega.github.io/vega-lite/).

| Properties | Type     | Description                                                           | Manipulation Method | Target       |
| ---------- | -------- | --------------------------------------------------------------------- | ------------------- | ------------ |
| data       | `string` | **Note**: only supports named data sources that refer to global data. | set                 | data         |
| selection  | `Object` | The Vega-Lite selection specification.                                | select              | items/ranges |
| mark       | `string` | The Vega-Lite mark specification.                                     | -                   | -            |
| encoding   | `Object` | The Vega-Lite selection specification.                                | -                   | -            |

<br/>

```json
{
  // ...
  "visualizations": [
    // ...
    {
      "id": "vega-lite",
      "container": "1 1 1 1",
      "visualization": "vegalite",
      "props": {
        "data": { "name": "cars" },
        "mark": "point",
        "encoding": {
          "x": { "field": "Acceleration", "type": "quantitative" },
          "y": { "field": "Horsepower", "type": "quantitative" },
          "color": {
            "condition": {
              "selection": "interval",
              "value": "#66c2a5"
            },
            "value": "#d8d8d8"
          }
        },
        "selection": {
          "interval": { "type": "interval" }
        }
      }
    }
  ],
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.json"
    }
  ]
}
```

<div id="vegaliteExample"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '400px',
    height: '400px',
    rows: ['1fr'],
    columns: ['1fr'],
  },
  visualizations: [
    {
      id: 'vega-lite',
      container: '1 1 1 1',
      visualization: 'vegalite',
      props: {
        data: { name: 'cars' },
        mark: 'point',
        encoding: {
          x: { field: 'Acceleration', type: 'quantitative' },
          y: { field: 'Horsepower', type: 'quantitative' },
          color: {
            condition: {
              selection: 'interval',
              value: '#66c2a5',
            },
            value: '#d8d8d8',
          },
        },
        selection: {
          interval: { type: 'interval' },
        },
      },
    },
  ],
  coordinations: [],
  data: [
    {
      name: 'cars',
      path: '/data/cars.json',
    },
  ],
}
export default () => (
  <VisualizationsExample spec={spec} target="#vegaliteExample" />
)
```

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```
