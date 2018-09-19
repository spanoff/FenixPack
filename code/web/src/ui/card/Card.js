// Imports
import React from 'react'

// UI Imports
import { level3 } from '../common/shadows'

// Component
const Card = (props) => {
  const { children, ...other } = props

  return (
    <div {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          border-radius: 0.1em;
          font-family: 'Roboto', sans-serif;
          box-shadow: ${ level3 };
        }
        `}
      </style>
    </div>
  )
}

export default Card