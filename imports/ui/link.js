import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './privateheader';
import AddLink from './addlink'
import LinksListFilters from './linkslistfilters'

export default () => {
      return (
       <div>
         <PrivateHeader title="Short Lnk" />
         <div className="page-content">
           <LinksListFilters />
           <AddLink />
           <LinksList/>
         </div>
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
