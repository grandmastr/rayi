import {default as styled} from 'styled-components'
import {lighten} from 'polished'

import {navHeight} from '../../constants'
import {setMaxWidth, query} from '../../helpers/media'

const textColor = '#58595B'

export default styled.header`
  display: flex;
  position: fixed;
  height: ${navHeight};
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 0 #00000029;
  padding: 0 32px;
  z-index: 5;

  ${query.minWidth('>large1')`
    + div, + main {
      position: relative;
      top: ${navHeight};
      margin-bottom: ${navHeight};
    }
  `}

  nav.olm__navigation--desktop {
    ${setMaxWidth()};
    height: 100%;
    display: flex;
    justify-content: space-between;

    > * {
      align-self: center;
    }

    > a {
      height: 100%;
      display: flex;
      align-items: center;
      img.olm-logo {
        height: 60px;
      }

      &:hover {
        background-color: ${lighten(0.6, textColor)};
      }
    }

    ul {
      display: flex;
      height: 100%;

      li {
        position: relative;
        a {
          padding: 0 24px;
          align-self: center;
          height: 100%;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: ${textColor};
          font-weight: 400;
          &:hover {
            background-color: ${lighten(0.6, textColor)};
          }
          &:active {
            outline-color: transparent;
          }
        }
        &.active {
          > a {
            flex-direction: column;
            justify-content: center;
            align-items: center;

            // &:after {
            //   content: '';
            //   display: block;
            //   height: 6px;
            //   width: 92px;
            //   position: absolute;
            //   bottom: -2px;
            //   background-color: ${({theme}) => theme.primary};
            //   border-radius: 20px;
            // }
          }
          &.services {
            a {
              display: inline-flex;
              flex-direction: row;
            }
          }
        }
        &.services {
          a {
            span {
              margin-left: 8px;
              color: ${({theme}) => theme.primary};
              transition: transform 300ms;
              transform: rotate(180deg);
              &.dropdown-expanded {
                transform: rotate(0);
              }
            }
          }
          #our-services {
            background: #fff;
            position: absolute;
            left: -20%;
            margin-top: -5px;
            width: 140%;
            visibility: hidden;
            opacity: 0;
            transform: translateY(50px);
            transition: transform 400ms, opacity 300ms, visibility 300ms;
            pointer-events: none;
            &.expanded {
              visibility: visible;
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }
            > ul {
              display: flex;
              flex-direction: column;
              li {
                &:not(:last-child) {
                  border-bottom: 1.4px solid #dbdbdb;
                }
                a {
                  padding: 16px;
                  font-size: 0.8em;
                  font-weight: bold;
                  width: 100%;
                  color: #58595b;
                }
              }
            }
          }
        }
      }
    }
  }
  div.olm__navigation--mobile {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    > a,
    button {
      z-index: 999;
    }

    button {
      width: 2.78em;
      height: 2.09em;
      background: none;
      position: relative;
      display: inline-flex;
      margin-top: 0.699em;
      color: ${({menu, theme}) => (menu ? theme.primary : theme.secondary)};
      outline: 1px solid transparent;
      border: none;

      &:focus {
        outline-offset: 4px;
        outline-color: transparent;
      }

      &.x {
        transform: scale(1);

        &:after,
        &:before {
          background-color: ${({theme}) => theme.primary};
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          top: 0;
          width: 100%;
          transform: rotate(-45deg);
        }
      }

      &:before,
      &:after {
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        right: 0 !important;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: ${({theme}) => theme.secondary};
      }

      &:before {
        top: 0;
      }

      &:after {
        right: -18%;
        width: 72%;
        top: 1.13em;
      }
    }
  }

  ${query.maxWidth('large1')`
    background-color: #fff;
    nav.olm__navigation--desktop {
      display: none;
    }
    div.olm__navigation--mobile {
      display: flex;
    }
  `};
  ${query.minWidth('>large1')`
    nav.olm__navigation--desktop {
      display: flex;
    }
    div.olm__navigation--mobile {
      display: none;
    }
  `};
  nav.olm__mobile-navigation {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    font-size: 1.4rem;
    padding: calc(${navHeight}) 64px;
    transition: opacity 0.3s, visibility 0.3s;
    justify-content: space-around;

    &:not(.open) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      ul {
        transform: translateX(-100%);
        opacity: 0;
      }
    }

    &.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      ul {
        transform: translateX(0);
        opacity: 1;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      transition: all 200ms ease-in-out;
      li {
        height: 50px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        a {
          color: ${({theme}) => theme.secondary};
          &:focus {
            outline-offset: 10px;
          }
        }
        &:after {
          content: '';
          display: inline-block;
          height: 28px;
          width: 30px;
          background: ${({theme}) => lighten(0.2, theme.primary)};
          opacity: 0;
          transform: translateX(5px);
          transition: all ease-in-out 200ms;
        }
        &:hover,
        &:focus {
          &:after {
            opacity: 0.8;
            transform: translateX(-20px);
            z-index: -1;
          }
        }
      }
    }
    div.olm__social-icons {
      display: flex;
      justify-content: space-between;
      max-width: 120px;
      a {
        color: ${({theme}) => theme.secondary};
        svg {
          font-size: 1.2em;
        }
      }
    }
  }
`
