import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <Container>
      <Logo href="/"><img src="/images/logo.svg" alt="Tesla-Logo" /></Logo>
      <Menu>
        <MenuItem href="#">Model S</MenuItem>
        <MenuItem href="#">Model 3</MenuItem>
        <MenuItem href="#">Model X</MenuItem>
        <MenuItem href="#">Model Y</MenuItem>
        <MenuItem href="#">Solar Roof</MenuItem>
        <MenuItem href="#">Solar Panels</MenuItem>
      </Menu>
      <RightMenu>
        <MenuItem href="#">Shop</MenuItem>
        <MenuItem href="#">Account</MenuItem> 
        <MenuItem href="#" onClick={() => setSidebarStatus(true)}>Menu</MenuItem>
      </RightMenu>
      <Sidebar show={sidebarStatus}>
        <CloseWrap>
          <CloseButton onClick={() => setSidebarStatus(false)}/>
        </CloseWrap>
        <SidebarItem><a href="#">Existing Inventory</a></SidebarItem>
        <SidebarItem><a href="#">Used Inventory</a></SidebarItem>
        <SidebarItem><a href="#">Trade-in</a></SidebarItem>
        <SidebarItem><a href="#">Cybertruck</a></SidebarItem>
        <SidebarItem><a href="#">Roadaster</a></SidebarItem>
        <SidebarItem><a href="#"></a>Test items</SidebarItem>
        <SidebarItem><a href="#"></a>Test items</SidebarItem>
        <SidebarItem><a href="#"></a>Test items</SidebarItem>
      </Sidebar>
    </Container>
  )
}

export default Header

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  min-height: 60px;
  padding: 0 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`
const Logo = styled.a`
  display: flex;
  padding-left: 20px;
  align-items: center;
  min-inline-size: 140px;
  margin-right: 160px;
`
const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 1280px) {
    display: none;
  }
`
const MenuItem = styled.a`
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
`
const RightMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  width: 300px;
`
const Sidebar = styled.div`
  background-color: white;
  bottom: 0;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  width: 300px;
  z-index: 10;
`
const SidebarItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  font-weight: 600;
  list-style: none;
  padding: 15px 0;
  text-align: start;
`
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`