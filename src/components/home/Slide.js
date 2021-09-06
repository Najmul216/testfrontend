import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constant/data';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Countdown from 'react-countdown';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyle = makeStyles({
    component: {
        marginTop: 15,
        background: '#FFFFFF'
    },
    image: {
        height: '150px'
    },
    deal: {
        display: 'flex',
        padding: '15px 20px',
        background: ' #e5e7e9 '
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '25px 15px'
    },
})

const Slide = ({ timer, title }) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer && <Box className={classes.timer}>
                        <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                        <Countdown date={Date.now() + 8.64e+7} renderer={renderer} />
                    </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                
                {
                    products.map(product => (
                        <Card>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.url} className={classes.image} />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                            </Box>
                        </Card>
                    ))
                }
                
            </Carousel>
        </Box>
    )
}

export default Slide;
