//@flow
import {maxWidth as MW, BREAKPOINTS} from '../../constants'
import {css} from 'styled-components'
import {toPx} from '../../helpers'

export const setMaxWidth = (value: string = MW) => {
  return css`
    max-width: ${typeof value === 'number' || Number(value)
      ? `${value}px`
      : 'none'};
    width: 100%;
    margin: auto;
  `
}

const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, curr) => {
  const currentValue = BREAKPOINTS[curr]

  return Object.assign(acc, {
    [curr]: currentValue,
    [`>${curr}`]: currentValue + 1,
    [`<${curr}`]: currentValue - 1,
  })
}, {})

const computedValue = (breakpoint: string) => {
  return typeof breakpoint === 'number'
    ? toPx(breakpoint)
    : breakpoint in breakpoints
    ? toPx(breakpoints[breakpoint])
    : breakpoint
}

const maxWidth = value => (...content) => css`
  @media (max-width: ${computedValue(value)}) {
    ${css(...(content || ''))}
  }
`

const minWidth = value => (...content) => css`
  @media (min-width: ${computedValue(value)}) {
    ${css(...(content || ''))};
  }
`

const between = (min, max) => (...content) => css`
  @media (min-width: ${computedValue(min)}) and (max-width: ${computedValue(
      max
    )}) {
    ${css(...(content || ''))}
  }
`

export const query = {
  maxWidth,
  minWidth,
  between,
  breakpoints,
}
