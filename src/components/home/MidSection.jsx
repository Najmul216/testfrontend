import React from 'react';
import Box from '@material-ui/core/Box';
import { imageURL } from '../../constant/data';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
});


const MidSection = () => {

    const classes = useStyle();

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Box className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <img src={image} style={{ width: '33%' }} />
                    ))
                }
            </Box>
            <img src={url} className={(classes.wrapper)} style={{width: '100%'}} />
        </>
    )
}

export default MidSection;
