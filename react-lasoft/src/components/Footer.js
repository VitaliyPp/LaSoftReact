import React from 'react'
import '../style/footer.css'
import telegram from '../images/telegram.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'

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
