import React, { Fragment } from 'react';
import Hero from '../../components/home/Hero.component';
import Footer from '../../components/layout/foother';
import Navbar from '../../components/layout/navbar';
function Home(){
    return (
    <Fragment>
        <Navbar/>
        <Hero/>
        <Footer/>
    </Fragment>);
}
export default Home;