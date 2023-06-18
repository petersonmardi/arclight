import React from "react";
import '../Stylesheet/User.css';

function User({userImage, altImage, name, country}) {
    return (
        <div className="userMap">
            <div className="userImage">
                <img 
                  src={require(`../Images/${userImage}.svg`)} 
                  alt={altImage}/>
            </div>
            <div className="userName">
              <b>{name}</b>
            </div>
            <div className="userCountry">
              {country}
            </div>
        </div>
    )
}

export default User;
