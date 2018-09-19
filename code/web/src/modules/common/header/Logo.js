// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// UI Imports
import { secondary } from '../../../ui/common/fonts'
import { textLevel2 } from '../../../ui/common/shadows'

// App Imports
import home from '../../../setup/routes/home'

// Component
const Logo = (props) => {
  const { ...others } = props

  return <Link to={home.home.path} {...others}>
      <span
        style={{
          fontFamily: secondary,
          fontSize: "2.2em",
          color: "white",
          textShadow: textLevel2
        }}
      >
        ТМ Феникс
      </span>
    </Link>;
}

export default Logo
