---
order: 1
title: Coordinations
---

# Coordinations

Coordinations link visualizations so that user interaction in one view triggers multiple views to respond. 

Nebula grammar adopts rule-based natural language commands to express the coordination relationship.

## Grammar

Each coordination can be specified with a single string containing the manipulation on the origin and destination sides or an object containing such string and a list of IDs of the affected visualizations.

For the latter, the structure is like:

| Properties     | Type            | Description                                                                         |
| -------------- | --------------- | ----------------------------------------------------------------------------------- |
| how            | `string`        | **_Required_**. Three blocks of how to perform coordination between visualizations. |
| visualizations | `Array<string>` | IDs of visualizations to coordinate. Used by any and others.                        |

### How String

The how string consists of three blocks of substrings that describe the origin, transformatin, and destination of a coordination.

| Block          | Syntax                                                         | Note     |
| -------------- | -------------------------------------------------------------- | -------- |
| Origin         | `[<Method> (<Target>) in <Visualization>]`                     | Required |
| Transformation | `(Trigger) <Transformation> (with [Parameters])`               | Optional |
| Destination    | `[<Method> (<Target>) in <Visualization> (with <Parameters>)]` | Required |
| Trigger        | <code>when any&#124; when button clicked</code>                | Optional |

### Manipulation Methods

The manipulation methods represent user interactions on the origin side of a coordination or responses that mimic user interactions on the destination side.

| Name        | Description                                          | Synonyms                                          | Default Target |
| ----------- | ---------------------------------------------------- | ------------------------------------------------- | -------------- |
| select      | select some data items of interest from all the data | highlight                                         | items          |
| filter      | filter out some data items that are not interesting  |                                                   | items          |
| navigate    | pan, zoom, scroll, etc.                              | navigate/pan/zoom/scroll                          | scale          |
| encode      | change the encoding of a visualization               |                                                   | x              |
| reconfigure | reorder, adjust baseline, etc.                       | reconfigure/rearrange/arrange/organize/sort/align | order          |
| set         | set the dataset or other values of a visualization   | set/modify/change/replace                         | data           |
| append      | add data items to the dataset of a visualization     | append/add                                        | data           |

#### Key words

Key words are reserved for denoting the grammar structures.

| Name       | Type        | Description                                                                                               |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| then       | Conjunction | Partition three blocks.                                                                                   |
| and        | Conjunction |                                                                                                           |
| \$(number) | Data        | `$, $1, $2`                                                                                               |
| in         | Preposition | `n <Visualization>`                                                                                       |
| with       | Preposition | `with <Parameter>`                                                                                        |
| any        | Pronoun     | <code>&lt;Method&gt; (&lt;Target&gt;) in one &#124; any, &lt;Method&gt; (&lt;Target&gt;) in others</code> |
| others     | Pronoun     |                                                                                                           |

## Examples

<br/>

```json
{
  "coordinations": [
    "select in scatterplot1,
      then select in scatterplot2"
  ]
}
```

<div id="high-level-example1"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  coordinations: [
    'select in high-level-example1-chart1, then select in high-level-example1-chart2',
  ],
  visualizations: [
    {
      id: 'high-level-example1-chart1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'high-level-example1-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
  ],
  layout: {
    width: '600px',
    height: '300px',
    rows: ['1fr'],
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
  <VisualizationsExample spec={spec} target="#high-level-example1" />
)
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

```json
{
  "coordinations": [
    "select in scatterplot1 and scatterplot2,
      then intersect with $1 and $2,
      then select in scatterplot3"
  ]
}
```

<div id="high-level-example2"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  coordinations: [
    'select in high-level-example2-chart1 and high-level-example2-chart2, then intersect with $1 and $2, then select in high-level-example2-chart3',
  ],
  visualizations: [
    {
      id: 'high-level-example2-chart1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'high-level-example2-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'high-level-example2-chart3',
      container: '1 1 3 3',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
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
  <VisualizationsExample spec={spec} target="#high-level-example2" />
)
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

```json
{
  "coordination": [
    {
      "how": "select in any, then select in others",
      "visualizations": ["chart1", "chart2", "chart3"]
    }
  ]
}
```

<div id="high-level-example3"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  coordinations: [
    {
      how: 'select in any, then select in others',
      visualizations: [
        'high-level-example3-chart1',
        'high-level-example3-chart2',
        'high-level-example3-chart3',
      ],
    },
  ],
  visualizations: [
    {
      id: 'high-level-example3-chart1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'high-level-example3-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'high-level-example3-chart3',
      container: '1 1 3 3',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
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
  <VisualizationsExample spec={spec} target="#high-level-example3" />
)
```

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```
