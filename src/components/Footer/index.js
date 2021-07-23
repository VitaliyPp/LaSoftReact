import React from 'react'
import './style.scss'
import telegram from '../../assets/telegram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'

export default function Footer() {
  return (
    <div className="footer">
      <p>privacy policy</p>
      <div>
        <img src={linkedin} alt='linkedin'/>
        <img src={facebook} alt='facebook'/>
        <img src={telegram} alt='telegram'/>
      </div>
    </div>
  )
}
