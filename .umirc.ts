import { defineConfig } from 'dumi'
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'
function chainWebpack(config, { webpack }) {
  config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      languages: ['json'],
    },
  ])
}
export default defineConfig({
  favicon: '/assets/favicon.svg',
  title: 'Nebula',
  mode: 'site',
  resolve: {
    includes: ['./docs', './src'],
    previewLangs: ['tsx'],
  },
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    // {
    //   title: 'Tutorial',
    //   path: '/tutorial',
    // },
    // {
    //   title: 'Docs',
    //   path: '/docs',
    // },
    {
      title: 'Examples',
      path: '/examples',
    },
    {
      title: 'Survey',
      path: '/survey',
    },
    // {
    //   title: 'Editor',
    //   path: '/editor',
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/Nebula-Vis/nebula',
    },
  ],
  exportStatic: {},
  chainWebpack,
  // externals: {
  //   'nebula-vis': 'Nebula',
  // },
  // scripts: [
  //   'https://raw.githubusercontent.com/Nebula-Vis/Nebula-Vis.github.io/master/nebula-vis.min.js',
  // ],
})
