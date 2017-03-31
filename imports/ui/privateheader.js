import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router';

// export default class PrivateHeader extends React.Component {
//   onLogout() {
//     Accounts.logout();
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }

const PrivateHeader = (props) => {
  return (
    <div className="title-bar">
      <div className="title-bar__content">
      <h1 className="title-bar__title">{props.title}</h1>
      <Link className="title-bar__sub" to="/" onClick={() => Accounts.logout()}>logout</Link>
    </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
