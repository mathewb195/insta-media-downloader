import React from 'react';
import './App.css';
import './css//header.css';

import Header from './components/Header';

import MediaDownloader from './components/MediaDownloader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Albumview from './components/Albumview';
import StickyFooter from './components/Footer';
import FAQ from './components/FAQ';
//import CardSkeleton from './components/CardSkeleton';
const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
  }
}));


function App() {
  const classes = useStyles();
  const [updatedMediaInfo, setUpdatedMediaInfo] = React.useState('');
 // const [cardSkeletonOpen, setcardSkeletonOpen] = React.useState(false);
 

  const handleMediaInfoUpdate = (mediaInfo) => {
    
    setUpdatedMediaInfo(updatedMediaInfo => [...mediaInfo]);
  }
  // const handleCardSkeletonOpen =(cardSkeletonOpen) =>{
  //   setcardSkeletonOpen(cardSkeletonOpen);
  // }
  const albumview = () => {
    if (updatedMediaInfo.length > 0) {
      return (
        <Albumview url={updatedMediaInfo} />

      )
    }
  }
 

  return (

    <div className={classes.root}>
      <Grid container direction='column' spacing={0}>
        <Grid item xs={12} >
          <Header />
        </Grid>
        <Grid item xs={12} >
          <MediaDownloader onMediaInfoUpdate={handleMediaInfoUpdate}/>
        </Grid>
        <Grid item xs={12} >
          
          {albumview()}
        </Grid>
        <Grid item xs={12}>
          <FAQ />
        </Grid>
        <Grid item xs={12}>
          <StickyFooter />
        </Grid>
      </Grid>
    </div>

  );
}

export default App;
