import React from 'react'
import Card from './UI/Card'
import './Balance.css'
import {ReactComponent as ReactLogo} from '../assets/images/logo.svg';

const Balance = () => {
  return (
    <Card className="balance">
       <div className='balance__text'>
          <h3>My Balance</h3>
          <p>$921.48</p>
       </div>
       <ReactLogo />
    </Card>
  )
}

export default Balance