import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px'
    },
    accordian: {
        marginBottom: '10px',

    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        marginLeft: '5px',
        paddingTop: '10px'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    question: {
        // margin: 0,
        // padding: 0
    }
}));

export default function ControlledAccordions() {
    const questions = [
        {
            question: "Is it safe to download Instagram photos?",
            answer: "Sure. Download Instagram photos anonymously and safely with Ingramer. We do not collect any of your data."
        },

        {
            question: "Does a user get notified when I save his post?",
            answer: "No. A user can't tell if you download his media with the Ingramer downloader."
        },
        {
            question: "Is it lawful to download Instagram pictures?",
            answer: "Yes, it is legal to download Instagram pictures. If you do not publish the saved photos as your own (not giving credit to the real author), you keep within the copyright law."
        },

        {
            question: "Can I save videos via Instagram Downloader Online?",
            answer: "Sure. Everybody can also utilize an Instagram Photo Downloader as an Instagram Video Downloader. Only high-quality content for your further usage."
        },
    ]
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container className={classes.root} maxWidth="lg">
            {questions.map((question, i) => (
                <Accordion  key={i} className={classes.accordian} TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel' + (i + 1)} onChange={handleChange(`panel${i + 1}`)}>
                    <AccordionSummary
                    className={classes.question}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Grid container direction="row" alignItems="center"  spacing={4} >
                            <Grid item >
                                <Avatar alt={question.question} >
                                    Q
                                 </Avatar>
                            </Grid>
                            <Grid item  style={{marginLeft: '10px'}} xs>
                                <Typography variant='h5' >{question.question}</Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" gutterBottom>
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}
