import * as React from 'react'

const isBrowser = typeof window !== "undefined"

const id = `select-theme-${Math.random().toString().replace('.', '')}`
export const SelectTheme = React.forwardRef(
  (props, ref: React.Ref<HTMLSelectElement>) => {
    if (!isBrowser)
      return (
        <select className='form-control' ref={ref} {...props}>
          <option value={themes[0].url}>{themes[0].name}</option>
        </select>
      )
    const headElement = document.querySelector('head')
    const linkElement =
      headElement.querySelector(`#${id}`) || getAttachedLinkElement(headElement)

    return (
      <select
        className='form-control'
        ref={ref}
        {...props}
        onChange={event => linkElement.setAttribute('href', event.target.value)}
      >
        {themes.map(theme => (
          <option key={theme.url} value={theme.url}>
            {theme.name}
          </option>
        ))}
      </select>
    )
  }
)

function getAttachedLinkElement(element: HTMLElement): HTMLLinkElement {
  const linkElement = document.createElement('link')
  linkElement.setAttribute('rel', 'stylesheet')
  linkElement.setAttribute('href', themes[0].url)
  element.appendChild(linkElement)
  return linkElement
}

const themes = [
  {
    url: 'https://cdn.jsdelivr.net/gh/matttelliott/tokyonight.scss/tokyonight.css',
    name: 'Tokyo Night',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    name: 'Bootstrap',
  },
  {
    url: 'https://bootswatch.com/5/cerulean/bootstrap.css',
    name: 'cerulean',
  },
  {
    url: 'https://bootswatch.com/5/cosmo/bootstrap.css',
    name: 'cosmo',
  },
  {
    url: 'https://bootswatch.com/5/cyborg/bootstrap.css',
    name: 'cyborg',
  },
  {
    url: 'https://bootswatch.com/5/darkly/bootstrap.css',
    name: 'darkly',
  },
  {
    url: 'https://bootswatch.com/5/flatly/bootstrap.css',
    name: 'flatly',
  },
  {
    url: 'https://bootswatch.com/5/journal/bootstrap.css',
    name: 'journal',
  },
  {
    url: 'https://bootswatch.com/5/litera/bootstrap.css',
    name: 'litera',
  },
  {
    url: 'https://bootswatch.com/5/lumen/bootstrap.css',
    name: 'lumen',
  },
  {
    url: 'https://bootswatch.com/5/lux/bootstrap.css',
    name: 'lux',
  },
  {
    url: 'https://bootswatch.com/5/materia/bootstrap.css',
    name: 'materia',
  },
  {
    url: 'https://bootswatch.com/5/minty/bootstrap.css',
    name: 'minty',
  },
  {
    url: 'https://bootswatch.com/5/morph/bootstrap.css',
    name: 'morph',
  },
  {
    url: 'https://bootswatch.com/5/pulse/bootstrap.css',
    name: 'pulse',
  },
  {
    url: 'https://bootswatch.com/5/quartz/bootstrap.css',
    name: 'quartz',
  },
  {
    url: 'https://bootswatch.com/5/sandstone/bootstrap.css',
    name: 'sandstone',
  },
  {
    url: 'https://bootswatch.com/5/simplex/bootstrap.css',
    name: 'simplex',
  },
  {
    url: 'https://bootswatch.com/5/sketchy/bootstrap.css',
    name: 'sketchy',
  },
  {
    url: 'https://bootswatch.com/5/slate/bootstrap.css',
    name: 'slate',
  },
  {
    url: 'https://bootswatch.com/5/solar/bootstrap.css',
    name: 'solar',
  },
  {
    url: 'https://bootswatch.com/5/spacelab/bootstrap.css',
    name: 'spacelab',
  },
  {
    url: 'https://bootswatch.com/5/superhero/bootstrap.css',
    name: 'superhero',
  },
  {
    url: 'https://bootswatch.com/5/united/bootstrap.css',
    name: 'united',
  },
  {
    url: 'https://bootswatch.com/5/vapor/bootstrap.css',
    name: 'vapor',
  },
  {
    url: 'https://bootswatch.com/5/yeti/bootstrap.css',
    name: 'yeti',
  },
  {
    url: 'https://bootswatch.com/5/zephyr/bootstrap.css',
    name: 'zephyr',
  },
]

