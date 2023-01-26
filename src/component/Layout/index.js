import React from 'react';
import  Header from "../header/index";
import Information  from "../infomation/index";
import Footer from '../footer/index'
import {Container,Wrapper}  from './styles';
import Planes from '../plans'
import Service from '../service';

export const Layout = () => {
    return (
        <Container>
            <Wrapper>
                <Header/>
                <Information/>
                <Service/>
                <Planes/>
                <Footer/>
            </Wrapper>
        </Container>
    )
}

