//@flow
import React from 'react'

import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import Container from './styles'
import {Hero} from '../../components'
import {Button} from '../../urgent-fury'

const Contact = (): React$Node => {
  return (
    <Container>
      <section className="olm__contact-form-container">
        <form className="olm__contact-form" onSubmit={e => e.preventDefault()}>
          <h4>Send a Message</h4>
          <div className="form-group">
            <input type="text" placeholder={'First Name'} required autoFocus />
            <input type="text" placeholder={'Last Name'} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder={'Email Address'} required />
            <input type="tel" placeholder={'Phone Number'} required />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id=""
              rows="10"
              placeholder={'Message...'}
              required
            />
          </div>
          <Button primary color={'#fff'}>
            Submit
          </Button>
        </form>
        <div className="olm__contact-address">
          <div>
            <h3>contact information</h3>
            <p>
              82 Great North Road, Hatfield, Hertfordshire, United Kingdom, AL9
              5B.
            </p>
          </div>
          <div style={{marginTop: '-30px'}}>
            <p>
              <a
                rel={'noreferrer noopener'}
                target={'_blank'}
                href="tel:+2348033035933"
              >
                +44 (0) 74 6055 0827
              </a>
            </p>
          </div>
          <div style={{marginTop: '-30px'}}>
            <p>
              The Royal Court of the Kingdom of Ife, Enuwa Palace Ile-Ife, Osun
              State, Nigeria.
            </p>
          </div>
          <div style={{marginTop: '-30px'}}>
            {/*<h3>PHONE</h3>*/}
            <p>
              <a
                rel={'noreferrer noopener'}
                target={'_blank'}
                href="tel:+2348033035933"
              >
                +(234) 808 991 7692
              </a>
            </p>
          </div>
          <div>
            <div className="olm-contact__social-icons">
              <a
                href="https://facebook.com/OLM"
                target={'_blank'}
                rel="noopener noreferrer"
                aria-label={'follow Olofin Microfinance bank on Facebook'}
                title={'follow Olofin Microfinance bank on Facebook'}
              >
                <Icon icon={faFacebook} />
              </a>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://twitter.com/OLM"
                aria-label={'follow Olofin Microfinance bank on Twitter'}
                title={'follow Olofin Microfinance bank on Twitter'}
              >
                <Icon icon={faTwitter} />
              </a>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://linkedin.com/OLM"
                aria-label={'follow Olofin Microfinance bank on LinkedIn'}
                title={'follow Olofin Microfinance bank on LinkedIn'}
              >
                <Icon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Contact
