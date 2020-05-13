import React, { useState, useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api'
import ReactResizeDetector from 'react-resize-detector'

interface JsonEditorProps {
  passValue?: string
  onSpecChange: (string) => void
  onSave: (str?: string) => void
}
const JsonEditor: React.FC<JsonEditorProps> = function(props) {
  const options: Monaco.editor.IEditorConstructionOptions = {
    wordWrap: 'on',
  }
  const [code, setCode] = useState(props.passValue ?? '')
  const [thisEditor, setThisEditor] = useState<
    Monaco.editor.IStandaloneCodeEditor
  >()

  useEffect(() => {
    if (code !== props.passValue) {
      setCode(props.passValue ?? '')
      console.log(props.passValue ?? '')
    }
  }, [props.passValue])

  function editorWillMount(monaco: typeof Monaco) {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      enableSchemaRequest: true,
      schemas: [
        {
          uri:
            'https://raw.githubusercontent.com/Nebula-Vis/Nebula-Vis.github.io/master/schema',

          fileMatch: ['*'],
          schema: {
            type: 'object',
            properties: {
              data: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    values: {
                      type: 'array',
                      items: {},
                    },
                    hierarchy: {
                      type: 'object',
                    },
                    nodes: {
                      type: 'array',
                    },
                    links: {
                      type: 'array',
                    },
                    path: {
                      type: 'string',
                      format: 'uri',
                    },
                    format: {
                      type: 'string',
                    },
                  },
                  required: ['name'],
                  dependencies: {
                    nodes: ['links'],
                  },
                },
              },
              layout: {
                type: 'object',
                properties: {
                  rows: {
                    type: 'array',
                    items: {
                      type: 'string',
                      pattern: '^\\d+(fr|%|px)$',
                    },
                    minItems: 1,
                  },
                  columns: {
                    type: 'array',
                    items: {
                      type: 'string',
                      pattern: '^\\d+(fr|%|px)$',
                    },
                    minItems: 1,
                  },
                  width: {
                    type: 'string',
                    pattern: '^\\d+(%|px|vw)$',
                  },
                  height: {
                    type: 'string',
                    pattern: '^\\d+(%|px|vw)$',
                  },
                },
                required: ['width', 'height', 'rows', 'columns'],
                additionalProperties: false,
              },
              visualizations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                    },
                    container: {
                      type: 'string',
                      pattern: '^\\d+ \\d+ \\d+ \\d+$',
                    },
                    visualization: {
                      type: 'string',
                      pattern:
                        '^(scatterplot|areachart|barchart|lineup|linechart|graph|select|tree|treemap|parallel|radial|button|input|slider|vegalite|piechart|donutchart|sectorchart|sunburstchart|map|heatmap2d)$',
                    },
                    props: {
                      type: 'object',
                    },
                  },
                  required: ['id', 'container', 'visualization'],
                  additionalProperties: false,
                },
              },
              coordinations: {
                type: 'array',
                items: {
                  oneOf: [
                    {
                      type: 'string',
                      pattern: '^([a-z0-9 ,-_\\$]+)$',
                    },
                    {
                      type: 'object',
                      properties: {
                        visualizations: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                          minItems: 1,
                        },
                      },
                      patternProperties: {
                        '^(how|what|why)$': {
                          type: 'string',
                          pattern: '^([a-z0-9 ,-_\\$]+)$',
                        },
                      },
                      required: ['visualizations'],
                    },
                    {
                      type: 'object',
                      properties: {
                        'data-visualization': {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              name: {
                                type: 'string',
                                pattern: '^\\$([\\w-\\$]+)$',
                              },
                              bind: {
                                type: 'array',
                                items: {
                                  type: 'string',
                                  pattern:
                                    '^([\\w-]+)\\.([\\w-]+)(\\.(bidirectional|unidirectional))?$',
                                },
                              },
                            },
                          },
                        },
                        transformation: {
                          type: 'object',
                          properties: {
                            name: 'string',
                            input: {
                              oneOf: [
                                {
                                  type: 'array',
                                  items: {
                                    type: 'string',
                                    pattern: '^\\$([\\w-\\$]+)$',
                                  },
                                },
                                {
                                  type: 'object',
                                  additionalProperties: {
                                    type: 'string',
                                    pattern: '^\\$([\\w-\\$]+)$',
                                  },
                                },
                              ],
                            },
                            output: {
                              oneOf: [
                                {
                                  type: 'array',
                                  items: {
                                    type: 'string',
                                    pattern: '^\\$([\\w-\\$]+)$',
                                  },
                                },
                                {
                                  type: 'object',
                                  additionalProperties: {
                                    type: 'string',
                                    pattern: '^\\$([\\w-\\$]+)$',
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              },
              transformations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    url: {
                      type: 'string',
                      format: 'uri',
                    },
                    parameters: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                    output: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                      minItems: 1,
                    },
                  },
                  required: ['name', 'url', 'output'],
                },
              },
            },
            additionalProperties: false,
          },
        },
      ],
    })
    monaco.languages.json.jsonDefaults.setModeConfiguration({
      documentFormattingEdits: false,
      documentRangeFormattingEdits: false,
      completionItems: true,
      hovers: true,
      documentSymbols: true,
      tokens: true,
      colors: true,
      foldingRanges: true,
      diagnostics: true,
    })

    monaco.languages.registerDocumentFormattingEditProvider('json', {
      provideDocumentFormattingEdits(
        model: Monaco.editor.ITextModel,
        options: Monaco.languages.FormattingOptions,
        token: Monaco.CancellationToken,
      ): Monaco.languages.TextEdit[] {
        return [
          {
            range: model.getFullModelRange(),
            text: JSON.stringify(JSON.parse(model.getValue()), null, ' '),
          },
        ]
      },
    })
  }
  function editorDidMount(editor: any, monaco: any) {
    editor.focus()
    setThisEditor(editor)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
      props.onSave(code)
    })
  }

  function onChange(newValue: any, e: any) {
    setCode(newValue)
    props.onSpecChange(newValue)
  }

  function handleResize(width: number, height: number) {
    thisEditor?.layout?.({ width, height })
  }
  return (
    <div
      id="spec-editor"
      style={{ width: '100%', height: '100%', position: 'absolute' }}
    >
      <ReactResizeDetector handleWidth handleHeight onResize={handleResize} />
      <MonacoEditor
        language="json"
        theme="vs-light"
        value={code}
        options={options}
        editorWillMount={editorWillMount}
        editorDidMount={editorDidMount}
        onChange={onChange}
      />
    </div>
  )
}

export default JsonEditor
// By Richard_Jei, 2020/03/23
