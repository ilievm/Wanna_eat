import React from 'react';
import './businesslist.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {        
        return(
            <div className="BusinessList" >
                {/* {console.log('busineslist------------------')}
                {console.log(this.props.businesses)} */}
                  {this.props.businesses.map(business => {
                      return <Business business={business} key={this.props.businesses.id}/>
                  })}
            </div>
        )
    }
}

export default BusinessList;