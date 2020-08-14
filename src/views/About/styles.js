import styled from 'styled-components'

import {query, setMaxWidth} from '../../helpers/media'
import {maxWidth} from '../../constants'

export default styled.main`
  section {
    background: #fff;
    h3 {
      color: ${({theme}) => theme.primary};
      text-transform: uppercase;
      font-size: 0.9em;
      font-weight: bold;
    }
    p {
      font-size: 1em;
      line-height: 36px;
      ${query.maxWidth('large1')`
        line-height: 24px;
      `}
    }
  }
  section.olm-about__our-company,
  section.olm__collab-statement {
    padding: 72px 32px;
    > div {
      ${setMaxWidth()};
      h3 {
        text-align: center;
      }
    }
  }
  section.olm__vision-mission {
    padding: 0 32px;
    background-color: #fbfbfb;
    > div {
      ${setMaxWidth()};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div.olm-section__column-1 {
        padding: 72px 0;
        flex: 0.85;
        max-width: ${maxWidth * 0.7}px;
        width: 100%;
        > div:first-child {
          margin-bottom: 64px;
        }
      }
      div.olm-section__column-2 {
        flex: 0.3;
        position: absolute;
        width: 22%;
        max-height: 648px;
        height: 100%;
        right: 0;
        align-self: center;
        background-color: #fff;
        flex-direction: column;
        img {
          width: 100%;
          height: 100%;
          position: relative;
          //top: -5px;
        }
      }
      ${query.maxWidth('xLarge')`
        > div:first-child {
          flex: 1;
          max-width: 100%;
        }
        > div:nth-child(2) {
          display: none;
        }
      `}
    }
    &.x2 {
      background: #fff;
    }
  }
  section.olm__collab-statement {
    background-color: #fbfbfb;
    text-align: center;
  }
  section.olm__core-values {
    background-color: #fbfbfb;
    padding: 72px 32px;
    min-height: 80vh;
    > div {
      ${setMaxWidth(maxWidth * 0.8)};
      h3,
      p {
        text-align: center;
      }
      div.cards__container {
        position: relative;
        justify-content: center;
        div.card {
          background-color: #fff;
          box-shadow: 0 0 2px #00000029;
          border-radius: 3px;
          padding: 24px 16px;
          position: relative;
          width: 200px;
          h3,
          p {
            text-align: left;
            margin: 0;
          }
          h3 {
            color: #e2e2e2;
            font-size: 1.8em;
          }
          p {
            text-align: left;
            position: relative;
            font-weight: bold;
          }
        }
        ${query.minWidth('>large1')`
          display: flex;
          flex-direction: row;
          div.card {
            position: absolute;
            &:nth-child(2) { 
              top: 80px;
              left: 0;
            }
            &:nth-child(3) {
              top: 80px;
              right: 0;
            }
            &:nth-child(4) {
              top: 280px;
              left: 150px;
            }
            &:nth-child(5) {
              top: 200px;
            }
            &:last-child {
              top: 280px;
              right: 150px;
            }
          }
        `};
        ${query.maxWidth('large1')`
          display: flex;
          flex-direction: column;
          align-items: center;
          div.card:not(:last-child) {
            width: 100%;
            margin-bottom: 20px;
          }
        `};
      }
    }
  }
`
