import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ImagesData from '../imagesData/images';
import '../style/main.css'

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
    // color: theme.palette.primary.light,
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {ImagesData.map((item) => (
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
        {ImagesData.map((item) => (
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
