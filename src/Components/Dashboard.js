import React from "react";
import Business from '../data/business.json';
import Checkmark from '../Images/Checkmark.svg';
import '../Stylesheet/Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                  <h1 
                    className="dashboard-title">
                    {Business.data[0].title}
                  </h1>
                  <p>
                    {Business.data[0].subtitle}
                  </p>
                </div>
                <div className="dashboard-items">
                  <div className="dashboard-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[0].item01}
                      </p>
                  </div>
                  <div className="dashboard-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[0].item02}
                      </p>
                  </div>
                  <div className="dashboard-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[0].item03}
                      </p>
                  </div>
                </div>
            </div>
        )
    };

}

export default Dashboard;