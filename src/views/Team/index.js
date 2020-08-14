//@flow
import React from 'react'

import Container from './styles'

const Team = (): React$Node => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597435731/Rayi/Screenshot_from_2020-08-14_20-30-43_lgph3x_cjz5bu.png"
        alt=""
        style={{width: '100%', position: 'relative', right: '-12px'}}
      />
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597434882/Rayi/Screenshot_from_2020-08-14_20-30-56_xdhkku.png"
        alt=""
        style={{width: '100%'}}
      />
      <img
        src="https://res.cloudinary.com/blueloop-company/image/upload/v1597434882/Rayi/Screenshot_from_2020-08-14_20-31-19_yzjxvl.png"
        alt=""
        style={{width: '100%'}}
      />
    </Container>
  )
}

export default Team
