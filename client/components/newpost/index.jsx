// XXX: We need to find a way to use npm's react
// Otherwise, we can't run tests properly.
// To test this component, use React from npm directly
// as shown below
import React from 'react';
// import React from 'react';
import logger from '/libs/logger.js';

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <div className="form-group">
          <input ref="titleRef" type="text" className="form-control" id="title"
            placeholder="Enter your post title." />
        </div>
        <div className="form-group">
          <textarea ref="contentRef" className="form-group" id="content"
            placeholder="Enter your post content." />
        </div>
        <div className="btn-group">
          <button type="button" className="btn"
            onClick={this.createPost.bind(this)}>
            Add New
          </button>
        </div>

      </div>
    );
  }

  createPost() {
    logger('debug', 'createPost()', 'props = ', this.props, 'refs = ', this.refs);
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default NewPost;
