import React from 'react'
import { Link } from 'umi'

export default class Editor extends React.Component<{ subject: string }> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document
      .querySelectorAll('span[data-updated-text]')
      .forEach(node => node.setAttribute('style', 'display:none'))
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          fontSize: '16px',
          top: 0,
          width: '100vw',
          height: '84px',
          overflowY: 'auto',
          zIndex: 9999,
          backgroundColor: 'white',
          boxShadow: '0 0 5px #00000080',
        }}
      >
        <header
          style={{
            width: '100%',
            height: '84px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            color: '#BFBFBF',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <div
            className="header-left"
            style={{
              paddingLeft: '48px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontWeight: 600,
            }}
          >
            <a
              href="/"
              style={{
                fontSize: '1.6rem',
                color: '#1D39C4',
                marginRight: '167px',
              }}
            >
              Nebula
            </a>
            <span
              style={{
                width: '1px',
                height: '2rem',
                borderRight: '1px solid #BFBFBF',
              }}
            />
            {/* <a
              href="/tutorial"
              style={{
                marginLeft: '2.8vw',
                color:
                  this.props.subject === 'tutorial' ? '#1D39C4' : 'inherit',
              }}
            >
              Tutorial
            </a> */}
            {/* <a
              href="/docs"
              style={{
                marginLeft: '2.8vw',
                color: this.props.subject === 'docs' ? '#1D39C4' : 'inherit',
              }}
            >
              Docs
            </a> */}
            <a
              href="/examples"
              style={{
                marginLeft: '2.8vw',
                color:
                  this.props.subject === 'examples' ? '#1D39C4' : 'inherit',
              }}
            >
              Examples
            </a>
            <a
              href="/survey"
              style={{
                marginLeft: '2.8vw',
                color: this.props.subject === 'survey' ? '#1D39C4' : 'inherit',
              }}
            >
              Survey
            </a>
          </div>
          <div
            className="header-right"
            style={{
              paddingLeft: '48px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              fontWeight: 600,
            }}
          >
            <a
              href="https://github.com/nebula-vis/Nebula"
              style={{ color: 'inherit', marginRight: '2.8vw' }}
            >
              Github
            </a>
            {/* <a
              href="/editor"
              style={{
                marginRight: '2.8vw',
                color: this.props.subject === 'editor' ? '#1D39C4' : 'inherit',
              }}
            >
              Editor
            </a> */}
            {/* <a
              href="/404"
              style={{
                marginRight: '2.8vw',
                color: 'inherit',
              }}
            >
              Zh
            </a> */}
          </div>
        </header>
      </div>
    )
  }
}
