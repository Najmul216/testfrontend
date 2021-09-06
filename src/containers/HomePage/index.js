import React from 'react';
import Layout from '../../components/Layout';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// import "./style.css";
// import Header from '../../components/Header';
// import MenuHeader from '../../components/MenuHeader';

//components
import Banner from '../../components/home/Banner';
import Navbar from '../../components/home/Navbar';
import Slide from '../../components/home/Slide';
import MidSection from '../../components/home/MidSection';

const useStyle = makeStyles({
    component: {
        padding: '20px',
        background: '#f2f2f2'
    }
})


const HomePage = () => {
    const classes = useStyle();

    return (
        <Layout>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Slide timer={true} title= "Deal Of The Day"/>
                <Slide timer={false} title= "Discounts For You" />
                <MidSection />
                <Slide timer={false} title= "New Arrivals" />
                <Slide timer={false} title= "Top Sellers" />
                <Slide timer={false} title= "Recommended Items" />
            </Box>
        </Layout>
    )
}

export default HomePage;
