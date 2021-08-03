import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  makeStyles, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
} from '@material-ui/core';
import './style.scss';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    margin: '50px auto',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '200px',
    height: '250px',
  },
  cardText: {
    textDecoration: 'none',
    color: '#000',
  }
});

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const renderedPosts = posts.map((post) => {
    return (
      <Link to={`/shop/${post.id}`} className={classes.cardText} key={post.id}>
        <CardActionArea className={classes.card}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={post.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              item {post.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    )
  })

  return (
    <Card className={classes.root}>
      {renderedPosts}
    </Card>
  )
}
