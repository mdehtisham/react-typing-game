import React from 'react'
import CTA from '../styled/CTA'
import StyledTitle from '../styled/StyledTitle'
import {Accent} from '../styled/Accent'


export default function Home(){
  return(
    <div>
      <StyledTitle>Ready to Type?</StyledTitle>
      <CTA to="/game">Click or Press <Accent>'s'</Accent> to start playing!</CTA>
    </div>
  )
}