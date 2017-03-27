import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simpl-schema-config.js'

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// stateless functional componennt

// const myComponent = () => {
//   return(
//     <div>
//       <h1>My component here</h1>
//     </div>
//   );
// };



Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
