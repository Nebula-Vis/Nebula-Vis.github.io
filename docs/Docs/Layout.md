---
order: 3
title: Layout
---

# Layout

Lay out the visualizations in multiple coordinated views (MCVs) with a grammar derived from [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Grid Layout

| Properties | Type            | Description                                                                                                              |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| width      | `string`        | **_Required_**.                                                                                                          |
| height     | `string`        | **_Required_**.                                                                                                          |
| rows       | `Array<string>` | **_Required_**. Denotes the height of each row, supports fixed height (px, rem, ch, etc.) and flexible height (fr, %).   |
| columns    | `Array<string>` | **_Required_**. Denotes the width of each column, supports fixed height (px, rem, ch, etc.) and flexible height (fr, %). |
| containers | `Array<Object>` | Denotes the container of each visualizations. Could be specified in visualizations directly.                             |

## Container Object

| Properties | Type     | Description                                                                                                                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | **_Required_**. Unique id of a container. Mount point.                                                                                                                            |
| grids      | `string` | **_Required_**. **Format**: `` `${RowStart} ${RowEnd} ${ColumnStart} ${ColumnEnd}` ``, denotes the closed interval of grid elements: [RowStart, RowEnd], [ColumnStart, ColumnEnd] |

## Example

Define containers in the layout spec and then reference by container names in the visualization spec.

```json
{
  "layout": {
    "width": "500px",
    "height": "600px",
    "rows": ["1fr", "1fr"],
    "columns": ["1fr"],
    "containers": [
      { "name": "chart1-container", "grids": "1 1 1 1" },
      { "name": "chart2-container", "grids": "2 2 1 1" }
    ]
  },
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "linechart",
      "container": "chart1-container"
      // ...
    },
    {
      "id": "chart2",
      "visualization": "piechart",
      "container": "chart2-container"
      // ...
    }
  ]
  // ...
}
```

<div id="layout-example1" class="nebula-example"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '500px',
    height: '600px',
    rows: ['1fr', '1fr'],
    columns: ['1fr'],
    containers: [
      { name: 'chart1-container', grids: '1 1 1 1' },
      { name: 'chart2-container', grids: '2 2 1 1' },
    ],
  },
  visualizations: [
    {
      id: 'layout-example1-chart1',
      visualization: 'linechart',
      container: 'chart1-container',
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
      id: 'layout-example1-chart2',
      visualization: 'piechart',
      container: 'chart2-container',
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
  data: [
    { name: 'covid', path: '/data/daily-cases-covid-19-by-continent.json' },
  ],
}

export default () => (
  <VisualizationsExample spec={spec} target="#layout-example1" />
)
```

Define containers in visualization specifications directly.

```json
{
  "layout": {
    "width": "800px",
    "height": "300px",
    "rows": ["1fr"],
    "columns": ["500px", "1fr"]
  },
  "visualizations": [
    {
      "id": "chart1",
      "visualization": "linechart",
      "container": "1 1 1 1"
      // ...
    },
    {
      "id": "chart2",
      "visualization": "piechart",
      "container": "1 1 2 2"
      // ...
    }
  ]
  // ...
}
```

<div id="layout-example" class="nebula-example"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  layout: {
    width: '800px',
    height: '300px',
    rows: ['1fr'],
    columns: ['500px', '1fr'],
  },
  visualizations: [
    {
      id: 'chart1',
      visualization: 'linechart',
      container: '1 1 1 1',
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
      id: 'chart2',
      visualization: 'piechart',
      container: '1 1 2 2',
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
  data: [
    { name: 'covid', path: '/data/daily-cases-covid-19-by-continent.json' },
  ],
}

export default () => (
  <VisualizationsExample spec={spec} target="#layout-example" />
)
```

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```
