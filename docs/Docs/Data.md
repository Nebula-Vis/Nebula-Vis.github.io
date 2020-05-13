---
order: 1
title: Data
---

# Data

Data defines the datasets used in the multiple coordinated views. There are two ways to define a named dataset, by inline data or remote data.

## Inline Data

With inline data, the dataset is included in the Nebula specification directly.

| Properties | Type     | Description                |
| ---------- | -------- | -------------------------- |
| name       | `string` | **_Required_**.            |
| values     | `Array`  | For multidimensional data. |
| nodes      | `Array`  | For graph data.            |
| links      | `Array`  | For graph data.            |
| hierarchy  | `Object` | For hierarchy data.        |

## Remote Data

With remote data, the dataset is fetched from a remote soure and converted into inline data. The structure of the fetched dataset should be the same as the inline data.

| Properties | Type     | Description                                                                                                                                                                                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | **_Required_**.                                                                                                                                                                                                                                 |
| path       | `string` | **_Required_**. Load data from remote path.                                                                                                                                                                                                     |
| format     | `string` | <code>json&#124;csv</code>. **Default**: `json`. JSON format requires a key named `values` for multidimensional data or two keys named `nodes` and `links` for graph data. CSV format requires a header and only support multidimensional data. |

## Examples

```json
{
  "data": [
    // inline data, multidimensional
    {
      "name": "houses",
      "values": [
        { "name": "house1", "price": 10000, "size": 100 },
        { "name": "house2", "price": 5000, "size": 78 },
        { "name": "house3", "price": 80000, "size": 350 }
      ]
    },
    // inline data, graph
    {
      "name": "graph1",
      "nodes": [{ "id": "people1" }, { "id": "people2" }],
      "links": [{ "source": "people1", "target": "people2" }]
    },
    // inline data, hierarchy
    {
      "name": "tree1",
      "hierarchy": {
        "name": "root",
        "children": [
          {
            "name": "child1",
            "children": [
              {
                "name": "grand-child1",
                "children": []
              }
            ]
          }
        ]
      }
    },
    // remote data, csv format
    {
      "name": "houses2",
      "path": "https://nebula-vis.github.io/data/houses.json",
      "format": "csv"
    }
  ]
}
```

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```
