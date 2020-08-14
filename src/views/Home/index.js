//@flow
import {default as React, memo} from 'react'
import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

import {Container, Banner as BannerContainer} from './styles'
import {Button} from '../../urgent-fury'
import {theme} from '../../base/theme'

const Home = memo((): React$Node => {
  const history = useHistory()

  return (
    <Container>
      <BannerContainer aria-label={'banner slider'}>
        <div className="banner__content">
          <div>
            <p> </p>
            {/*<p>save with us.</p>*/}
            <img
              src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435277/Rayi/Screenshot_from_2020-08-14_20-57-33_xma6p0.png"
              alt=""
              style={{marginBottom: '20px'}}
            />
            <p>
              We deliver custom solutions through the development of diverse
              applications, technologies and devices that are offering better
              solutions and significant support for the growth of various
              service across Africa and beyond.
            </p>
            <div className="banner__button-container">
              <Button
                onClick={() => history.push('/about/')}
                stroke={theme.primary}
              >
                learn more
              </Button>
            </div>
          </div>
        </div>
      </BannerContainer>
      <section className={'olm__who-we-are-1'}>
        <div>
          {/*<h3>About us</h3>*/}
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435277/Rayi/Screenshot_from_2020-08-14_20-58-00_zu9xkq.png"
            alt=""
          />
          <p>
            Royal African Young Innovators (RAYI) is an initiative set up by His
            Imperial Majesty (H.I.M) Ọọ̀ni Adéyeyè Enitan Ògúnwùsì, Òjájá II,
            Ọọ̀ni of Ifẹ which aims to create a community of young enterprising
            innovators who are equipped to shape and reconstruct the very next
            industrialization of Africa. Innovation remains a cardinal
            contemporary life-tube that accommodates the exchange of “new ideas”
            and “solving the world's critical problems” through various
            processes and mechanisms.
          </p>
          <Button>learn more</Button>
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597426584/Rayi/NoPath_-_Copy_10_gljn63.png"
            alt="coming"
          />
        </div>
      </section>
      <section className="olm__what-we-do">
        <div>
          <h5>FACTS</h5>
          {/*<h3>Tech Incubation Ecosystem.</h3>*/}
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435278/Rayi/Screenshot_from_2020-08-14_20-58-10_kydejc.png"
            alt=""
          />
          <div className={'paragraph-container'}>
            <p>
              As an Ecosystem, RAYI remains one of the finest organizations in
              Africa that is representing the interest of young tech-savvy
              population, designers of different industrial plants, etc.
              providing them with right identity, building a community of modern
              knowledge and shaping their ideas, on a global scale.
            </p>
            <p>
              RAYI is an ecosystem that is forming, shaping and leading
              innovation enterprises and moulding a global landscape for
              tech-savvy youths across Africa.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597429702/Rayi/Screenshot_from_2020-08-14_19-27-54_tzph2b.png"
            alt=""
            style={{width: '100%', marginTop: '32px'}}
          />
        </div>
      </section>
      <section className="olm__what-we-do">
        <div>
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597430314/Rayi/Screenshot_from_2020-08-14_19-37-28_kkmuyh.png"
            alt=""
            style={{width: '100%'}}
          />
        </div>
      </section>
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597430792/Rayi/Screenshot_from_2020-08-14_19-46-04_z76z4c.png"
        alt=""
        style={{width: '100%'}}
      />
      <section
        className="olm__who-we-serve"
        style={{position: 'relative', top: '-20px'}}
      >
        <div className="olm__who-we-serve-content">
          <div>
            <div className="olm__who-we-serve--column">
              <h5>CAREERS</h5>
              {/*<h3>Come Innovate With Us.</h3>*/}
              <img
                src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435595/Rayi/Screenshot_from_2020-08-14_21-05-44_rxpyy2.png"
                alt=""
              />
              <p>
                We provide the solutions to help you become and remain top
                performers in your industry.
              </p>
              <Button
                aria-label={'contact us'}
                onClick={() => history.push('/contact/')}
              >
                join us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
})

export default Home
