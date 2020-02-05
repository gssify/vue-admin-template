import './icons'
import SvgIcon from './index'

export default {
  install (Vue, options = {}) {
    const componentsName = options.name || 'SvgIcon'
    Vue.component(componentsName, SvgIcon)
  }
}
