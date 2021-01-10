import React from 'react'
import { SkillBars } from 'react-skills';
import './styles.css'
import Grid from '@material-ui/core/Grid'


const skillsData1= [
    {
      name: 'ReactJS',
      level: 85,
      duration: 2,
      color: '#61dbfb',
    },
    {
        name: 'git',
        level: 85,
        duration: 2,
        color: '#eb4d28',
    },
    {
        name: 'Node.js',
        level: 80,
        duration: 2,
        color: '#70b558',
    },
    {
        name: '.Net core',
        level: 50,
        duration: 2,
        color: '#6a4097',
    },
    {
        name: 'CSS/SCSS',
        level: 90,
        duration: 2,
        color: '#254bdd',
    },
    
  ]
  
const skillsData2= [
    {
      name: 'Python',
      level: 60,
      duration: 2,
      color: '#3578ad',
    },
    {
      name: 'Java',
      level: 60,
      duration: 2,
      color: '#d8010a',
    },
    {
        name: 'React Native',
        level: 85,
        duration: 2,
        color: '#61dbfb',
    },
    {
        name: 'Javascript',
        level: 90,
        duration: 2,
        color: '#efd81d',
    },
    {
        name: 'html',
        level: 95,
        duration: 2,
        color: '#dd4b25',
    }
  ]
  

export default function Introduction() {
    return (
        <div className="projectsContainer" id="aboutme">
            <div className="mainProjectsContainer">
                <h1>
                    ABOUT ME
                </h1>
                <div style={{height: 2, width: '100%', marginBottom: 10, backgroundColor: "#dddddd"}} />
                <div className="inrtoductionContainer">
                    <Grid container>
                        <Grid item sm={12} md={6} lg={6} className="intro">
                            <h3>Intro</h3>
                            <p>
                                As a student of software engineering, I already trying to improve my skills by attending various programming courses. I have tried programming areas such as: 
                            </p>
                            <ul>
                                <li>Android - IOS application development via React Native</li>
                                <li>Simple Artificial intelligence implementations with Python language </li>
                                <li>Development of various applications for different platforms.</li>
                                <li>Object oriented programming</li>
                            </ul>
                            <p>
                            Moreover, I usually participate in many activities, regarding this, I have learned to manage my time pretty well. Also, I am very curious and that encourages me to reach my goals despite all the difficulties that I face.
                            </p>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6} className="skills">
                            <h3 style={{paddingLeft: 5}}>Skills</h3>
                            <Grid container>
                                <Grid item sm={12} md={6} lg={6} className="">
                                    <SkillBars skills={skillsData1} />
                                </Grid>
                                <Grid item sm={12} md={6} lg={6} className="">
                                    <SkillBars skills={skillsData2} />
                                </Grid>
                           </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
