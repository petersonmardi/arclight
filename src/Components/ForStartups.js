import React from "react";
import Business from '../data/business.json';
import Checkmark from '../Images/Checkmark.svg';
import '../Stylesheet/ForStartups.css';

class ForStartups extends React.Component {
    render() {
        return (
            <div className="ForStartups">
                <div className="ForStartups-header">
                  <h1 
                    className="ForStartups-title">
                    {Business.data[1].title}
                  </h1>
                  <p>
                    {Business.data[1].subtitle}
                  </p>
                </div>
                <div className="ForStartups-items">
                  <div className="ForStartups-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[1].item01}
                      </p>
                  </div>
                  <div className="ForStartups-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[1].item02}
                      </p>
                  </div>
                  <div className="ForStartups-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[1].item03}
                      </p>
                  </div>
                </div>
            </div>
        )
    };

}

export default ForStartups;