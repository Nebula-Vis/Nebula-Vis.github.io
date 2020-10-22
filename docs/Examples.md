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

## 1. Select with Intersect

The points highlighted in the third scatterplot are the intersection of the selected points in the first and the second scatterplots.

```
"Select items in scatterplot1 and scatterplot2,
 then intersect, then highlight items in scatterplot3."
```

<div id="with-transformation-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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
        x: 'Cylinders',
        y: 'Weight_in_lbs',
      },
    },
    {
      id: 'with-transformation-example1-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Acceleration',
        y: 'Horsepower',
      },
    },
    {
      id: 'with-transformation-example1-chart3',
      container: '1 1 3 3',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Miles_per_Gallon',
        y: 'Displacement',
      },
    },
  ],
  layout: {
    width: '900px',
    height: '300px',
    rows: ['1fr'],
    columns: ['1fr', '1fr', '1fr'],
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

## 2. Select-Set

A example of Select → Set coordinations in two scatterplots, where the selection of the first scatterplot will modify the dataset in the second scatterplot.

```
"Select items in scatterplot1,
 then set dataset in scatterplot2."
```

<div id="select-set-example2"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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
        x: 'economy (mpg)',
        y: 'cylinders',
      },
    },
    {
      id: 'select-set-example2-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
        x: 'economy (mpg)',
        y: 'cylinders',
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

## 3. Select-Filter

A example of Select → Filter coordinations in two scatterplots, where the selection of the first scatterplot will be filtered in the second scatterplot.

```
"Select items in scatterplot1,
 then filter items in scatterplot2"
```

<div id="select-filter-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-filter-example1-chart1, then filter items in select-filter-example1-chart2',
  ],
  visualizations: [
    {
      id: 'select-filter-example1-chart1',
      visualization: 'scatterplot',
      container: '1 1 1 1',
      props: {
        data: 'cars',
        x: 'economy (mpg)',
        y: 'cylinders',
      },
    },
    {
      id: 'select-filter-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
        x: 'economy (mpg)',
        y: 'cylinders',
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

## 4. Select-Navigate

### Example 1

A example of Select → Navigate coordinations in two scatterplots, where the selection of the first scatterplot will cause the navigation to the area in the second scatterplot.

```
"Select intervals in scatterplot1,
 then navigate scales in scatterplot2"
```

<div id="select-navigate-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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
        data: 'cars',
        x: 'economy (mpg)',
        y: 'cylinders',
      },
    },
    {
      id: 'select-navigate-example1-chart2',
      visualization: 'scatterplot',
      container: '1 1 2 2',
      props: {
        data: 'cars',
        x: 'economy (mpg)',
        y: 'cylinders',
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
  <NebulaExample spec={spec} target="#select-navigate-example1" />
)
```

### Example 2

An example of Select → Navigate coordination in a scatterplot and a map, where the
map will be navigated to the area according to the selected points in the scatterplot.

```
"Select items in scatterplot,
 then item2scales,
 then navigate scales in map."
```

<div id="select-navigate-example2"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
const spec = {
  coordinations: [
    'select items in select-navigate-example2-chart1, then navigate ranges in select-navigate-example2-chart2',
  ],
  visualizations: [
    {
      id: 'select-navigate-example2-chart1',
      visualization: 'scatterplot',
      container: '1 1 1 1',
      props: {
        data: 'houses',
        x: 'lng1',
        y: 'lat1',
      },
    },
    {
      id: 'select-navigate-example2-chart2',
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
  <NebulaExample spec={spec} target="#select-navigate-example2" />
)
```

## 5. Navigate-Navigate

An example of Navigate → Navigate coordination in a scatterplot and a map, where panning and zooming in the map will cause the corresponding panning and zooming in the scatterplot.

```
"Navigate scales in map,
 then navigate scales in scatterplot."
```

<div id="navigate-navigate-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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

## 6. Navigate-Select

An example of Navigate → Select coordination in a scatterplot and a map, where the points in the scatterplot will be highlighted if they fall in the area navigated in map.

```
"Navigate scales in map,
 then scales2items,
 then select items in scatterplot."
```

<div id="navigate-select-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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

## 7. Encode-Encode

An example of Encode → Encode coordination, where modifying the value of the slider will change the point size in both scatterplots.

```
"Encode size in scatterplot1,
 then encode size in scatterplot2."
```

<div id="encode-encode-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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
    width: '750px',
    height: '300px',
    rows: ['1fr'],
    columns: ['150px', '300px', '300px'],
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

## 8. Reconfigure-Reconfigure

An example of Reconfigure → Reconfigure coordination, where modifying the attribute order of the dataset in LineUp by dragging and
dropping will also modify the stacking order of attributes in the stacked bar chart.

```
"Reconfigure order in lineup,
 then reconfigure order in stacked-barchart."
```

<div id="reconfigure-reconfigure-example1"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'
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

## 9. SRVis

The reproduction of the core module of [SRVis](https://ieeexplore.ieee.org/document/8456575) with six visualizations, i.e., a map, four histograms, and a [LineUp](https://github.com/lineupjs). It consists of five
coordinations. 

Specifically, selecting data of interest in the map will modify the dataset of the four histograms to present the statistical distributions
of the selection along the longitude and latitude. Besides, the selection is also highlighted in the LineUp to show the details of dimensions. 
Panning
and zooming in map will modify the scales of x (longitude) in the top and bottom histograms and 
the scales of y (latitude) in the left and right
histograms with a data transformation to transform 2D scales to 1D. 
When panning and zooming, the visible data in the map is extracted by a
data transformation and fed into the LineUp to keep their datasets consistent. 
Rearranging the order of dimensions in the LineUp will update
that in the stacked histograms to keep their order consistent.

```
"Select items in map, then set data in histogram1, histogram2, stacked-barchart1, stacked-barchart2, and highlight items in lineup."
"Navigate scales in map, then xyscales2x, then navigate xscales in histogram1 and stacked-barchart1."
"Navigate scales in map, then xyscales2y, then navigate yscales in histogram2 and stacked-barchart2."
"Navigate scales in map, then scales2items, then set data in lineup."
"Reconfigure order in lineup, then reconfigure order in stacked-barchart1, stacked-barchart2."
```

<div id="srvis"></div>

```tsx | inline
import React from 'react'
import NebulaExample from '@/AsyncNebulaExample.tsx'

const spec = {
  coordinations: [
    'select items in map, then set data in histo-top, histo-left, stackedbar-right, and stackedbar-bottom, select items in lineup',
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
