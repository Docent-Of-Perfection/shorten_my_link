import { Mongo } from 'meteor/mongo';

Meteor.methods({
  //an insert having to do with the links collection, the tics wrapping make it a string
'links.insert': function(url) {
  console.log('attempting to save', url);
}

});

export const Links = new Mongo.Collection('links');
