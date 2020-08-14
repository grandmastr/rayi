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
    > div {
      ${setMaxWidth()};
    }
  }
  section.tablist-container {
    ${setMaxWidth()};
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 48px;
      li {
        border: 1.4px solid #e2e2e2;
        border-radius: 2px;
        background-color: #fff;
        flex: 0.18;
        height: 50px;
        display: flex;
        align-items: center;
        &.active {
          border-color: ${({theme}) => theme.secondary};
          a {
            color: ${({theme}) => theme.primary};
          }
        }
        a {
          padding: 16px 20px;
          width: 100%;
          text-transform: uppercase;
          font-weight: bold;
          text-align: center;
          color: #58595b;
        }
      }
      ${query.maxWidth('large2')`
          display: none;
      `}
    }
  }
  section.olm-services__details {
    padding: 72px 32px;
    background-color: #fff;
    &.alternate {
      background-color: #f8f8f8;
    }
    > div {
      p.olm-services__details-intro {
        color: #000;
        ${setMaxWidth(maxWidth * 0.5)}
        margin: 0;
      }
      div.olm-services__details-offers {
        margin-top: 36px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        div.olm-services__details-offers-container {
          max-width: ${maxWidth / 2.5}px;
          &:not(:first-child),
          &:not(:nth-child(2)) {
            margin-top: 40px;
          }
        }
      }
      div.services__tab-content {
        max-width: ${maxWidth * 0.7}px;

        > div {
          ul {
            li {
              display: inline-flex;
              color: #000;
              &:not(:last-child) {
                margin-right: 28px;
              }
              &:before {
                content: '';
                display: block;
                height: 8px;
                width: 8px;
                border-radius: 50%;
                background-color: #58595b;
                position: relative;
                top: 0.4em;
                margin-right: 10px;
              }
              ${query.maxWidth('medium')`
                line-height: 20px;
                &:before {
                  top: 0.5em;
                }
              `};
            }
          }
        }
      }
    }
  }
  section.olm-services__sme-loans {
    padding: 72px 32px;
    > div {
      > div {
        max-width: ${maxWidth * 0.7}px;
        > div {
          margin-top: 48px;
          ul {
            li {
              display: inline-flex;
              width: 100%;
              color: #000;
              &:not(:last-child) {
                margin-right: 28px;
              }
              &:before {
                content: '';
                display: block;
                height: 8px;
                width: 8px;
                border-radius: 50%;
                background-color: #58595b;
                position: relative;
                top: 0.4em;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  section.olm-services__reach-out {
    background-color: #fbfbfb;
    padding: 72px 32px;
    > div {
      h1,
      span {
        display: block;
      }
      h1 {
        color: ${({theme}) => theme.primary};
        font-weight: bold;
      }
      span {
        font-size: 1.1em;
      }
      button {
        margin-top: 24px;
        svg {
          margin-left: 12px;
        }
      }
    }
  }
  section.olm__services--impact-enterprise,
  section.olm__services--credits {
    background-color: #fff;
    margin-top: 64px;
    padding: 36px 32px;

    > div {
      display: flex;
      flex-direction: row;
      ${query.maxWidth('large1')`
        flex-direction: column;
      `};
      > div {
        flex: 0.5;
        h1 {
          font-weight: bold;
          width: 80%;
        }
      }
    }
  }
  section.olm__services--credits-intro,
  section.olm__services--eBanking-intro {
    padding: 24px 32px 0 32px;
  }
  section.olm__services--eBanking-intro {
    > div {
      h2 {
        font-weight: bold;
        width: 90%;
      }
    }
  }
  section.olm__services--eBanking {
    padding: 24px 32px;
    > div {
      display: flex;
      flex-direction: row;
      ${query.maxWidth('large1')`
        flex-direction: column;
      `};
      > div {
        &:first-child {
          border-radius: 4px;
          flex: 0.4;
          background-image: url(https://res.cloudinary.com/fabrixrus/image/upload/v1596297960/OLM/NoPath.png);
          background-repeat: no-repeat;
          background-size: contain;
          &.x2 {
            background-image: url(https://res.cloudinary.com/fabrixrus/image/upload/v1596301792/OLM/mark-oflynn-RQfcT2FD7_E-unsplash.png);
          }
        }
        &:nth-child(2) {
          flex: 0.6;
        }
        ${query.maxWidth('large2')`
          &:first-child {
            display: none;
          }
          &:nth-child(2) {
            flex: 1;
          }
        `};
        h1 {
          font-weight: bold;
          width: 80%;
        }
        h3 {
          margin-top: 32px;
        }
        ul {
          li {
            display: inline-flex;
            width: 100%;
            color: #000;
            &:not(:last-child) {
              margin-right: 28px;
            }
            &:before {
              content: '';
              display: block;
              height: 8px;
              width: 8px;
              border-radius: 50%;
              background-color: #58595b;
              position: relative;
              top: 0.4em;
              margin-right: 10px;
            }
            ${query.maxWidth('medium')`
              line-height: 20px;
              &:before {
                top: 0.5em;
              }
            `};
          }
        }
      }
    }
  }
  section.olm__services-eBanking--alternate {
    background: #f8f8f8;
    display: flex;
    margin: 32px 0;
    > div {
      position: relative;
      display: flex;
      div {
        flex: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${query.maxWidth('large2')`
          flex: 1;
          &[role='img'] {
            display: none;
          }
        `};
        &:first-child {
          margin-right: auto;
          padding: 24px 0;
          ${query.maxWidth('large2')`
            padding: 24px 32px;
          `};
          * {
            width: 80%;
          }
        }
        &[role='img'] {
          background-image: url(https://res.cloudinary.com/fabrixrus/image/upload/v1596302153/OLM/paul-felberbauer-idNOBU5k_80-unsplash.png);
          background-size: contain;
          background-repeat: no-repeat;
          height: 452px;
          width: 100%;
        }
      }
    }
  }
`
