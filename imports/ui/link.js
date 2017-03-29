import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './privateheader';
import AddLink from './addlink'
import LinksListFilters from './linkslistfilters'

export default () => {
      return (
       <div>
         <PrivateHeader title="Your Links" />
         <LinksListFilters />
         <AddLink />
         <LinksList/>
       </div>
     );
}

// export default class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="your links" />
//         <LinksList/>
//         <AddLink />
//       </div>
//     );
//   }
// }
