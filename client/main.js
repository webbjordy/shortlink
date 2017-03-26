import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';

import Signup from '../imports/ui/signup';
import Link from '../imports/ui/link';
import NotFound from '../imports/ui/notfound';
import Login from '../imports/ui/login';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
