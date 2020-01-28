import React, { Component } from 'react'
import Head from 'next/head'
import LayOut from '../components/LayOut'


export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <LayOut>
           <Head>
              <title>Home</title>
              <meta name="description" content="Web site created using create-react-app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
           <section>
              <div>
               <h1>Home Page</h1>
             </div>
           </section>
          </LayOut>
        </div>
      </div>
    )
  }
}
