---
order: 5
title: Transformations
---

# Transformations

Transformations are included in between a coordination when the two ends of the coordination has different data structure or when altering data is desired.

Nebula supports some built-in transformations and custom transformations that conform with our interface. Built-in transformations can be referenced in the how string directly. Custom transformations needs explicit definition in the Nebula specification.

## 1 Built-in Transformations

### 1.1 Intersect

Create an array of unique values that are included in all given arrays.

#### Parameters

| Properties | Type    | Description     |
| :--------- | :------ | :-------------- |
| array1     | `Array` | **_Required._** |
| array2     | `Array` | **_Required._** |

#### Output

| Properties   | Type    | Description                       |
| :----------- | :------ | :-------------------------------- |
| intersection | `Array` | The intersection of input arrays. |

#### Example

```json
{
  // ...
  "coordinations": [
    {
      // low-level-grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.selection"] },
        { "name": "$d2", "bind": ["chart2.selection"] },
        { "name": "$d3", "bind": ["chart3.selection.unidirectional"] }
      ],
      "transformation": {
        "name": "intersect",
        "input": ["$d1", "$d2"], // [array1, array2]
        "output": ["$d3"], // [intersection]
        "triggers": "any"
      }
    },
    // high-level-grammar
    "select in chart1 and chart2, then intersect with $1 and $2, then select in chart3"
  ]
}
```

<!--

<div id="intersect-example1"></div>

```tsx | inline
import React from 'react'
import VisualizationsExample from '@/VisualizationsExample.tsx'
const spec = {
  coordinations: [
    {
      'data-visualization': [
        { name: '$d1', bind: ['intersect-example1-chart1.selection'] },
        { name: '$d2', bind: ['intersect-example1-chart2.selection'] },
        {
          name: '$d3',
          bind: ['intersect-example1-chart3.selection.unidirectional'],
        },
      ],
      transformation: {
        name: 'intersect',
        input: ['$d1', '$d2'],
        output: ['$d3'],
        triggers: 'any',
      },
    },
  ],
  visualizations: [
    {
      id: 'intersect-example1-chart1',
      container: '1 1 1 1',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'intersect-example1-chart2',
      container: '1 1 2 2',
      visualization: 'scatterplot',
      props: {
        data: 'cars',
        x: 'Horsepower',
        y: 'Acceleration',
      },
    },
    {
      id: 'intersect-example1-chart3',
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
  <VisualizationsExample spec={spec} target="#intersect-example1" />
)
``` -->

### 1.2 Aggregate

Aggregate an array into one record.

#### Parameters

| Properties | Type     | Description                                                                                      |
| :--------- | :------- | :----------------------------------------------------------------------------------------------- |
| arrays     | `Array`  | **_Required._**                                                                                  |
| type       | `string` | **_Required_**. <code>"sum"&#124;"max"&#124;"min"&#124;"mean"&#124;"average"&#124;"count"</code> |
| key        | `string` |

#### Output

| Properties  | Type     | Description |
| :---------- | :------- | :---------- |
| aggregation | `Number` |             |

#### Example

```json
{
  // ...
  "coordinations": [
    {
      // low-level-grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.selection"] },
        { "name": "$d2", "bind": ["input-component.value"] }
      ],
      "transformation": {
        "name": "aggregate",
        "input": ["$d1", "average", "attribute1"], // [arrays, type, key]
        "output": ["$d2"] // [aggregation]
      }
    },
    // high-level-grammar
    "select in chart1, then aggregate with $1, average, and attribute1, then set value in input-component"
  ]
}
```

### 1.3 Items to Ranges

Transform data items into data ranges.

#### Parameters

| Properties | Type            | Description                                  |
| :--------- | :-------------- | :------------------------------------------- |
| items      | `Array<Object>` | The data items.                              |
| keys       | `Array<string>` | The fields that are transformed into ranges. |

#### Output

