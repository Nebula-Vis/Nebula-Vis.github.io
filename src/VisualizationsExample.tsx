import React from 'react'
import Nebula from 'nebula-vis'

export default class VisualizationsExample extends React.Component<{
  target: string
  spec: Object
}> {
  async componentDidMount() {
    const target = document.querySelector(this.props.target)
    if (!target) return
    const preElement = target.previousElementSibling
    if (!preElement) return
    ;(preElement as HTMLElement).style.width = '50%'

    const bodyRect = document.body.getBoundingClientRect()
    const rect = preElement.getBoundingClientRect()
    ;(target as HTMLElement).style.position = 'absolute'
    ;(target as HTMLElement).style.left = 'calc(50% + 100px)'
    ;(target as HTMLElement).style.top = rect.top - bodyRect.top + 'px'
    ;(target as HTMLElement).style.height = rect.height + 'px'
    ;(target as HTMLElement).style.display = 'flex'
    ;(target as HTMLElement).style.alignItems = 'center'
    ;(target as HTMLElement).style.justifyContent = 'center'

    const nebulaInstance = new Nebula(this.props.target, this.props.spec)
    await nebulaInstance.init()

    window.addEventListener('resize', () => {
      const bodyRect = document.body.getBoundingClientRect()
      const rect = preElement.getBoundingClientRect()
      ;(target as HTMLElement).style.top = rect.top - bodyRect.top + 'px'
    })

    // 开始hack
    if (
      this.props.target === '#parallelExample' ||
      this.props.target === '#radialExample'
    ) {
      target
        .querySelectorAll('div')
        .forEach(node => (node.style.overflow = 'hidden'))
    }

    if (this.props.target === '#areachartExample') {
      const button = target.querySelector('button')
      if (button) button.remove()
    }
  }

  render() {
    return <span></span>
  }
}
