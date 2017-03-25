import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>This is the Link comp.</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
