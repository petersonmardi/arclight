import React from "react";
import Checkmark from '../Images/Checkmark Pricing.svg';
import CheckmarkMiddle from '../Images/Checkmark.svg';
import '../Stylesheet/Pricing.css';

class Pricing extends React.Component {
    render() {
        return (
            <div className={this.props.isMiddle ? 'Pricing-in-middle' : 'Pricing' }>
                <div className="Pricing-header">
                  <span>{this.props.category}</span>
                  <div className="Pricing-price">
                    <h1 
                      className="Pricing-title">
                      {this.props.title}
                    </h1>
                    <span>/mo</span>
                  </div>
                  <p>
                    {this.props.subtitle}
                  </p>
                </div>
                <div className="Pricing-items">
                  <div className="Pricing-item">
                    <img
                      src={this.props.isMiddle ? CheckmarkMiddle : Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {this.props.item01}
                      </p>
                  </div>
                  <div className="Pricing-item">
                    <img
                      src={this.props.isMiddle ? CheckmarkMiddle : Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {this.props.item02}
                      </p>
                  </div>
                  <div className="Pricing-item">
                    <img
                      src={this.props.isMiddle ? CheckmarkMiddle : Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {this.props.item03}
                      </p>
                  </div>
                  <div className="Pricing-item">
                    <img
                      src={this.props.isMiddle ? CheckmarkMiddle : Checkmark}
                      alt='Chechmar Icon' />
                      <p>
                        {this.props.item04}
                      </p>
                  </div>
                <button
                  className={this.props.isMiddle ? 'Pricing-button--middle' : 'Pricing-button'}>
                  Suscribe
                </button>
              </div>
            </div>
        )
    };

}

export default Pricing;