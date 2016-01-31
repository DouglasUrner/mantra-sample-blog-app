import React from 'react';

const Post = ({post}) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>

    {
      post.uid &&
      <div>
        <hr/>
        <p>by: <b>{Meteor.users.findOne(post.uid).profile.name}</b>
        , {post.createdAt.toString()} ({post.ipaddr})</p>
      </div>
    }
  </div>
);

export default Post;
