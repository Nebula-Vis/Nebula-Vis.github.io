export default {
  'select-set': {
    spec: `{
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
`,
    imgSrc: '/assets/fig-covid.png',
  },
  'select-set-2': {
    spec: `{
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
    }`,
    imgSrc: '/assets/fig-select-set-2.png'
  },
  'select-select-any-others': {
    spec: `{
  "coordinations": [
    {
      "how": "select in any, then select in others",
      "visualizations": ["chart10", "chart11", "chart12"]
    },
    {
      "how": "select in any, then select in others",
      "visualizations": ["chart14", "chart15", "chart16"]
    }
  ],
  "visualizations": [
    {
      "id": "chart10",
      "container": "1 1 1 1",
      "visualization": "piechart",
      "props": {
        "data": "treePie",
        "range": "name",
        "value": "value",
        "sort": "descending",
        "aggregate": "average"
      }
    },
    {
      "id": "chart11",
      "container": "1 1 2 2",
      "visualization": "donutchart",
      "props": {
        "data": "treePie",
        "range": "name",
        "value": "value",
        "innerRadius": 0.5,
        "sort": "ascending",
        "aggregate": "sum"
      }
    },
    {
      "id": "chart12",
      "container": "1 1 3 3",
      "visualization": "sectorchart",
      "props": {
        "data": "treePie",
        "range": "name",
        "value": "value",
        "sort": "",
        "innerRadius": 0.5,
        "aggregate": "min"
      }
    },
    {
      "id": "chart14",
      "container": "2 2 1 1",
      "visualization": "donutchart",
      "props": {
        "data": "treePieBin",
        "range": "x",
        "value": "y",
        "aggregate": "average",
        "innerRadius": 0.2,
        "count": 5
      }
    },
    {
      "id": "chart15",
      "container": "2 2 2 2",
      "visualization": "piechart",
      "props": {
        "data": "treePieBin",
        "range": "x",
        "value": "y",
        "aggregate": "sum",
        "count": 5
      }
    },
    {
      "id": "chart16",
      "container": "2 2 3 3",
      "visualization": "sectorchart",
      "props": {
        "data": "treePieBin",
        "range": "x",
        "value": "y",
        "aggregate": "min",
        "innerRadius": 0.2,
        "count": 5
      }
    }
  ],
  "layout": {
    "width": "900px",
    "height": "600px",
    "rows": ["1fr", "1fr"],
    "columns": ["1fr", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "treePie",
      "values": [
        { "name": "flare", "value": 220 },
        { "name": "flare", "value": 260 },
        { "name": "flare", "value": 255 },
        { "name": "analytics", "value": 230 },
        { "name": "animate", "value": 210 },
        { "name": "data", "value": 110 },
        { "name": "data", "value": 165 },
        { "name": "data", "value": 290 },
        { "name": "display", "value": 162 },
        { "name": "flex", "value": 101 },
        { "name": "physics", "value": 244 },
        { "name": "physics", "value": 131 },
        { "name": "query", "value": 327 }
      ]
    },
    {
      "name": "treePieBin",
      "values": [
        { "x": 1, "y": 222 },
        { "x": 2, "y": 12 },
        { "x": 2, "y": 644 },
        { "x": 2, "y": 134 },
        { "x": 4, "y": 45 },
        { "x": 8, "y": 67 },
        { "x": 4, "y": 95 },
        { "x": 9, "y": 137 },
        { "x": 11, "y": 24 },
        { "x": 11, "y": 74 },
        { "x": 20, "y": 65 },
        { "x": 13, "y": 13 }
      ]
    }
  ]
}
`,
    imgSrc: '/assets/fig-piecharts-2.png',
  },
  'select-select': {
    spec: `{
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
}`,
    imgSrc: '/assets/fig-select-select.png',
  },
  'select-select-trees': {
    spec: `{
  "coordinations": [
    "select subtree in any, then select subtree in others"
  ],
  "visualizations": [
    {
      "id": "chart1",
      "container": "1 2 1 4",
      "visualization": "tree",
      "props": {
        "selection": null,
        "data": "tree1",
        "nodeId": "name"
      }
    },
    {
      "id": "chart2",
      "container": "3 4 1 4",
      "visualization": "treemap",
      "props": {
        "selection": null,
        "data": "tree1",
        "nodeId": "name",
        "tile": "treemapDice"
      }
    }
  ],
  "layout": {
    "width": "800px",
    "height": "800px",
    "rows": ["1fr", "1fr", "1fr", "1fr"],
    "columns": ["1fr", "1fr", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "tree1",
      "path": "https://nebula-vis.github.io/data/tree-data.json"
    }
  ]
}
`,
    imgSrc: '/assets/fig-trees.png',
  },
  'select-filter': {
    spec: `{
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
`,
    imgSrc: '/assets/fig-select-filter.png',
  },
  'select-navigate': {
    spec: `{
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
}`,
    imgSrc: '/assets/fig-select-navigate.png',
  },
  'navigate-navigate': {
    spec: `{
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
}`,
    imgSrc: '/assets/fig-navigate-navigate.png',
  },
  'navigate-select': {
    spec: `{
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
}`,
    imgSrc: '/assets/fig-navigate-select.png',
  },
  'set-encode': {
    spec: `{
  "coordinations": [
    "set value in select-x, then encode x in scatterplot",
    "set value in select-y, then encode y in scatterplot"
  ],
  "visualizations": [
    {
      "id": "select-x",
      "visualization": "select",
      "container": "1 1 1 1",
      "props": {
        "label": "Attribute for x channel",
        "options": [
          "economy (mpg)",
          "cylinders",
          "displacement (cc)",
          "power (hp)",
          "weight (lb)",
          "0-60 mph (s)",
          "year"
        ],
        "selected": "economy (mpg)"
      }
    },
    {
      "id": "select-y",
      "visualization": "select",
      "container": "2 2 1 1",
      "props": {
        "label": "Attribute for y channel",
        "options": [
          "economy (mpg)",
          "cylinders",
          "displacement (cc)",
          "power (hp)",
          "weight (lb)",
          "0-60 mph (s)",
          "year"
        ],
        "selected": "cylinders"
      }
    },
    {
      "id": "scatterplot",
      "visualization": "scatterplot",
      "container": "1 2 2 2",
      "props": {
        "data": "cars"
      }
    }
  ],
  "layout": {
    "width": "700px",
    "height": "350px",
    "rows": ["1fr", "1fr"],
    "columns": ["1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}`,
    imgSrc: '/assets/fig-set-encode.png',
  },
  'reconfigure-reconfigure': {
    spec: `{
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
        "order": [
          "economy (mpg)",
          "displacement (cc)",
          "power (hp)"
        ],
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
}`,
    imgSrc: '/assets/fig-reconfigure-reconfigure.png',
  },
  'with data transformation': {
    spec: `{
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
      "container": "1 1 3 3",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Displacement",
        "y": "Weight_in_lbs"
      }
    }
  ],
  "layout": {
    "width": "900px",
    "height": "300px",
    "rows": ["1fr"],
    "columns": ["1fr", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.json"
    }
  ]
}`,
    imgSrc: '/assets/fig-with-transformation.png',
  },
  'scatterplot matrix': {
    spec: `{
  "coordinations": [
    "navigate ranges in any, then navigate ranges in others",
    "select in any, then select in others"
  ],
  "visualizations": [
    {
      "id": "chart1",
      "container": "1 1 1 1",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Miles_per_Gallon",
        "y": "Miles_per_Gallon"
      }
    },
    {
      "id": "chart2",
      "container": "1 1 2 2",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Miles_per_Gallon",
        "y": "Horsepower"
      }
    },
    {
      "id": "chart3",
      "container": "1 1 3 3",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Miles_per_Gallon",
        "y": "Acceleration"
      }
    },
    {
      "id": "chart4",
      "container": "2 2 1 1",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Horsepower",
        "y": "Miles_per_Gallon"
      }
    },
    {
      "id": "chart5",
      "container": "2 2 2 2",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Horsepower",
        "y": "Horsepower"
      }
    },
    {
      "id": "chart6",
      "container": "2 2 3 3",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Horsepower",
        "y": "Acceleration"
      }
    },
    {
      "id": "chart7",
      "container": "3 3 1 1",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Acceleration",
        "y": "Miles_per_Gallon"
      }
    },
    {
      "id": "chart8",
      "container": "3 3 2 2",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Acceleration",
        "y": "Horsepower"
      }
    },
    {
      "id": "chart9",
      "container": "3 3 3 3",
      "visualization": "scatterplot",
      "props": {
        "data": "cars",
        "x": "Acceleration",
        "y": "Acceleration"
      }
    }
  ],
  "layout": {
    "width": "900px",
    "height": "900px",
    "rows": ["1fr", "1fr", "1fr"],
    "columns": ["1fr", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.json"
    }
  ]
}
`,
    imgSrc: '/assets/fig-scatterplots.png',
  },
  srvis: {
    spec: `{
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
`,
    imgSrc: '/assets/fig-srvis.png',
  },
  coordinates: {
    spec: `
{
  "visualizations": [
    {
      "id": "chart3",
      "container": "3 4 1 4",
      "visualization": "parallel",
      "props": {
        "data": "cars",
        "encoding": {
          "color": "steelblue"
        }
      }
    },
    {
      "id": "chart4",
      "container": "1 2 1 4",
      "visualization": "radial",
      "props": {
        "data": "cars",
        "encoding": {
          "color": "steelblue"
        }
      }
    }
  ],
  "layout": {
    "width": "800px",
    "height": "800px",
    "rows": ["1fr", "1fr", "1fr", "1fr"],
    "columns": ["1fr", "1fr", "1fr", "1fr"]
  },
  "data": [
    {
      "name": "numericDataset",
      "values": [
        { "Unemployment": 0.4798915482899704, "id": 0 },
        { "Unemployment": 0.49677950372069635, "id": 1 },
        { "Unemployment": 0.9992529126936218, "id": 2 },
        { "Unemployment": 0.7416073368990708, "id": 3 },
        { "Unemployment": 0.5586864711090214, "id": 4 },
        { "Unemployment": 0.17284168250747145, "id": 5 },
        { "Unemployment": 0.7675412182080448, "id": 6 },
        { "Unemployment": 0.5147680544858715, "id": 7 },
        { "Unemployment": 0.21005266275530943, "id": 8 },
        { "Unemployment": 0.33473681085298046, "id": 9 },
        { "Unemployment": 0.3089783412547811, "id": 10 },
        { "Unemployment": 0.1766804715491097, "id": 11 },
        { "Unemployment": 0.5325993199285717, "id": 12 },
        { "Unemployment": 0.8692288975709761, "id": 13 },
        { "Unemployment": 0.2462686793132367, "id": 14 },
        { "Unemployment": 0.8489109542514697, "id": 15 },
        { "Unemployment": 0.6113716936013509, "id": 16 },
        { "Unemployment": 0.30788958585088966, "id": 17 },
        { "Unemployment": 0.13023912302048912, "id": 18 },
        { "Unemployment": 0.740966417901842, "id": 19 }
      ]
    },
    {
      "name": "cars",
      "path": "https://nebula-vis.github.io/data/cars.csv",
      "format": "csv"
    }
  ]
}
`,
    imgSrc: '/assets/fig-coordinates.png',
  },
}
