import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // minWidth: 300,

    margin: theme.spacing(3, 0, 2),
  },
}));



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

export default function MediaDownloader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { onMediaInfoUpdate } = props;

  const [mediaInfo, setMediaInfo] = React.useState('');





  useEffect(() => {
    onMediaInfoUpdate(mediaInfo);
// eslint-disable-next-line 
  }, [mediaInfo]);


  const handleSubmit = (event) => {
    event.preventDefault();

    setMediaInfo('');
    if (event.target.mediaurl.value !== '' && validateUrl(event.target.mediaurl.value)) {
      var searchURL = event.target.mediaurl.value.split("?")[0]
      axios.get(searchURL + "?__a=1")
        .then(res => {
          const mediaType = res.data.graphql.shortcode_media.__typename;
          const mediaCaption = res.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text;
          const ownerName = res.data.graphql.shortcode_media.owner.username;
          const ownerProfilePicture = res.data.graphql.shortcode_media.owner.profile_pic_url;

          if (mediaType === 'GraphImage') {
            const display_urlvalue = res.data.graphql.shortcode_media.display_url;
            setMediaInfo(mediaInfo => [...mediaInfo,

            {
              mediaType: mediaType,
              mediaDisplayUrl: display_urlvalue,
              mediaPlayUrl: display_urlvalue,
              mediaCaption: mediaCaption,
              ownerName: ownerName,
              ownerProfilePicture: ownerProfilePicture
            }])
          } else if (mediaType === 'GraphSidecar') {
            const sideCar = res.data.graphql.shortcode_media.edge_sidecar_to_children.edges;
            for (let i = 0; i < sideCar.length; i++) {
              const sideCarelement = sideCar[i];
              const sideCarMediaType = sideCarelement.node.__typename;
              if (sideCarMediaType === 'GraphImage') {
                const sideCardisplay_urlvalue = sideCarelement.node.display_url;
                setMediaInfo(mediaInfo => [...mediaInfo,

                {
                  mediaType: sideCarMediaType,
                  mediaDisplayUrl: sideCardisplay_urlvalue,
                  mediaPlayUrl: sideCardisplay_urlvalue,
                  mediaCaption: mediaCaption,
                  ownerName: ownerName,
                  ownerProfilePicture: ownerProfilePicture
                }])
              } else if (sideCarMediaType === 'GraphVideo') {
                const sideCardisplay_urlvalue = sideCarelement.node.display_url;
                const sideCarVideo_urlvalue = sideCarelement.node.video_url;
                setMediaInfo(mediaInfo => [...mediaInfo,

                {
                  mediaType: sideCarMediaType,
                  mediaDisplayUrl: sideCardisplay_urlvalue,
                  mediaPlayUrl: sideCarVideo_urlvalue,
                  mediaCaption: mediaCaption,
                  ownerName: ownerName,
                  ownerProfilePicture: ownerProfilePicture
                }])
              }
            }
          } else if (mediaType === 'GraphVideo') {
            const display_urlvalue = res.data.graphql.shortcode_media.display_url;
            const video_urlvalue = res.data.graphql.shortcode_media.video_url;
            setMediaInfo(mediaInfo => [...mediaInfo,

            {
              mediaType: mediaType,
              mediaDisplayUrl: display_urlvalue,
              mediaPlayUrl: video_urlvalue,
              mediaCaption: mediaCaption,
              ownerName: ownerName,
              ownerProfilePicture: ownerProfilePicture
            }])
          }


        }).catch(err => {
          console.log(err)
        })
    } else {
      setOpen(true)
    }

  };

  const handleChnage = (event) => {
    if (event.target.value) {
      setOpen(!validateUrl(event.target.value))
    }
  }



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <React.Fragment>
      <Box mt={15} />
      <Container>
        <Typography variant="h4" align='center'>
          Instagram Public Media Downloader
          </Typography>
      </Container>

      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>

          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mediaurl"
              label="Media URL"
              name="mediaurl"
              autoFocus
              placeholder="https://www.instagram.com/p/B-t9otyln4g/"
              onChange={handleChnage}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon color="primary" fontSize="small" />
                  </InputAdornment>
                ),
              }}

            />
            <Container className={classes.main} maxWidth="xs">
              <Button
                type="submit" fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Search
          </Button>
            </Container>


          </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please Enter valid URL
        </Alert>
        </Snackbar>



      </Container>
    </React.Fragment>


  );
}