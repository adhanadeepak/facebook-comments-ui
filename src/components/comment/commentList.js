import React from "react";
import {
  makeStyles,
  Grid,
} from "@material-ui/core";

import ReplyList from './list';


const styles = makeStyles((theme) => ({
  replyWraper:{
    padding: '0 2rem',    
}
}));

function Comment(props) {
  const classes = styles(props);

  return (
    <div>
        <ReplyList setReply={props.setReply} setPosts={props.setPosts} comment={props.comment} onReply={props.onReply} Replies={props.Replies} posts={props.posts} /> 
      {
        props.Replies &&  props.Replies[props.comment.id] ? (
          props.Replies[props.comment.id].map((reply, i) => (
          <Grid key={reply.id} container className={classes.replyWraper}>
            <Grid item>
              <ReplyList setReply={props.setReply} setPosts={props.setPosts} comment={reply} Replies={props.Replies} onReply={() => props.onReply(reply)} posts={props.posts} />
            </Grid>
          </Grid>
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default React.memo(Comment)