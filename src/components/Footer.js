import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography align='center' variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://creatorassit.com/">
        creatorassit.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
   

  },

  footer: {
    position: 'sticky',
    bottom: '0',
    left: '0',
    right: '0',
    
    marginTop:'calc(5% + 60px)',
 
    padding: theme.spacing(3, 2),
   
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  footerWrapper:{
    // minHeight: '100%',
    // padding:' 0 0 100px',
    // position: 'relative',
    // margin:'0 auto -100px'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <footer className={classes.footer}>

        {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
        <Copyright />

      </footer>
    </div>


  );
}