| Properties | Type                      | Description                                  |
| :--------- | :------------------------ | :------------------------------------------- |
| ranges     | `Array<[number, number]>` | The derived data ranges of specified fields. |

#### Example

```json
{
  // ...
  "coordinations": [
    {
      // low-level-grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.selection"] },
        { "name": "$d2", "bind": ["chart2.ranges"] }
      ],
      "transformation": {
        "name": "items-to-ranges",
        "input": ["$d1", ["attr1", "attr2"]], // [items, keys]
        "output": ["$d2"] // [ranges]
      }
    }
  ]
}
```

### 1.4 Ranges to Items

Transform data ranges into data items.

#### Parameters

| Properties | Type                       | Description                                |
| :--------- | :------------------------- | :----------------------------------------- |
| ranges     | `Object<string, number[]>` | The data ranges.                           |
| data       | `Array<Object>`            | The whole dataset of the destination side. |

#### Output

| Properties | Type            | Description                       |
| :--------- | :-------------- | :-------------------------------- |
| items      | `Array<Object>` | The filtered items in the ranges. |

#### Example

```json
{
  // ...
  "coordinations": [
    {
      // low-level-grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.ranges"] },
        { "name": "$d2", "bind": ["chart2.data"]}
        { "name": "$d3", "bind": ["chart2.selection"] }
      ],
      "transformation": {
        "name": "ranges-to-items",
        "input": ["$d1", "$d2"], // [ranges, data]
        "output": ["$d3"] // [items]
      }
    }
  ]
}
```

### 1.5 Match

Transform data ranges into data items by filtering.

#### Parameters

| Properties      | Type            | Description                                          |
| :-------------- | :-------------- | :--------------------------------------------------- |
| originItems     | `Array<Object>` | The data items of the origin side.                   |
| originKey       | `string`        | The key field of the origin side.                    |
| destinationKey  | `string`        | The key field of the destination side.               |
| destinationData | `Array<Object>` | The whole set of data items of the destination side. |

#### Output

| Properties       | Type            | Description                                                                                                                             |
| :--------------- | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| destinationItems | `Array<Object>` | The filtered destination data items whose value of `destinationKey` field appears in the `originKey` field of at least one origin item. |

#### Example

```json
{
  // ...
  "coordinations": [
    {
      // low-level-grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.selection"] },
        { "name": "$d2", "bind": ["chart2.data"] },
        { "name": "$d3", "bind": ["chart2.selection.unidirectional"] }
      ],
      "transformation": {
        "name": "items-to-ranges",
        "input": ["$d1", "originId", "destinationId", "$d2"], // [originItems, originKey, destinationKey, destinationData]
        "output": ["$d3"] // [destinationItems]
      }
    }
  ]
}
```

## 2 Custom Transformations

For now, Nebula supports custom transformation by visiting a remote API with the POST method.

### Definition

| Properties | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| name       | `string` | **_Required_**. Non-repeatable.                     |
| url        | `string` | **_Required_**. Send a HTTP POST request to compute |
| parameters | `Array`  | **_Required_**. Parameter names.                    |
| output     | `Array`  | **_Required_**. Output names.                       |

Note that the parameters at runtime are sent via the request body and that the output data in the response should be in the json format.

#### Example

Definition

```json
{
  "name": "kmeans",
  "url": "http://example.com:5000/kmeans",
  "parameters": ["arrary", "k"],
  "output": ["array"]
}
```

Usage

```json
{
  // ...
  "coordinations": [
    {
      // low-level grammar
      "data-visualization": [
        { "name": "$d1", "bind": ["chart1.selection"] },
        { "name": "$d2", "bind": ["chart2.data"] }
      ],
      "transformation": {
        "name": "kmeans",
        "input": ["$d1", 5], // [array, k]
        "output": ["$d2"] // [array]
      }
    },
    // high-level grammar
    "select in chart1, then kmeans with $1 and 5, then set data in chart2"
  ]
}
```

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```
