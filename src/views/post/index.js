import React from "react";

import Paper from "@material-ui/core/Paper";
import {
  Divider,
  Typography,
  makeStyles,
  Button,
  Grid,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  MenuItem
} from "@material-ui/core";

// Icons
import Comment from "components/comment";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import CommentIcon from '@material-ui/icons/Comment';

//  Images
import Pic1 from "assets/images/pic1.jpg";
import generateId from "utils/generateId";

const styles = makeStyles((theme) => ({
  paperRoot: {
    width: "1000px",
    height: "500px",
    overflow: "auto",
    backgroundColor: theme.palette.secondary.main,
  },
  wrapper: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.gray,
  },
  addReplyWrapper: {
    background: "rgba(44, 122, 123, 0.12)",
    padding: "12px 6px",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
  },
  interactionBtn: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: '0.5rem 1rem',
  },
}));

export default function Index(props) {
  const classes = styles(props);
  const [addComment, showAddComment] = React.useState(false);
  const [reply, setReply] = React.useState("");
  const [posts, setPosts] = React.useState(null);
  const [editReply, setEditReply] = React.useState(null);

  const[user, setUser] = React.useState('0');
  const[userName, setUserName] = React.useState('John');

  const [Replies, setReplies] = React.useState(null);

  const onReply = (comment) => {
    // console.log("comment", comment);
    setEditReply(comment);
    showAddComment((addComment) => !addComment);
  };

  const addReply = (e) => {
    let reply = e.target.value;
    setReply(reply);
  };

  const updatePost = () => {
    if (editReply && editReply.id && reply) {
      // Deep copy of reply object
      let tempReply = { ...Replies };

      if (tempReply[editReply.id] && Array.isArray(tempReply[editReply.id])) {
        tempReply[editReply.id].push({
          id: generateId(),
          content: reply,
          user_name: userName,
          isComment: false,
          liked: false,
        });
      } else {
        tempReply[editReply.id] = [];
        tempReply[editReply.id].push({
          id: generateId(),
          content: reply,
          user_name: userName,
          isComment: false,
          liked: false,
        });
      }

      localStorage["replies"] = JSON.stringify(tempReply);
      // console.log('temp Reply', tempReply);
      setReplies(tempReply);
      setReply("");
    }
    else if(reply){
      console.log(2);
      let tempPosts = {...posts};
      let commentId =  generateId();
      tempPosts['0']['comments'].push({
          id: commentId,
          user_name: userName,
          content: reply,
          liked: false,
          isComment: true,
      });

      localStorage["posts"] = JSON.stringify(tempPosts);
      setPosts(tempPosts);
      setReply("");
    }
  };

  React.useEffect(() => {
    if (localStorage["posts"]) {
      let post = JSON.parse(localStorage["posts"]);
      setPosts(post);
    }

    if (localStorage["replies"]) {
      let reply = JSON.parse(localStorage["replies"]);
      setReplies(reply);
    }
  }, []);

  const users = [
    {
      value: '0',
      label: 'John'
    },
    {
      value: '1',
      label: 'Jane'
    }
  ];

  return (
    <div id="post-page">
      <Grid
        container
        className={classes.wrapper}
      >
        <Grid item style={{ margin: "auto", position: "relative" }}>
          <Grid item>
            <TextField
              id="select-user"
              select
              variant={`outlined`}
              label="Select User"
              value={user}
              style={{width: '200px', padding:'1rem'}}
              onChange={(e) => {setUser(e.target.value);} }
              helperText=""
            >
              {users.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Paper elevation={4} className={classes.paperRoot}>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={Pic1} />
                </ListItemAvatar>
                <ListItemText primary={`Rajesh`} secondary={`3 hrs ago`} />
              </ListItem>
              <Grid container justify={`flex-start`}>
                <Grid item style={{ padding: "0.5rem 1rem" }}>
                  <Typography
                    variant={`subtitle2`}
                    align={`left`}
                    color={`textSecondary`}
                  >
                    Life is too short, let have some fun. In our daily life,
                    especially in school life, we pranked our friends. And now
                    when we sit in our friends circle, we discuss those pranks
                    and memories and just laugh. Now as things are evolved, we
                    usually spend most of our free time on social media.
                  </Typography>
                </Grid>
                <Grid container>
                    <Link underline={`none`} className={classes.interactionBtn}  color={`textSecondary`} onClick={() => showAddComment((addComment) => !addComment)}>
                        <ThumbUpIcon style={{paddingRight:'1rem'}} /> Like
                      </Link>
                      <Link underline={`none`} className={classes.interactionBtn} color={`textSecondary`} onClick={() => showAddComment((addComment) => !addComment)}>
                        <CommentIcon style={{paddingRight:'1rem'}} /> Comment
                      </Link>
                </Grid>

              </Grid>
              <Divider variant={`middle`} component={`li`} />
            </List>
            <Grid container direction={`column`} style={{marginBottom: '64px'}}>
              {posts &&
                posts["0"].comments.map((comment) => (
                  <Grid item key={comment.id}>
                    <Comment
                      comment={comment}
                      Replies={Replies}
                      setReply={setReply}
                      posts={posts}
                      setPosts={setPosts}
                      onReply={onReply}
                    />
                  </Grid>
                ))}
            </Grid>
          </Paper>
          {addComment && (
            <Grid
              container
              className={classes.addReplyWrapper}
              alignItems={`center`}
            >
              <Grid item style={{ width: "5%", paddingRight: "12px" }}>
                <Avatar style={{backgroundColor: 'orange'}}>{userName[0] || 'U'}</Avatar>
              </Grid>
              <Grid item style={{ width: "70%", paddingRight: "2rem" }}>
                <TextField
                  multiline
                  variant={`outlined`}
                  fullWidth
                  value={reply}
                  onChange={addReply}
                />
              </Grid>
              <Grid>
                <Button onClick={updatePost}>Add comment</Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
