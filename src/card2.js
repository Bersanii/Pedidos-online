import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import shadows from '@material-ui/core/styles/shadows';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: "10px 0 10px 0",
  },
  media: {
    height: 100,
    width:150,
  },
  desc: {
    marginLeft: '15px',
    padding: '10px 0 10px 0'
  },
  content: {
    padding: 0
  },
});


export default function MediaCard (props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
            <Box    display="flex"
                    alignItems="flex-start"
                    bgcolor="background.paper">
                
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/featured/?food"
                    title="Contemplative Reptile"/>
            
                <div className={classes.desc}>
                    <Typography variant="h5" component="h2">
                        {props.nome}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.descricao}
                    </Typography>
                </div>

            </Box>
            </CardContent>
            <CardActions>
                <Typography variant="body" component="h2">
                    {props.preco}
                </Typography>
                <Button size="small" variant="outlined" color="primary">Adicionar</Button>
            </CardActions>
        </Card>
    );
}