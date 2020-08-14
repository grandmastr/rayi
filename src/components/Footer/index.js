//@flow
import {default as React, memo} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import Container from './styles'
import {Button, Divider} from '../../urgent-fury'

const Footer = memo((): React$Node => {
  return (
    <Container>
      <div className="footer__content">
        <div className="footer__content-row">
          <div className="footer__content-column">
            <h3>menu</h3>
            <ul>
              <li>
                <Link to={'/'}>home</Link>
              </li>
              <li>
                <Link to={'/about/'}>about</Link>
              </li>
              <li>
                <Link to={'/services/'}>partners</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-column">
            <h3>team</h3>
            <ul>
              <li>
                <Link to={'/'}>management team</Link>
              </li>
              <li>
                <Link to={'/about/'}>advisory body</Link>
              </li>
              <li>
                <Link to={'/services/'}>tech governors</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-column">
            <h3>contact 1</h3>
            <ul>
              <li>
                82 Great North Road, Hatfield, Hertfordshire, United Kingdom,
                AL9 5B.
              </li>
              <li>
                <a
                  href="tel:+2348033035933"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  +44 (0) 74 6055 0827
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content-column">
            <h3>contact 2</h3>
            <ul>
              <li>
                The Royal Court of the Kingdom of Ife, Enuwa Palace Ile-Ife,
                Osun State, Nigeria.
              </li>
              <li>
                <a
                  href="tel:+2348033035933"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  +(234) 808 991 7692
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__trademark-container">
          <span>© 2020 RAYI All Rights Reserved | Privacy Policy</span>
          <div className="footer__social-icons">
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
    </Container>
  )
})

export default Footer
