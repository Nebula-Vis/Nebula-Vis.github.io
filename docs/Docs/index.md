---
order: 0
title: Docs - Nebula
---

```tsx | inline
import React from 'react'
import CoverHeader from '@/CoverHeader.tsx'
export default () => <CoverHeader subject="docs" />
```

# Nebula

Nebula combines a grammar of graphics and a novel grammar of coordination for authoring multiple coordinated views (MCVs).
The grammar of graphics is used to create and lay out various visualizations with different datasets. The grammar of coordination is for coordinating these visualizations.

Nebula specification consists of five parts:

- **[Data](/docs/data)**, the data sources used in MCVs,
- **[Layout](/docs/layout)**, the layout of the views,
- **[Visualizations](/docs/visualizations)**, the visualizations used in the views,
- **[Coordinations](/docs/coordinations)**, the coordinations between the views,
- **[Transformations](/docs/transformations)**, the definition of custom transformations.

The skeleton of a Nebula specification:

```json
{
  "data": [
    {
      "name": ...,
      ...
    },
    ...
  ],
  "layout": {
    "width": ...,
    "height": ...,
    "rows": ...,
    "columns": ...
  },
  "visualizations": [
    {
      "id": ...,
      "container": ...,
      "visualization": ...,
      "props": { ... }
    },
    ...
  ],
  "coordinations": [ ... ],
  "transformations": [
    {
      "name": ...,
      "url": ...,
      "parameters": [ ... ],
      "output": [ ... ]
    },
    ...
  ]
}
```
