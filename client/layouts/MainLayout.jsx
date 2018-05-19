import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout =({content}) => (
  <div className="main-layout">
    <header style={{"width":"1400px", "margin":"auto"}}>
      <nav brand='logo'style={{"border":"solid", "borderColor": "#e57373","borderRadius":"10px","textAlign":"center"}}>
        <a href="/" style={{"marginRight":"40px", "marginLeft":"40px"}}> Stories </a>
        <a href= "/submit" style={{"marginRight":"40px", "marginLeft":"40px"}}> Submit your own encounter </a>
        <AccountsUI style={{"marginRight":"40px", "marginLeft":"40px"}}/>
      </nav>
    </header>
    <div style={{"width":"1400px", "margin":"auto"}}>
    {content}
    </div>
  </div>
)
