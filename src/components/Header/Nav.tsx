/*eslint-disable*/

import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
//import Pool from '../../pages/Pool'
//import { Route } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="/">
        <TranslatedText translationId={2}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bridge.thirm.com" target="_blank" rel="noopener noreferrer">
        <TranslatedText translationId={10}>Bridge</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 18px;
  line-height: 45px;
  font-weight: 700;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${({ theme }) => theme.colors.text1};
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.text2};
  }
  &.active {
    color: ${({ theme }) => theme.colors.text2};
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
