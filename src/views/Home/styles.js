import styled from 'styled-components'

import {maxWidth} from '../../constants'
import {setMaxWidth, query} from '../../helpers/media'

export const Banner = styled.div`
  background-color: #fcfcfc;
  background-image: url(https://res.cloudinary.com/blueloop-company/image/upload/v1597426583/Rayi/nesa-by-makers-kwzWjTnDPLk-unsplash_rpsk4c.png);
  background-repeat: no-repeat;
  background-position: right 0 top 0;
  height: 768px;
  z-index: 1;
  position: relative;

  ${query.maxWidth('large1')`
    background-size: cover;
    background-position: top right 30%;
    height: 100vh;
    
    &:before {
      background-size: 30%;
      background-position: bottom 65% right 4%;
    }
  `};

  div.banner__content {
    ${setMaxWidth(Number(maxWidth) + 64)};
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    > div {
      max-width: calc(${maxWidth}px / 2.5);
      width: 100%;
      z-index: 1;

      p {
        color: #333333;
        &:first-child {
          letter-spacing: 2.3px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1em;
        }
        &:nth-child(2) {
          text-transform: capitalize;
          font-weight: bolder;
          font-size: 3em;
        }
        &:nth-child(3) {
          line-height: 26px;
          position: relative;
          top: -30px;
          font-size: 1em;
        }
      }

      div.banner__button-container {
        position: relative;
        top: -10px;
        display: flex;
        flex-wrap: wrap;
        ${query.maxWidth('small')`
          flex-direction: column;
          button {
            margin-bottom: 24px;
            &:last-child {
              left: 0 !important;
            }
          }
        `};
        button {
        }
      }
    }
  }

  div.banner__navigation {
    height: 120px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`

export const Container = styled.main`
  section {
    h3 {
      color: ${({theme}) => theme.primary};
      font-size: 2em;
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
  section.olm__who-we-are-1 {
    ${setMaxWidth(Number(maxWidth) + 64)};
    margin: auto;
    padding: 72px 32px;
    text-align: left;
    position: relative;

    p {
      max-width: ${maxWidth / 1.8}px;
      width: 100%;
      color: #333333;
    }

    button {
      margin-top: 20px;
    }
    div.image {
      position: absolute;
      right: 0;
      top: 72px;
    }
  }
  section.olm__who-we-are-2 {
    padding: 72px 32px;
    background-color: #fbfbfb;

    div {
      ${setMaxWidth()};
      text-align: left;
      p {
        max-width: calc(${maxWidth}px / 1.6);
      }
    }
  }
  section.olm__what-we-do {
    padding: 72px 32px;
    background-color: #fbfbfb;

    > div {
      ${setMaxWidth()};
      h5 {
        color: #333333;
        letter-spacing: 0.2em;
      }
      p {
        max-width: ${maxWidth * 0.6}px;
      }
      div.paragraph-container {
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        p {
          width: 80%;
          flex: 0.46;
        }
      }
    }
  }
  section.olm__who-we-serve {
    background: #fff;
    position: relative;
    padding-bottom: 96px;
    background-image: url(https://res.cloudinary.com/blueloop-company/image/upload/v1597426580/Rayi/nesa-by-makers-BVr3XaBiWLU-unsplash_1_devk8s.png);
    background-repeat: no-repeat;
    background-position: right -20px top 0;
    height: 520px;
    ${query.maxWidth('large1')`
      padding-bottom: 0;
    `};
    div.olm__who-we-serve-content {
      padding: 48px 32px;
      > div {
        ${setMaxWidth()};
        display: flex;
        flex-wrap: wrap;
        ${query.maxWidth('large1')`
          flex-direction: column;
          justify-content: center;
        `};
        h5 {
          color: #333333;
          letter-spacing: 0.2em;
        }
        p {
          max-width: calc(${maxWidth}px / 2.5);
        }
      }
    }
  }
  section.olm__impressive-stats {
    padding: 144px 32px;
    background-color: #fbfbfb;
    > div {
      ${setMaxWidth()};
      div.olm__stat-boxes {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 64px;
        ${query.maxWidth('<medium')`
          justify-content: center;
          
          div.olm__stat-box:not(:last-child) {
            margin-bottom: 32px;
          }
        `};

        ${query.between('medium', 903)`
          justify-content: space-evenly;
          div.olm__stat-box:nth-child(3), 
          div.olm__stat-box:last-child {
            margin-top: 32px;
          } 
        `};

        ${query.between(904, 1183)`
          div.olm__stat-box:last-child {
            margin-top: 32px;
          }
        `};

        div.olm__stat-box {
          padding: 32px;
          height: 280px;
          width: 280px;
          background: #fff;
          box-shadow: 0 0 25px #0000000d;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          span {
            display: block;
            text-align: center;
            &.amount {
              font-size: 2.6em;
              font-weight: bold;
              margin-bottom: 20px;
            }
            &.title {
              color: #000;
              opacity: 0.5;
              font-size: 0.8em;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`
