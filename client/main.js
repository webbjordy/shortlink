import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';


import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simpl-schema-config.js'

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});



Meteor.startup(() => {
  Session.get('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});
