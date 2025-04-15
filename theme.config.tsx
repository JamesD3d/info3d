import { DocsThemeConfig } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  logo: <span>info3d</span>,
  project: {
    link: 'https://github.com/yourusername/info3d'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
  },
  docsRepositoryBase: 'https://github.com/yourusername/info3d/blob/main',
  footer: {
    text: '© 2025 info3d'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – info 3D'
    }
  }
}

export default config
