import React, {useState} from 'react';

import CommentList from './commentList';
import {makeStyles, Grid} from '@material-ui/core';
import ReplyItem from './list';

const styles = makeStyles((theme) => ({
    
    replyWraper:{
        padding: '0 2rem',    
    }
   
}));

function Comment(props) {

    const classes = styles(props);

    return (
        <div>
            {
             props.comment.isComment && props.Replies && !props.Replies[props.comment.id] ?
                <CommentList setReply={props.setReply} onReply={props.onReply} comment={props.comment} Replies={props.Replies} setPosts={props.setPosts} posts={props.posts} />
                :
                <>
                 <ReplyItem setReply={props.setReply} setPosts={props.setPosts} onReply={props.onReply} setPosts={props.setPosts}  posts={props.posts} comment={props.comment}/> 
                 {
                        props.Replies && props.Replies[props.comment.id] ? 
                        props.Replies[props.comment.id] && props.Replies[props.comment.id].map((reply, i) => (
                        <Grid key={reply.id} container className={classes.replyWraper}>
                            <Grid item>
                                <CommentList setReply={props.setReply} setPosts={props.setPosts} posts={props.posts} reply comment={reply} onReply={() => props.onReply(reply)} Replies={props.Replies}  />
                            </Grid>
                        </Grid>
                        ))
                        :
                        null
                }
                 </>
            }
        </div>
    )
};


export default React.memo(Comment);
