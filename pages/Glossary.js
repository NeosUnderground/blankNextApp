import React, { Component } from 'react'
import Head from 'next/head'
import LayOut from '../components/LayOut'


export default class Glossary extends Component {
    render() {
        return (
            <LayOut>
                <Head>
                    <title>Glossary</title>
                    <meta name="description" content="Web site created using create-react-app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <section>
                    <div>
                        <h1>Glossary Page</h1>
                    </div>
                </section>
            </LayOut>
        )
    }
}
