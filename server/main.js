import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
//
// const empSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//   },
//   hourlyWage: {
//     type: Number,
//     min: 1
//   },
//   email: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email
//   }
// });

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email})
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    console.log('this is the user', user);
    return true;
  })
});
