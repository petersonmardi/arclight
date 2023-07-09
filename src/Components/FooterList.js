import React from 'react';
import '../Stylesheet/FooterList.css';

class FooterList extends React.Component {
    render() {
        return (
            <div className='List-component'>
              <h1 className='List-title'>{this.props.title}</h1>
              <ul className='ListWrapper'>
                  <li>{this.props.item1}</li>
                  <li>{this.props.item2}</li>
                  <li>{this.props.item3}</li>
              </ul>
            </div>
        )
    }
}

export default FooterList;