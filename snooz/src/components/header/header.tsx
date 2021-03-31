import React from 'react';

class Header extends React.Component {
    state = {
      title: this.props.title
    };

 render() {
  return (
   <div>
     <h1>{this.state.title}</h1>
   </div>
  );
 }
}

export default Header;