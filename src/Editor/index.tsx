import React from 'react'
import SplitPane from 'react-split-pane'
import './editor.less'
import JsonEditor from './JsonEditor'
import Nebula from 'nebula-vis'
import { PlayCircleOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Button, notification, Popover } from 'antd'
import specs from './specs'
import debounce from 'lodash/debounce'

export default class Editor extends React.Component<{}, { spec: string }> {
  constructor(props) {
    super(props)
    this.state = {
      spec: specs['select-set'].spec,
    }
    this.handleSpecChange = debounce(this.handleSpecChange, 200).bind(this)
    this.handleSave = debounce(this.handleSave, 200).bind(this)
  }
  public w = window.innerWidth
  handleSpecChange(newV: string) {
    this.setState({ spec: newV })
  }
  componentDidMount() {
    this.handleRun()
  }
  handleRun() {
    try {
      let spec = JSON.parse(this.state.spec)
      let visOuter = document.getElementById('vis')
      if (visOuter?.children[0]) visOuter.removeChild(visOuter.children[0])
      const nebulaInstance = new Nebula('#vis', spec)
      nebulaInstance.init()
    } catch (e) {
      notification.error(e)
    }
  }
  handleSave(str?: string) {
    const savingJSON = str ? str : this.state.spec
    const filename = prompt('Saving as', 'spec.json')
    if (filename) {
      const blob = new Blob([savingJSON], {
        type: 'text/plain',
      })
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: false,
      })

      var a = document.createElement('a')
      a.href = window.URL.createObjectURL(blob)
      a.download = filename
      a.textContent = 'Download file!'
      a.dispatchEvent(clickEvent)
    }
  }

  renderExamples() {
    return (
      <div
        style={{
          width: 'max-content',
          overflowY: 'auto',
          maxHeight: '60vh',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 200px',
            gridColumnGap: '4px',
            gridRowGap: '4px',
            gridAutoFlow: 'row dense',
          }}
        >
          {Object.keys(specs).map(name => (
            <div
              className="template-card"
              key={'template' + name}
              onClick={() =>
                this.setState(specs[name], () => {
                  this.handleRun()
                })
              }
            >
              <img src={specs[name].imgSrc} style={{ width: '180px' }} />
              <span style={{ fontWeight: 600 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: '88px',
          width: '100vw',
          height: 'calc(100vh - 88px)',
          minWidth: '600px',
          minHeight: '400px',
          display: 'flex',
          background: 'white',
        }}
      >
        <SplitPane
          split="vertical"
          minSize={300}
          defaultSize={Math.min(this.w * 0.4, 800)}
          pane1Style={{ display: 'flex' }}
          className="main-pane"
          pane2Style={{ overflow: 'auto' }}
          style={{ position: 'relative' }}
          onDragFinished={newLeftWidth => {
            const editor: any = document.getElementById('spec-editor')
            editor.style.width = newLeftWidth
          }}
        >
          <JsonEditor
            passValue={this.state.spec}
            onSpecChange={this.handleSpecChange}
            onSave={this.handleSave}
          />
          <div style={{ width: '100%' }}>
            <div
              style={{
                width: '100%',
                height: '50px',
                borderBottom: '1px solid #00000020',
                padding: '0 12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={this.handleRun.bind(this)}
              >
                Run
              </Button>
              <Popover
                placement="bottomRight"
                trigger="click"
                title={'Example Specifications'}
                content={this.renderExamples()}
              >
                <Button icon={<AppstoreOutlined />}>Templates</Button>
              </Popover>
            </div>
            <div
              id="vis"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50px',
                bottom: 0,
                background: '#40403010',
                overflow: 'auto',
              }}
            >
              <div>Nothing rendering</div>
            </div>
          </div>
        </SplitPane>
      </div>
    )
  }
}
