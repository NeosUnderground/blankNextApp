
import React, { Component } from 'react'
import Link from 'next/link'
import logo from './images/logo.png';
import facebookImg from './images/facebookImg.png';
import instagramImg from './images/instagramImg.png';
import linkedInImg from './images/linkedInImg.png';
import twitterImg from './images/twitterImg.png';
import vimeoImg from './images/vimeoImg.png';


export default class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        style : {
            height : 0 //initial state for height of overlay to 0 (sow its not showing)
        }
    };
    this.openNav = this.openNav.bind(this);  //binds the actions 
    this.closeNav = this.closeNav.bind(this); //binds the actions 
}
  componentDidMount() {
    document.addEventListener('click', this.OpenNav);
  }
  //mounts the event handlers to page on load
  componentWillUnmount() {
    document.removeEventListener('click', this.closeNav);
  }
  //method to update the state to height of 100% to show the nav overlay when the menu icon is clicked
  openNav() {
    const style = { height : '100%' };
    this.setState({ style });     
    document.addEventListener('click', this.OpenNav);
  }
  //method to update the state to height of 0 to hide the nav overlay when the exit icon is clicked
  closeNav() {
    document.removeEventListener('click', this.closeNav);
    const style = { height : 0 };
    this.setState({ style });     
  } 
  
  render() {
    return (
      <nav>{/* Nav component content */} 
      <img className='logo' src={logo} alt='atlastied logo'></img> {/* Logo Img */}
      <span className='navIcon' onClick={this.openNav}><i className= 'material-icons-round md-48 md-blue'>menu</i></span>  {/* Hamburger menu icon onClick invokes open.nav to open overlay menu */}         
        <div ref= 'snav' className= 'overlay' style= {this.state.style} > {/* overlay div, updates state to height = 100%||0% to display||hide overlay */}            
         <a href= "javascript:void(0)" className= "closebtn" onClick= {this.closeNav} > × </a> 
          <div className= 'sidenav-container'> 
            <div className='sidenav-containerTop'>
              <div className='sidenav-containerLeft'>
                <ul>
                    <Link href="/">
                     <a><li onClick= {this.closeNav} className='links grow blueHover'>Home</li></a> 
                    </Link>
                    <Link href="/about">
                     <a><li onClick= {this.closeNav} className='grow blueHover'>About</li></a>
                    </Link>
                    <Link href="/glossary">
                     <a><li onClick= {this.closeNav} className='grow blueHover'>Glossary</li></a>
                    </Link>
                </ul>
              </div>
              <div className= 'sidenav-containerRight'> 
                <div>
                  <h2 className='blue'>Phoenix</h2>
                  <p>Phone: (800) 876-3333</p>
                  <p>Email: support@atlasied.com</p>
                  <p>Address: 4545 E. Baseline Rd. Phoenix, Az, 85042</p>
                </div>
              </div>
            </div>
            <div className='sidenav-containerBottom'> {/* social media imgs */} 
              <div className= "text-center social-icon-list">
                <a href='https://www.facebook.com/AtlasIED/' target='blank'><img className='grow' src={facebookImg} alt='atlasied facebook' ></img></a>
                <a href='https://twitter.com/Atlas_IED' target='blank'><img className='grow' src={twitterImg} alt='atlasied twitter' ></img></a>
                <a href='https://www.instagram.com/atlasied/' target='blank'><img className='grow' src={instagramImg} alt='atlasied instagram' ></img></a>
                <a href='https://www.linkedin.com/company/atlasied?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A3121858%2Cidx%3A1-1-1%2CtarId%3A1453394283028%2Ctas%3AAtlasIED' target='blank'><img className='grow' src={linkedInImg} alt='atlasied linkedin' ></img></a>
                <a href='https://vimeo.com/atlasied' target='blank'><img className='grow' src={vimeoImg} alt='atlasied vimeo' ></img></a>
              </div>    
            </div>
          </div>
        </div>       
  </nav>
    )
  }
}
