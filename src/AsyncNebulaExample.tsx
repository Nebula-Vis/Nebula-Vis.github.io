import { dynamic } from 'umi'
export default dynamic({
  loader: async function() {
    const { default: NebulaExample } = await import(
      /* webpackChunkName: "nebula_example" */ './NebulaExample'
    )
    return NebulaExample
  },
})
