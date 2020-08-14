import styled from 'styled-components'

import {query, setMaxWidth} from '../../helpers/media'

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
  section.olm-team__section {
    padding: 72px 32px;
    > div {
      display: flex;
      flex-direction: row;

      div.olm-team__section-image {
        flex: 0.2;
        position: relative;
        z-index: 1;

        div.olm-team__section-image-backdrop {
          background: ${({theme}) => theme.secondary};
          height: 374px;
          width: 285px;
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: -1;
        }
      }

      ${query.maxWidth('<large1')`
        flex-direction: column;
        > div {
          flex: 1;
          &.olm-team__section-image {
            align-self: center;
          }
        }
      `};

      div.olm-team__section-info {
        flex: 0.8;
        span {
          font-weight: bold;
        }
        p {
          margin-top: 32px;
        }
      }
    }
    &:nth-child(even) {
      div.olm-team__section-info {
        padding: 12px 64px;
      }
      ${query.maxWidth('<large1')`
        padding-bottom: 12px;
      `};
    }
    &:nth-child(odd) {
      div.olm-team__section-image-backdrop {
        background: ${({theme}) => theme.primary} !important;
        left: -10px !important;
      }
      div.olm-team__section-info {
        padding: 12px 64px;
      }
      ${query.maxWidth('<large1')`
        padding-top: 0;
      `}
    }
    ${query.maxWidth('<large1')`
      div.olm-team__section-info {
        margin-top: 20px;
        padding: 12px 0 !important;
      }
    `};
    &:last-child {
      div.olm-team__section-image-backdrop {
        background-color: #58595b !important;
      }
    }
  }
`
