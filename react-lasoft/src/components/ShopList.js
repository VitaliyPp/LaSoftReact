import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImagesData from '../imagesData/images';
import '../style/shop.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    marginTop: '50px',
    justifyContent: 'space-evenly',
  },
  card: {
    width: 'auto',
  },
});

export default function ShopList() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {ImagesData.map((img) => (
        <CardActionArea className={classes.card} key={img.id}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            item {img.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {img.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      ))}
    </Card>
  );
}
