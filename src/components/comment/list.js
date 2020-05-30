import React from "react";
import {
  Divider,
  Typography,
  makeStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import { Link } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Pic1 from "assets/images/pic1.jpg";

const styles = makeStyles((theme) => ({
  comment: {
    paddingLeft: "4rem",
    paddingRight: "0.4rem",
  },
  links: {
    cursor: "pointer",
    paddingTop: "0.5rem",
  },
  viewMoreBtn:{
      textTransform: 'capitalize',
      cursor: 'pointer',
  }
}));

function Index(props) {
  const classes = styles(props);

  const likeComment = () => {

    if(props.comment.isComment){
      let tempPost = {...props.posts};
      // let commentId =  props.comment.id;

      tempPost['0']['comments'].find((comment, i, commentList) => {
        if(comment.id === props.comment.id){
            commentList[i] = {
              ...comment,
              liked: !comment.liked
            }
        }
      })
      localStorage["posts"] = JSON.stringify(tempPost);
      props.setPosts(tempPost);
    }
    else{
      let tempReply = { ...props.Replies };
      console.log('tempReply', tempReply);
      let parentCommentId = props.comment.parent_comment_id;
      
      if (tempReply[parentCommentId] && Array.isArray(tempReply[parentCommentId])) {
        console.log(22);
        tempReply[parentCommentId].find((reply, i, commentList) => {
          if(reply.id === props.comment.id){
            commentList[i] = {
              ...reply,
              liked: !reply.liked,
            }
          }
        })

        localStorage["replies"] = JSON.stringify(tempReply);
        props.setReply(tempReply);
      }
    }

  };

  return (
    <div>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={Pic1} />
          </ListItemAvatar>
          <ListItemText
            primary={props.comment.user_name || 'User 1'}
            secondary={
              <>
                <Typography
                  wrap
                  variant={`subtitle2`}
                  align={`left`}
                  color={`textSecondary`}
                >
                  {props.comment.content}
                </Typography>
                <Grid container justify="space-between" style={{width: '100%'}}>
                  <Grid item style={{display: 'flex', alignItems: 'center'}}>
                    <Link
                      className={classes.links}
                      variant="standard"
                      underline="none"
                      onClick={likeComment}
                      style={{ paddingRight: "0.8rem" }}
                    >
                      {
                        props.comment.liked  ? 
                        <>
                          <ThumbUpIcon /> 
                        </>
                        : 
                        <>
                          <ThumbDownIcon /> 
                        </>
                        }
                    </Link>
                    <Link
                      className={classes.links}
                      variant="standard"
                      underline="none"
                      onClick={() => props.onReply(props.comment)}
                    >
                      reply
                    </Link>

                  </Grid>

                </Grid>
              </>
            }
          />
        </ListItem>
        {!props.reply ? <Divider variant={`middle`} component={`li`} /> : null}
      </List>
    </div>
  );
}

export default React.memo(Index)