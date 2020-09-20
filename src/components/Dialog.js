import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import {DialogActions, DialogContent, Grid } from '@material-ui/core';
//import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },

    image: props => ({
        backgroundImage: `url(${props.card.mediaPlayUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // margin: 'auto',
        maxHeight: '500px',
        height: '75vh',
        //width: 'calc(20vw * 0.54 - 2%)',
        //borderRadius: 8,
        display: 'flex',
        margin: 0
        // marginLeft: '10px',
        // marginTop: '10px'
    }),
    video: {
        maxHeight: '500px',
        height: '70vh',
        margin: 0
    }
}));

function SimpleDialog(props) {
    const classes = useStyles(props);
    const { card, onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

   

    return (
        <Dialog onClose={handleClose} fullWidth={true} maxWidth='sm' aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title" >
                <Grid xs={12} sm direction="row" justify="center" alignItems="center"spacing={2}>
                    <Grid item>
                        <Avatar alt={card.ownerName} src={card.ownerProfilePicture} >
                            {card.ownerName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" >{card.ownerName}</Typography>
                    </Grid>


                </Grid>
            </DialogTitle>
            <DialogContent>
                {card.mediaType === 'GraphVideo' ?

                    <Grid item  >
                        <Player className={classes.video} fluid={false} height='70vh'
                            playsInline
                            poster={card.mediaDisplayUrl}
                            src={card.mediaPlayUrl}
                        />
                    </Grid> : <Grid item className={classes.image} />

                }
                {/* <video id="background-video" loop className={classes.video}>
                    <source src={card.mediaPlayUrl} type="video/mp4" />

                </video> */}

            </DialogContent>
            <DialogActions>
                <Button autoFocus href={card.mediaPlayUrl + '&dl=1'} onClick={handleClose} color="primary">
                    Download
          </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
          </Button>
            </DialogActions>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const [open, setOpen] = React.useState(false);
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        //setSelectedValue(value);
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Preview
      </Button>
            <SimpleDialog card={props.card} open={open} onClose={handleClose} />
        </div>
    );
}
