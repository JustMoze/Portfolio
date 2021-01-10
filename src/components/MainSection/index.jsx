import React from 'react'
import './styles.css'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../Button'
import ProfileImage from '../../images/git.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight: 20,
        width: '100%',
        height: '90%',
        marginLeft: 20,
    },
    grids : {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: "20%"
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}))

export default function MainSection() {
    const classes = useStyles()
    return (
        <section id="mainSection">
            <Grid container className={classes.root} spacing={2}>
                <Grid
                    xs={12}
                    md={7}
                    lg={7}
                    item
                    className="grids"
                >
                  <div className="greetingInfo">
                    <h1 className="mainTitle">Hey, I'm Modestas.</h1>
                    <p>
                      A Full-Stack developer & programmer from Lithunania. I make web and mobile applications, ussually with JS
                    </p>
                    <div style={{width: "25%", minWidth: 80}}>
                      <Button onClick={() => window.scrollTo(0, 900)} name="My Projects"/>
                    </div>
                  </div>
                </Grid>
                <Grid
                    xs={12}
                    md={5}
                    lg={5}
                    item
                    className="grids2"
                >
                 <div className="image">
                  <img src={ProfileImage} alt="Profile"/>
                 </div>
                </Grid>
            </Grid>
        </section>
    )
}
