import {createGlobalStyle} from 'styled-components'
import {normalize, lighten} from 'polished'

import {query} from '../helpers/media'

export default createGlobalStyle`
  ${normalize()};
  * {
    box-sizing: border-box;
    &::selection {
      background-color: ${({theme}) => lighten(0.8, theme.secondary)};
      color: ${({theme}) => lighten(0.2, theme.secondary)};
    }
    &::-moz-selection {
      background-color: ${({theme}) => lighten(0.8, theme.secondary)};
      color: ${({theme}) => lighten(0.2, theme.secondary)};
    }
    img {
      user-select: none;
    }
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2em;
    overflow-x: hidden !important;
    
    &.no-scroll-x {
      overflow-x: hidden;
    }
    
    &.no-scroll-y {
      overflow-y: hidden;
    }
    
    &.no-scroll {
      overflow: hidden;
    }

    &::-webkit-scrollbar {
      width: 0;
      //border-radius: 3px;
    }
    // &::-webkit-scrollbar-track {
    //   background: #ffffff;
    // }
    // &::-webkit-scrollbar-thumb {
    //   background: ${({theme}) => theme.secondary};
    //   border-radius: 3px;
    // }
    // &::-webkit-scrollbar-thumb:hover {
    //   background: ${({theme}) => theme.secondary};
    // }
    :focus {
      outline-width: 0.2em;
      outline-style: dashed;
      outline-color: ${({theme}) => theme.primary};
    }
    [type='text'],
    [type='password'],
    [type='search'],
    [type='tel'],
    [type='email'] {
      &:focus {
        outline-color: transparent;
      }
      &:requi${({theme}) => theme.primary},
      &:invalid {
        box-shadow: none;
      }
      &::placeholder {
        color: rgb(189,189,189);
      }
    }
    ${query.maxWidth('medium')`
      font-size: 80%;
    `};
    ${query.between('large1', 'large2')`
      font-size: 82%;
    `};
    button,
    [role='button'],
    [type='submit'] {
      appearance: none;
      cursor: pointer;
      outline-color: transparent;
    }
    label {
      user-select: none;
    }
    a {
      text-decoration: none;
      &:focus {
        outline: 2px solid ${({theme}) => theme.primary};
      }
    }
    input:-webkit-autofill {
      color: transparent !important;
      background-image: none !important;
      background-color: #fff !important;
      -webkit-text-fill-color: rgba(61, 21, 95, .7) !important;
    }
    #app {
        -webkit-overflow-scrolling: touch;
    }
    img {
      user-select: none;
    }
    ul, ol {
        list-style-type: none;
        padding: 0;
    }
    [tabindex='0']:focus {
      outline: 2px dashed ${({theme}) => theme.primary};
      outline-offset: 3px;
    }
  }
`
