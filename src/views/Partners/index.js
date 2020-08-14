//@flow
import React from 'react'

import Container from './styles'
import {Button} from '../../urgent-fury'

const Partners = (): React$Node => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597436764/Rayi/Screenshot_from_2020-08-14_21-24-51_wt3b4e.png"
        alt=""
        style={{width: '100%'}}
      />
      <section className="olm__contact-form-container">
        <form className="olm__contact-form" onSubmit={e => e.preventDefault()}>
          <h4 style={{color: '#333333'}}>
            Please fill the form below to apply
          </h4>
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
        <div className="olm__contact-address" />
      </section>
    </Container>
  )
}

export default Partners
