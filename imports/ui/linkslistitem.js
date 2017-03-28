import React from 'react';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      alert('YEAH')
    }).on('error', () =>{
      alert('Fucked up')
    })
  }
componentWillUnmount() {
  this.clipboard.destroy();
}
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
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
