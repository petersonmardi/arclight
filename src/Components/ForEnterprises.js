import React from "react";
import Business from '../data/business.json';
import Checkmark from '../Images/Checkmark.svg';
import '../Stylesheet/ForEnterprises.css';

class ForEnterprises extends React.Component {
    render() {
        return (
            <div className="ForEnterprises">
                <div className="ForEnterprises-header">
                  <h1 
                    className="ForEnterprises-title">
                    {Business.data[2].title}
                  </h1>
                  <p>
                    {Business.data[2].subtitle}
                  </p>
                </div>
                <div className="ForEnterprises-items">
                  <div className="ForEnterprises-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[2].item01}
                      </p>
                  </div>
                  <div className="ForEnterprises-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[2].item02}
                      </p>
                  </div>
                  <div className="ForEnterprises-item">
                    <img
                      src={Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {Business.data[2].item03}
                      </p>
                  </div>
                </div>
            </div>
        )
    };

}

export default ForEnterprises;