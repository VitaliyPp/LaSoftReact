import React from 'react';
import { useSelector } from 'react-redux'
import { 
  makeStyles, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  IconButton 
} from '@material-ui/core';
import './style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
    width: '80%',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    marginTop: '50px !important',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineImageList() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {posts.map((item) => (
          <ImageListItem key={item.url}>
            <img src={item.url} alt={item.id} />
            <ImageListItemBar
              title={item.id}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.price}`}>
                  <p className={classes.title}>{item.price}$</p>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList className={classes.imageList} cols={2.5}>
        {posts.map((item) => (
          <ImageListItem key={item.url}>
            <img src={item.url} alt={item.id} />
            <ImageListItemBar
              title={item.id}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.price}`}>
                  <p className={classes.title}>{item.price}$</p>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
