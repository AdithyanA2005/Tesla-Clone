import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import { useSelector } from 'react-redux'
import { selectCars } from '../features/car/carSlice'
import { selectOptions } from '../features/options/optionSlice'
import { selectSolar } from '../features/solar/solarSlice'

function Header() {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const cars = useSelector(selectCars)
  const solars = useSelector(selectSolar)
  const options = useSelector(selectOptions)

  return (
    <Container>
      <Logo href="/"><img src="/images/logo.svg" alt="Tesla-Logo" /></Logo>
      <Menu>
        {cars && cars.map((car, index) => (
          <MenuItem key={index} href="#">{car}</MenuItem>
        ))}
        {solars && solars.map((solar, index) => (
          <MenuItem key={index} href="#">{solar}</MenuItem>
        ))}
      </Menu>
      <RightMenu>
        {options && options.map((option, index) => (
          <MenuItem key={index} href="#">{option}</MenuItem>
        ))}
        <MenuItemBurger href="#" onClick={() => setSidebarStatus(true)}>Menu</MenuItemBurger>
      </RightMenu>
      <Sidebar show={sidebarStatus}>
        <CloseWrap>
          <CloseButton onClick={() => setSidebarStatus(false)}/>
        </CloseWrap>
        {cars && cars.map((car, index) => (
          <SidebarItem key={index}><a href="#">{car}</a></SidebarItem>
        ))}
        {solars && solars.map((solar, index) => (
          <SidebarItem key={index} href="#">{solar}</SidebarItem>
        ))}
        <SidebarItem><a href="#">Existing Inventory</a></SidebarItem>
        <SidebarItem><a href="#">Used Inventory</a></SidebarItem>
        <SidebarItem><a href="#">Roadaster</a></SidebarItem>
        <SidebarItem><a href="#">Cybertruck</a></SidebarItem>
        {options && options.map((option, index) => (
          <SidebarItem key={index} href="#">{option}</SidebarItem>
        ))}
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
  padding-left: 24px;
  align-items: center;
  flex: 1;

  @media(max-width: 600px) {
    padding-left: 0;
  }

  img {
    width: 120px;
    height: 24px;
  }
`
const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 5;
  justify-content: center;

  @media(max-width: 1200px) {
    display: none;
  }
`
const MenuItem = styled.a`
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;

  @media(max-width: 1200px) {
    display: none;
  }
`
const MenuItemBurger = styled(MenuItem)`
  display: flex;

  @media(max-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 8px 16px;
  }
`
const RightMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  flex: 1;
`
const Sidebar = styled.div`
  background-color: white;
  bottom: 0;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
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