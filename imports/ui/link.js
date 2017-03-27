import React from 'react';

import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './privateheader';
import AddLink from './addlink'

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader title="your links" />
        <LinksList/>
        <AddLink />
      </div>
    );
  }
}
