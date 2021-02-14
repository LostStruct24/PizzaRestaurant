import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { FullMenuData, FullMenuDataTwo, FullMenuDataThree, FullMenuDataFour } from '../components/Fullmenu/Data';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FullMenu from '../components/Fullmenu';

const FullMenuPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <FullMenu heading='Pizzas'  data={FullMenuData} id="pizzas" />
            <FullMenu heading='Salads' data={FullMenuDataFour} id='salads' />
            <FullMenu heading='Desserts' data={FullMenuDataTwo} id="desserts" />
            <FullMenu heading='Drinks' data={FullMenuDataThree} id="drinks" />
            <Footer />
        </div>
    )
}

export default FullMenuPage;
