//@flow
import React from 'react'

import Container from './styles'

const About = (): React$Node => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435900/Rayi/Screenshot_from_2020-08-14_20-20-02_xlnl4q_evhicp.png"
        alt=""
        style={{width: '100%'}}
      />
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597433150/Rayi/Screenshot_from_2020-08-14_20-24-46_v5h1qf.png"
        alt=""
        style={{
          width: '100%',
          position: 'relative',
          top: '-3.5px',
          left: '2px',
        }}
      />
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597433295/Rayi/Screenshot_from_2020-08-14_20-27-47_o5rmc4.png"
        alt=""
        style={{width: '100%'}}
      />
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597433400/Rayi/Screenshot_from_2020-08-14_20-29-18_rth6vj.png"
        alt=""
        style={{width: '100%'}}
      />
    </Container>
  )
}

export default About
