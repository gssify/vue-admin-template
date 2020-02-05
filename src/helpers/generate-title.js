import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

export default function (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
