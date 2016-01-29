import {Posts} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import logger from "../../libs/logger.js";

Meteor.methods({
  'posts.create'(_id, title, content) {
    check(_id, String);
    check(title, String);
    check(content, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization
    const uid = this.userId;
    const u = Meteor.users.findOne(uid);
    const ipaddr = u.status.lastLogin.ipAddr;
    const createdAt = new Date();
    const post = {_id, title, content, createdAt, uid, ipaddr};
    Posts.insert(post);
    logger("info", "post:", uid, title, ipaddr);
  }
});
