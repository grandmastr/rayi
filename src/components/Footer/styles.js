import styled from 'styled-components'

import {setMaxWidth, query} from '../../helpers/media'
import {maxWidth} from '../../constants'

export default styled.footer`
  padding: 64px 32px;
  position: relative;
  background-color: ${({theme}) => theme.secondary};

  div.footer__content {
    ${setMaxWidth()};
    div.footer__content-row {
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      ${query.maxWidth('medium')`
        flex-direction: column;
        align-items: left;
        text-align: left;
        margin-bottom: 0;
        
        div.footer__content-column {
          &:first-child {
            margin-bottom: 32px !important;
          }
          &:not(:last-child) {
            margin-bottom: 0;
          }
        }
      `};

      div.footer__content-column {
        h3 {
          color: ${({theme}) => theme.primary};
          text-transform: uppercase;
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 40px;
          ${query.maxWidth('medium')`
            margin-bottom: 20px;  
          `};
        }
        button {
          font-size: 0.8em;
          svg {
            margin-left: 8px;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          line-height: 36px;
          position: relative;
          top: -5px;
          li {
            font-size: 0.9em;
            color: #fff;
            a {
              color: #fff;
              &:not([target='_blank']) {
                text-transform: capitalize;
              }
              &:focus {
                outline-offset: 3px;
              }
            }
          }
        }
        &:first-child {
          flex: 0.1;
          max-width: calc(${maxWidth}px / 3);
          padding-right: 40px;
          span {
            display: block;
            margin: 24px 0;
            font-size: 1.1em;
            color: #fff;
          }
          ${query.maxWidth('medium')`
            padding: 0;
          `}
        }
        &:nth-child(2) {
          flex: 0.2;
        }
        &:nth-child(3) {
          flex: 0.3;
          padding-right: 24px;
        }
        &:last-child {
          flex: 0.3;
        }
      }
    }
    div.footer__trademark-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 24px;
      ${query.maxWidth('medium')`
        flex-direction: column;
        align-items:center;
        span {
          margin-bottom: 16px;
        }
      `};
      span {
        color: #fff;
        font-size: 0.9em;
      }
      div.footer__social-icons {
        display: flex;
        a:not(:last-child) {
          margin-right: 12px;
        }
        svg {
          color: ${({theme}) => theme.primary};
          ${query.maxWidth('medium')`
            font-size: 150%;
          `};
        }
      }
    }
  }
`
