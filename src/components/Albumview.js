import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';
import SimpleDialogDemo from './Dialog';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '10px',
    borderTop: '2px solid ',
    borderColor: theme.palette.grey[400]
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {

    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "auto",
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    margin: 0,
    height: 200,
    backgroundPosition:'center top',
    //paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  typography: {
    paddingTop: '10px',
    height: 75,
    overflowY: "hidden",
    margin: 0,
    padding: 0,
    listStyle: "none",
    whiteSpace: 'pre-line',
    '&:hover': {

      overflowY: "auto",
      '&::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: '#F5F5F5'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        borderRadius: '10px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgb(0, 102, 255)',
        borderRadius: '10px'
        //outline: '1px solid slategrey'
      }
    }

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },

}));




export default function Albumview(props) {
  const classes = useStyles();
  const cards = [...props.url];
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <main >
        {/* Hero unit */}
        <Container className={classes.main} maxWidth="md">

        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.mediaDisplayUrl}
                    title="Image title"
                  />

                  <CardContent className={classes.cardContent}>
                    <Grid container direction="row" alignItems="center" spacing={2} >
                      <Grid item >
                        <Avatar alt={card.ownerName} src={card.ownerProfilePicture} >
                          {card.ownerName.charAt(0).toUpperCase()}
                        </Avatar>
                      </Grid>
                      <Grid item >
                        <Typography className={classes.alignCenter} variant="h5" >
                          {card.ownerName}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography className={classes.typography} variant="body2">
                      {card.mediaCaption}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.mediaPlayUrl + '&dl=1'} size="small" color="primary">
                      {card.mediaType === 'GraphVideo' ? 'Download Video' : 'Download Image'}
                    </Button>
                    {/* <Button size="small" color="primary" onClick={handleOpen}>
                      Preview
                    </Button> */}
                    <SimpleDialogDemo card={card}></SimpleDialogDemo>
                    {/* <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        {<MediaContent className={classes.paper} card={card}/>}
                        {/* <div className={classes.paper}>
                          <h2 id="transition-modal-title">Transition modal</h2>
                          <p id="transition-modal-description">react-transition-group animates me.</p>
                        </div> 
                      </Fade>
                    </Modal> */}
                  </CardActions>
                </Card>

              </Grid>
            ))}

          </Grid>
        </Container>
      </main>

    </React.Fragment>
  );
}