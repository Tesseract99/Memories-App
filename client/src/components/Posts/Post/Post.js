import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import {
  cardSx,
  mediaSx,
  overlay,
  overlay2,
  details,
  cardActionsSx,
  postTitleSx,
} from "./styles";
import { useEffect } from "react";
import { deletePost, likePost } from "../../../store/slice/postActions";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const updatePostHandler = () => {
    setCurrentId(post._id);
  };

  const deletePostHandler = (id) => {
    dispatch(deletePost(id));
  };

  const likeHandler = (id) => {
    dispatch(likePost(id));
  };

  return (
    <Card sx={cardSx}>
      <CardMedia sx={mediaSx} image={post.selectedFile} title={post.title} />
      <div style={overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={updatePostHandler}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div style={details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography variant="h5" gutterBottom sx={postTitleSx}>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={cardActionsSx}>
        <Button
          size="small"
          color="primary"
          onClick={() => likeHandler(post._id)}
        >
          <ThumbUpIcon fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => deletePostHandler(post._id)}
        >
          <DeleteIcon />
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
