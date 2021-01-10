import React from 'react';
import Gif1 from '../../gifs/updateReflix.gif';
import Gif2 from '../../gifs/nba_live.gif';
import Gif3 from '../../gifs/ubergif.gif';
import Gif4 from '../../gifs/recipes.gif';
import Gif5 from '../../gifs/Recycler-updated.gif';
import Grid from '@material-ui/core/Grid';
import Button from '../Button/index'
import {AiOutlineCheck} from 'react-icons/ai';
import './styles.css'

let gifArr = [
    Gif1,
    Gif2,
    Gif3,
    Gif4,
    Gif5,
]

let images = [
    [

    ]
]

export default function ProjectCard({data: {name, description, checkPoints}, onClick, index}) {
    return (
        <Grid container className="projectCard" spacing={2}>
            <Grid item sm={12} md={7} lg={7} className="gridItem">
                <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                    <img src={gifArr[index]} alt="loading..." className="gifContainer" />
                </div>
            </Grid>
            <Grid item sm={12} md={5} lg={5} className="gridItem">
                <div style={{paddingLeft: 50, display: 'block'}}>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    {
                        checkPoints && checkPoints.length > 0 && <>
                            {checkPoints.map(el => {
                                return <div key={el} style={{display: 'flex', alignItems: 'center',marginBottom: 10}}>
                                    <AiOutlineCheck style={{marginRight: 15}} color="#5aa469"/>
                                    <h3>{el}</h3>
                                </div>
                            })}
                        </>
                    }
                    
                    <div className="absoluteButton">
                        <Button name="View Details" onClick={() => onClick(name)} />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
