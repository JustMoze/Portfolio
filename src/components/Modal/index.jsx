import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import './styles.css'
// reflix
import Image1 from '../../images/reflix/reflix1.jpg'
import Image2 from '../../images/reflix/reflix2.jpg'
import Image4 from '../../images/reflix/reflix4.png'
import Image5 from '../../images/reflix/reflix5.png'
import Image3 from '../../images/reflix/recycler.jpg'

// nba
import Nba1 from '../../images/nba/nba1.png'
import Nba2 from '../../images/nba/nba2.png'
import Nba3 from '../../images/nba/nba3.png'

// uber
import Uber1 from '../../images/uber/uber1.png'
import Uber2 from '../../images/uber/uber2.png'

// recycler
import Recycler1 from '../../images/recycler/recycler.jpg'
import Recycler2 from '../../images/recycler/recycler2.jpg'

// recipe
import Recipe1 from '../../images/recipe/recipe1.jpg'
import Recipe2 from '../../images/recipe/recipe2.jpg'
import Recipe3 from '../../images/recipe/recipe3.jpg'

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './slider.scss';
import { detailProjectsData } from '../../utils/data';

let imageContainer = {
    'reflix': [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5
    ],
    'nba': [
        Nba1,
        Nba2,
        Nba3
    ],
    'uber': [
        Uber1,
        Uber2
    ],
    'recipe': [
        Recipe1,
        Recipe2,
        Recipe3
    ],
    'recycler': [
        Recycler1,
        Recycler2
    ]
}

export default function WebModal({open, name, handleClose}) {      
	return (
		<Modal
			open={open}
			onClose={handleClose}
			onBackdropClick={handleClose}
			onEscapeKeyDown={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>   
        <div className="modalContainer">
            <div className="modalContent">
                <div className="modalDetails">
                    <h1>{detailProjectsData[name].name}</h1>
                    <h4>{detailProjectsData[name].description}</h4>
                    {detailProjectsData[name].features && detailProjectsData[name].features.length > 0 && <ul>
                        {detailProjectsData[name].features.map(el => {
                            return <li key={el}>{el}</li>
                        })}    
                    </ul>}
                    <>
                        {detailProjectsData[name].future && <div>
                            <h3>Future Plans: </h3>    
                            <h4>{detailProjectsData[name].futurePlans}</h4>
                        </div>}
                    </>
                    <h3>

                    </h3>
                </div>
                <div style={{paddingLeft: 20, paddingRight: 20, marginTop: 30}}>
                    <AwesomeSlider cssModule={AwsSliderStyles}>
                        {imageContainer[name].map(el => {
                            return <div style={{width: '100%', height: '100%'}}>
                                <img src={el} className="modalSliderImages" />
                            </div>
                        })}
                    </AwesomeSlider>
                </div>
            </div>
        </div>
		</Modal>
	);
}

/*
{imageContainer[name].forEach(element => {
                    
})}
*/