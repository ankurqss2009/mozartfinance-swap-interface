import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@mozartfinance/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle" >
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link} style={{display:'none'}}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link} style={{display:'none'}}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>

      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
