import React, { Component } from 'react'
import Head from 'next/head'
import Nav from './nav/nav'
import Footer from './footer/footer'


const LayOut = (props) => (    
    <div>
        <Head>
            // stylesheets
            <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One|Roboto&display=swap" rel="stylesheet"/>>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        
        <Nav/>
        {props.children}
        <Footer/>
    </div>

)

export default LayOut;