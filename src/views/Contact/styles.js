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
      color: #fff;
      ${query.maxWidth('large1')`
        line-height: 24px;
      `}
      a {
        color: #fff;
      }
    }
  }
  section.olm__contact-form-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    > form,
    > div.olm__contact-address {
      height: 100%;
    }
    > form {
      flex: 0.75;
      ${setMaxWidth(maxWidth * 0.65)};
      padding: 100px 36px;

      h4 {
        font-weight: bold;
        font-size: 1.1em;
        color: ${({theme}) => theme.primary};
      }

      div.form-group {
        display: flex;
        justify-content: space-between;
        input,
        textarea {
          background-color: #fbfbfb;
          border-radius: 4px;
          border: 1px solid #e2e2e2;
          outline-color: #e2e2e2;
          padding: 12px;
          &:focus {
            outline: 2px solid ${({theme}) => theme.secondary};
            &::placeholder {
              font-style: italic;
              color: ${({theme}) => theme.primary};
            }
          }
          &::placeholder {
            font-style: italic;
            font-size: 0.9em;
            color: #a2a2a2;
          }
        }
        ${query.maxWidth(450)`
          display: block;
          input {
            flex: 1;
            width: 100%;
            display: block;
            margin-bottom: 32px;
          }
        `}
        input {
          flex: 0.48;
        }
        textarea {
          width: 100%;
          resize: none;
        }
        margin-bottom: 32px;
      }
    }
    > div.olm__contact-address {
      background-color: #fff;
      flex: 0.25;
      padding: 64px 72px;
      *:not(h3) {
        color: #333333;
      }
      > div {
        div.olm-contact__social-icons {
          max-width: 100px;
          display: flex;
          justify-content: space-between;
          svg {
            color: #333333;
            font-size: 1.2em;
          }
          ${query.maxWidth('medium')`
            max-width: 80px;
            svg {
              font-size: 1.4em;
            }
          `};
        }
      }
      > div:not(:last-child) {
        margin-bottom: 50px;
      }
    }
    ${query.maxWidth('<large1')`
      flex-direction: column;
      > form, 
      > div.olm__contact-address {
        flex: 1;
      }
      > div.olm__contact-address {
        padding: 64px 32px;
      }
    `};
  }
`
