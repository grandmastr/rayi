//@flow
import {
  default as React,
  memo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react'
import {Link, useLocation} from 'react-router-dom'

import Container from './styles'
import {doesRouteMatch} from '../../helpers'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {Button} from '../../urgent-fury'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Navigation = memo((): React$Node => {
  const location = useLocation()
  const dropDown = useRef(null)

  const className = (route: string = '/'): string | typeof undefined =>
    doesRouteMatch(location, route) ? 'active' : undefined

  const [menuOpen, setMenuOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const handleOutsideClick = useCallback(
    ({target}) => {
      if (!!dropDownOpen && !target.contains(dropDown.current)) {
        setDropDownOpen(false)
      }
    },
    [dropDownOpen]
  )

  useEffect(() => {
    const classList = document.body.classList

    if (menuOpen) classList.add('no-scroll')
    else classList.remove('no-scroll')
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(m => m && !m)
  }, [location])

  useEffect(() => {
    window.addEventListener('resize', closeMenu)
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick])

  const toggleMenu = () => setMenuOpen(c => !c)
  const closeMenu = () => {
    setMenuOpen(false)
    setDropDownOpen(false)
  }

  return (
    <Container role={'navigation'} menu={menuOpen}>
      <nav className={'olm__navigation--desktop'}>
        <Link to={'/'}>
          <img
            src="https://res.cloudinary.com/blueloop-company/image/upload/v1597425543/Rayi/12-RAYI_Logo_PNG_zjndx2.png"
            alt="Olofin Microfinance Bank"
            className={'olm-logo'}
          />
        </Link>
        <ul className={'olm__nav-links-container'}>
          <li className={className()}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={className('about')}>
            <Link to={'/about/'}>about us</Link>
          </li>
          <li className={className('about')}>
            <Link to={'/partners/'}>our partners</Link>
          </li>
          <li
            className={`${className('services') || ''} services`}
            onClick={() => setDropDownOpen(c => !c)}
          >
            <a
              href={'#top'}
              aria-expanded={dropDownOpen}
              aria-controls={'our-services'}
            >
              team{' '}
              <span className={dropDownOpen ? 'dropdown-expanded' : ''}>
                &#9660;
              </span>
            </a>
            <div
              id={'our-services'}
              className={dropDownOpen ? 'expanded' : ''}
              aria-label={'list of services we offer at olm'}
              ref={dropDown}
            >
              <ul>
                <li>
                  <Link to={'/'}>Management Team</Link>
                </li>
                <li>
                  <Link to={'/'}>Tech Governors</Link>
                </li>
                <li>
                  <Link to={'/'}>Advisory Board</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={className('people')}>
            <Link to={'/people/'}>RAYI social enterprise</Link>
          </li>
          <li className={className('contact')}>
            <Link to={'/contact/'}>
              <Button primary stroke={'#fff'}>
                Contact Us
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={'olm__navigation--mobile'}>
        <Link to={'/'}>
          <img
            src="https://res.cloudinary.com/fabrixrus/image/upload/v1595282597/OLM/28-OLM_Logo_PNG.png"
            alt="olm logo"
          />
        </Link>
        <button
          onClick={() => toggleMenu()}
          aria-expanded={menuOpen}
          className={`menu-toggle${menuOpen ? ' x' : ''}`}
          aria-label={
            menuOpen ? 'close collapsible menu' : 'open collapsible menu'
          }
        />
      </div>
      <nav
        className={`olm__mobile-navigation${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/about/'}>about us</Link>
          </li>
          <li>
            <Link to={'/services/'}>our services</Link>
          </li>
          <li>
            <Link to={'/people/'}>our people</Link>
          </li>
          <li>
            <Link to={'/contact/'}>contact us</Link>
          </li>
        </ul>
        <div className="olm__social-icons">
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
      </nav>
    </Container>
  )
})

export default Navigation
