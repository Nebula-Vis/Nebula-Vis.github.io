import React from 'react'
import Nebula from 'nebula-vis'

export default class NebulaExample extends React.Component<{
  target: string
  spec: {
    layout: {
      height: string
      width: string
    }
  }
  position: string
}> {
  componentDidMount() {
    const target = document.querySelector(this.props.target)

    if (!target) return

    if (this.props.position !== 'vertical') {
      const parentElement = target?.parentElement
      const container = document.createElement('div')
      container.style.display = 'flex'
      const leftContainer = document.createElement('div')
      leftContainer.style.flex = '1'
      leftContainer.style.maxWidth = '50%'
      leftContainer.style.marginRight = '30px'
      ;(target as HTMLElement).style.flex = '1'
      ;(target as HTMLElement).style.maxWidth = '50%'
      ;(target as HTMLElement).style.minWidth = this.props.spec.layout.width

      const nodeList = Array.from(parentElement?.childNodes || [])
      nodeList.forEach(node => {
        if (
          ['pre', 'p'].includes((node as HTMLElement).tagName.toLowerCase())
        ) {
          leftContainer.appendChild(node)
        }
      })
      container.appendChild(leftContainer)
      container.appendChild(target)
      parentElement?.appendChild(container)
    } else {
      ;(target as HTMLElement).style.height = this.props.spec.layout.height
      ;(target as HTMLElement).style.marginTop = '50px'
      ;(target as HTMLElement).style.display = 'flex'
      ;(target as HTMLElement).style.alignItems = 'center'
      ;(target as HTMLElement).style.justifyContent = 'center'
    }

    const nebulaInstance = new Nebula(this.props.target, this.props.spec)
    nebulaInstance.init()
  }

  render() {
    return <span></span>
  }
}
