import React, { useState } from 'react';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Feature from '../components/Feature';
import { productData, productDataTwo, productDataThree, productDataFour } from '../components/Products/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Products heading='Choose Your Favorite'  data={productData} id="pizzas" />
            <Feature />
            <Products heading='Salads' data={productDataFour} id="salads" />
            <Products heading='Desserts' data={productDataTwo} id="desserts" />
            <Products heading='Drinks' data={productDataThree} id="drinks" />
            <Footer />
        </>
    )
}

export default Home;
