/*
** Server side user account functions.
*/
import logger from '../../libs/logger.js';

// Log user login / logout events.

Meteor.users.find({ 'status.online': true }).observe({
  added: (user) => {
    // User just came on line.
    logger( 'info', 'login:', guessWho(user) );
  },

  removed: (user) => {
    // User just logged out / disconnected.
    logger( 'info', 'logout:', guessWho(user) );
  }
});

function guessWho(u) {
  let who = '';
  if ( typeof u.services.google === 'undefined' ) {
    // Non-Google login.
    if ( typeof u.profile.name !== 'undefined' ) {
      who = u.profile.name + ' ';
    }
    who += '<' + u.emails[0].address + '> (' + u.roles.toString() + ')';
  } else {
    let g = u.services.google;
    who = g.name + ' <' + g.email + '> (' + u.roles.toString() + ')';
  }
  who += ' ' + u.status.lastLogin.ipAddr;
  return who;
}

Accounts.validateNewUser( function (u) {

  // Validate source of Google accounts. We only want accounts associated with
  // our organization.

  logger( 'info', 'new user:', u );

  if ( typeof u.services.google !== 'undefined' ) {

    let g = u.services.google;

    if ( g.email.match('@g.highlineschools.org$') ) {
      return true;
    } else {
      logger( 'warning', 'validate: fail:', g.email );
      throw new Meteor.Error( 403, 'Please user your school Google account.' );
    }
  } else {
    if ( Meteor.users.find().count() === 0 ) {
      // Bootstrapping - first account is the administrator.
      logger( 'alert', 'creating first account: ', u.emails[0].address );
      return true;
    } else {
      logger( 'warning', 'validate: fail:', u.emails[0].address );
      throw new Meteor.Error( 403, 'Please user your school Google account.' );
    }
  }
});

Accounts.onCreateUser( function (options, u) {

  // u is a Meteor user object.

  if ( Meteor.users.find().count() === 0 ) {
    // Bootstrapping, create first user account as administrator (admin role).
    u.roles = [ 'admin' ];
    options.profile.name = 'Root';
    logger('info', 'created:', u.emails[0].address, u.roles.toString() );
  } else {
    let g = u.services.google;
    if ( g.email.match('^[1-9][0-9]+@') ) {
      u.roles = [ 'student' ];
    } else {
      u.roles = [ 'teacher' ];
    }
    logger('info', 'created:', g.name, g.email, u.roles.toString() );
  }

  if ( typeof options.profile !== 'undefined' ) {
    u.profile = options.profile;
  } else {
    u.profile = {};
  }

  return u;
});
