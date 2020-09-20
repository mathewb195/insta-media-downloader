import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 190,
    },
}));

export default function CardSkeleton(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card}>
            <Skeleton animation="wave" variant="rect" className={classes.media} />
            <CardContent>
                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
            </CardContent>
            </Card>
            <Card className={classes.card}>
            <Skeleton animation="wave" variant="rect" className={classes.media} />
            <CardContent>
                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
            </CardContent>
            </Card>
        </React.Fragment>
        

    );

};