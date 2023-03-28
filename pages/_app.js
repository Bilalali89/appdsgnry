
import '../styles/bootstrap.min.css';
import 'animate.css';
import '../styles/icofont.min.css';
import '../styles/pe-icon-7-stroke.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../styles/style.scss';
import '../styles/responsive.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import { useState, useEffect } from 'react';


const _app = ({Component, pageProps}) => {

    let [loading, setLoading] = useState()

    useEffect(() => {
      setTimeout(()=> {
        (setLoading(true), 
        2000)
       },[]);
       
       
      });

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>App Dsgnry</title>
    </Head>

    <Component {...pageProps} />
    
    {/* Preloader */}
    <Loader loading={loading} />

    {/* Go Top Button */}
    <GoTop />
</>
  )
}

export default _app

// export default class MyApp extends App {
//     // Preloader
//     state = {
//         loading: true
//     };
//     componentDidMount() {
//         this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
//         AOS.init();
//     }
//     componentWillUnmount() {
//         if (this.timerHandle) {
//             clearTimeout(this.timerHandle);
//             this.timerHandle = 0;
//         }
//     }

   
    
//     render () {
//         const { Component, pageProps } = this.props;
        

//         return (
           
//         );
//     }
// }