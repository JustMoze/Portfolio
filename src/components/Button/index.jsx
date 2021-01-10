import React from 'react'
import Button from '@material-ui/core/Button';  
import './styles.css'

export default function PortfolioButton({onClick, name}) {
    return (
    <Button variant="contained" color="primary" onClick={onClick} style={{borderRadius: 15, padding: 7, minWidth: 150}}>
        {name}
      </Button>
    )
}
