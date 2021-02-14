import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="pizzas" onClick={toggle}>Pizzas</SidebarLink>
        <SidebarLink to="salads" onClick={toggle}>Salads</SidebarLink>
        <SidebarLink to="desserts" onClick={toggle}>Desserts</SidebarLink>
        <SidebarLink to="drinks" onClick={toggle}>Drinks</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/PizzaRestaurant/fullmenu'>Full Menu</SidebarRoute>
      </SideBtnWrap>
      <SideBtnWrap>
        <SidebarRoute to='/PizzaRestaurant/signin'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;