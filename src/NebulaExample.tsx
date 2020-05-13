import React from 'react'
import Nebula from 'nebula-vis'

export default class NebulaExample extends React.Component<{
  target: string
  spec: {
    layout: {
      height: string
    }
  }
  position: string
}> {
  componentDidMount() {
    const target = document.querySelector(this.props.target)
    if (!target) return

    const preElement = target.previousElementSibling
    if (preElement && preElement.tagName.toLowerCase() === 'pre') {
      ;(preElement as HTMLElement).style.maxHeight = '800px'
      ;(preElement as HTMLElement).style.overflowY = 'auto'
    }

    if (this.props.position !== 'vertical') {
      if (!preElement) return
      const bodyRect = document.body.getBoundingClientRect()
      const rect = preElement.getBoundingClientRect()
      ;(preElement as HTMLElement).style.width = '50%'
      ;(target as HTMLElement).style.position = 'absolute'
      ;(target as HTMLElement).style.left = 'calc(50% - 50px)'
      ;(target as HTMLElement).style.top = rect.top - bodyRect.top + 'px'
      ;(target as HTMLElement).style.height = rect.height + 'px'

      window.addEventListener('resize', () => {
        const bodyRect = document.body.getBoundingClientRect()
        const rect = preElement.getBoundingClientRect()
        ;(target as HTMLElement).style.top = rect.top - bodyRect.top + 'px'
      })
    } else {
      ;(target as HTMLElement).style.height = this.props.spec.layout.height
      ;(target as HTMLElement).style.marginTop = '50px'
    }

    ;(target as HTMLElement).style.display = 'flex'
    ;(target as HTMLElement).style.alignItems = 'center'
    ;(target as HTMLElement).style.justifyContent = 'center'

    const nebulaInstance = new Nebula(this.props.target, this.props.spec)
    nebulaInstance.init()
  }

  render() {
    return <span></span>
  }
}
