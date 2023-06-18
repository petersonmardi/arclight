import React from "react";
import '../Stylesheet/Logo.css';

function Logo({logo, brand}) {
    return (
      <div className="logo-wrapper">
        <img 
          src={require(`../Images/${logo}.svg`)}
          alt={brand} />
      </div>
    )
}

export default Logo;