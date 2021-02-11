import React from 'react'
import { Link } from 'react-router-dom'
import { Accent } from '../styled/Accent'
import { StyledLinkButton, StyledNavbar, StyledNavBrand, StyledNavItems } from '../styled/Navbar'

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          <Accent>TypingGame</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li> 
          <StyledLinkButton to='/'>Home</StyledLinkButton>
        </li>
        <li> 
          <StyledLinkButton to='/highScores'>High Scores</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  )
}
