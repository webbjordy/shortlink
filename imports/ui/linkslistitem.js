import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class LinksListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>

    );
  }
}

LinksListItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  _id: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired
};
