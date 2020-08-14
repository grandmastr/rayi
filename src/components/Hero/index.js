//@flow
import React from 'react'
import styled from 'styled-components'

import {query, setMaxWidth} from '../../helpers/media'

const Container = styled.div`
  background-color: ${({theme}) => theme.secondary};
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-repeat: no-repeat;
  background-size: 140%;
  background-position: right top 30%;
  height: 60vh;
  box-sizing: border-box;
  padding: 72px 32px;
  ${query.maxWidth('medium')`
      height: 30vh;
      padding: 12px 32px;
  `}
  z-index: 1;

  &:before {
    content: '';
    display: block;
    height: inherit;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: brightness(40%);
    background-image: url(https://res.cloudinary.com/fabrixrus/image/upload/v1595350815/OLM/41-OLM_Logo_PNG_2x.png);
    background-repeat: no-repeat;
    background-size: 16%;
    background-position: top 60% right 14%;
  }
  div.olm-page__content-container {
    ${setMaxWidth()};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    > div {
      z-index: 1;
      line-height: 5px;
      h3 {
        color: #fff;
        text-transform: capitalize;
        font-size: 2.4em;
        font-weight: bold;
      }
      h5 {
        color: #fff;
        text-transform: uppercase;
        font-size: 0.9em;
        font-weight: bold;
      }
    }
  }
`

type Props = {
  backgroundImage: string,
  pageTitle: string,
  pageTitleDetails: string,
}

const Banner = ({
  backgroundImage,
  pageTitle,
  pageTitleDetails,
}: Props): React$Node => {
  return (
    <Container backgroundImage={backgroundImage}>
      <div className="olm-page__content-container">
        <div>
          <h5>{pageTitleDetails}</h5>
          <h3>{pageTitle}</h3>
        </div>
      </div>
    </Container>
  )
}

export default Banner
