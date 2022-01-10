import * as React from "react";
import { Impress, Step } from 'react-impressjs';
import Typing from 'react-typing-animation';

import './theme.css';
import './App.css';
import firstimg from './static/firstimg.png';
import secondimg from './static/secondimg.png';
import thirdimg from './static/thirdimg.png';
import fourthimg from './static/fourthimg.png';
import fifthimg from './static/fifthimg.png';
import sixthimg from './static/sixthimg.png';
import seventhimg from './static/seventhimg.png';
import eightthimg from './static/eightthimg.png';
import ninthimg from './static/ninthimg.png';
import giphy from './static/giphy.gif'
import tenthimg from './static/tenthimg.png';
import eleventhimg from './static/eleventhimg.png';
import twelvethimg from './static/twelvethimg.png';
import thirteenthimg from './static/thirteenthimg.png';
import fourteenthimg from './static/fourteenthimg.png';
import fifteenthimg from './static/fifteenthimg.png';


function App() {
    return (
      <div className ="Wrapper">
        <Impress hint={false} progress ={true} rootData={{ width: 512 }}>
          {/* React */}
          <Step>
            <div className="center" >
              <p style={{marginBottom: -50}}>Apa itu </p>
              <h1><b><span className="blue">React</span><span className="yellow">JS ?</span></b></h1>
            </div>
          </Step>
          {/* React Isi*/}
          <Step data={{x:-250, y:500, z:1500 , rotateZ: -90}}>
            <div className="center" >
              <div className="inline">
              <h4><b><span className="blue">React</span><span className="yellow">   adalah </span></b></h4>
              <Typing
              speed={90}
              startDelay={2000}
              >
              <p style={{marginBottom: -80}}>Javascript Library untuk membangun antar muka . </p>
              </Typing>
            </div>
            </div>
          </Step>
          {/* Function or Class */}
          <Step data={{x:250, y: 500, z:1000, rotateZ:180 }}>
            <div className="center">
              <div className="inline left line">
                <b className="blue">Prequisite</b>
                <p>React ditulis dalam JSX dan TSX </p>
              </div>
              <div className="inline right line">
                <b className="yellow">Target</b>
                <p>React dapat digunakan pada Framework , Package , bahkan Runtime</p>
              </div>
            </div>
          </Step>
          <Step data={{y: 1000 }}>
            <div className="center">
              <p><i>Hal ini membuat kreatifitas tanpa batasan dalam ide pengembangan dan karir </i> ✨✨ </p>
            </div>
          </Step>
          <Step data={{y: 1500 }}>
            <div className="center">
              <p><i>React begitu populer di kalangan Developer!<p> Anda tidak sendirian dalam membangun sebuah hal</p></i> <b>^_^</b></p>
            </div>
          </Step>
          {/* Image Class or Function */}
          <Step data={{x: 1000, y:500, rotateZ: 90, scale: 2 }}>
            <div className="center">
              <img src={giphy} alt="giphy"/>
            </div>
          </Step>

          {/* Hasil Comparison */}
          <Step data={{x: 2000, y: 1200, rotateZ: 180}}>
            <div className="center" >
              <p style={{marginBottom: -1}}>Sebelum menyelam ke Learning Curve</p>
              <p style={{marginBottom: -30}}>mari kita flashback</p>
              <h3>
                <b>
                  <span className="blue">29.</span>
                  <span className="red"> Mei</span>
                  <span className="yellow"> .2013</span>
                </b>
              </h3>
            </div>
          </Step>
          <Step data={{x: 1000, y:3000, z: 8000, rotateY:-90, rotateZ: 90, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <b className="blue">Awalnya React ditujukan sebagai Library</b>
                <p>untuk Single Page Application berbasis Virtual DOM . </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 1000, y:3200, z: 8500, rotateY:-90, rotateZ: 180, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <i className="blue">Seiringnya waktu ,</i>
                <p>popularitas react meningkat. </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 1200, y:3500, z: 8500, rotateZ: -90, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <i className="blue">berbagai framework mulai dirancang pada website modern berbasis node-react.</i>
                <p>Mulai dari CSR,SSR,SSG. </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 1500, y:3700, z: 9000, rotateY:90, rotateZ: -90, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <b className="blue">kemudian pada tahun 2018</b>
                <p>react-hooks diperkenalkan membuat state management yang berasal dari bawaan react itu sendiri. </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 2000, y: 4000, z: 7000, rotateY:90, rotateZ:-90, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <i className="blue">Tidak sampai disitu saja , </i>
                <p>TSX pun dirancang sedemikian rupa seperti JSX agar lebih kompatible , clean dan absolute </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 2000, y: 4000, z: 5000, rotateY:90, rotateZ:-90, scale: 1 }}>
            <div className="center">
              <div className="inline left line">
                <i className="blue">Hingga saat ini React mempunyai komunitas yang besar ,</i>
                <p>dan target karir yang baik . </p>
              </div>
            </div>
          </Step>
          <Step data={{x: 2000, y: 700, rotateZ: 180}}>
          <b><i>Berikut tahapan Learning Curve nya:</i></b>
            <div className="center">
              <div className="inline spare left line">
                <i className="blue">Fundamental</i>
                <p>HTML,CSS,JS</p>
              </div>
              <div className="inline">
                <i className="red">Interactive</i>
                <p>ES 6</p>
              </div>
              <div className="inline right line spare">
                <b className="yellow">Package</b>
                <p>NPM,Yarn</p>
              </div>
            </div>
          </Step>
          <Step data={{x: 2000, y: 200, rotateZ: 180}}>
            <div className="center">
              <div className="inline">
                <i>Components</i>
                <p>Class | Function </p>
                <div className="image-block">
                  <img src={thirteenthimg} alt="thirteenthimg"/>
                  <div>Desc</div>
                </div>
              </div>
              <div className="inline right line">
                <i>JSX | </i>
                <p>Element , Object , Children</p>
                <div className="inline">
                  <div className="inline image-block">
                    <img src={eleventhimg} alt="eleventhimg"/>
                    <div>Desc</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={firstimg} alt="firstimg"/>
                    <div>Desc</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={thirdimg} alt="thirdimg"/>
                    <div>Desc</div>
                  </div>
                </div>
              </div>
              <div className="inline right line">
                <i>Routing</i>
                <p>Section 3</p>
                <div className="inline">
                  <div className="inline image-block">
                    <img src={tenthimg} alt="tenthimg"/>
                    <div>Desc</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={fourteenthimg} alt="fourteenthimg"/>
                    <div>Desc</div>
                  </div>
                </div>
              </div>
            </div>
          </Step>
          <Step data={{x: 3500, y: 200, rotateZ: 120}}>
            <div className="center">
              <div className="inline">
                <i>Class</i>

                <div className="image-block">
                  <img src={thirteenthimg} alt="thirteenthimg"/>
                  
                </div>
              </div>
              <div className="inline right line">
                <i>Hooks</i>
                
                <div className="inline">
                  <div className="inline image-block">
                    <img src={eleventhimg} alt="eleventhimg"/>
                    
                  </div>
                  <div className="inline right image-block">
                    <img src={firstimg} alt="firstimg"/>
                    
                  </div>
                  <div className="inline right image-block">
                    <img src={thirdimg} alt="thirdimg"/>
                    
                  </div>
                </div>
              </div>
              <div className="inline right line">
                <i>Function</i>
                
                <div className="inline">
                  <div className="inline image-block">
                    <img src={tenthimg} alt="tenthimg"/>
                    
                  </div>
                  <div className="inline right image-block">
                    <img src={fourteenthimg} alt="fourteenthimg"/>
                    
                  </div>
                </div>
              </div>
            </div>
          </Step>
          {/* Component */}
          <Step data={{x: 1000, y:-180, z: 200, rotateY:-90, rotateZ: 90, scale: 1 }}>
            <div className="center">
              <p><b className="big">Deep</b> Dive</p>
            </div>
          </Step>
          <Step data={{x: 1000, y:-180, z: 100, rotateY:-90, rotateZ: 90, scale: 0.5 }}>
           <div className="center-box">
              <div className="inline">
                <i className="blue">Life-cycle</i>
                <div className="image-block">
                  <img src={sixthimg} alt="sixthimg"/>
                  
                </div>
              </div>
              <div className="inline right left line">
                <i className="blue">Conditional Rendering</i>
                <div className="image-block">
                  <img src={fifthimg} alt="fifthimg"/>
                  
                </div>
              </div>
              <div className="inline">
                <i className="blue">Props and State</i>
                <div className="image-block">
                  <img src={twelvethimg} alt="twelvethimg"/>
                  
                </div>
              </div>
            </div>
          </Step>

          {/* Async */}
          <Step data={{x: 1000, y:1380, z: 200, rotateY:-90, rotateZ: 90, scale: 1 }}>
            <div className="center">
              <p><b className="big">Async</b> Function</p>
            </div>
          </Step>
          <Step data={{x: 1000, y:1380, z: 100, rotateY:-90, rotateZ: 90, scale: 0.5 }}>
           <div className="center">
              <div className="inline">
                <b className="yellow">Fetch</b>
                <div className="image-block">
                  <img src={seventhimg} alt="seventhimg"/>
                  
                </div>
              </div>
              <div className="inline right line">
                <b className="yellow">Axios</b>
                <div className="image-block">
                  <img src={fourthimg} alt="fourthimg"/>
                  
                </div>
              </div>
            </div>
          </Step>

          {/* Code Rotate */}
          <Step data={{x: 1000, y:3000, z: 100, rotateY:-90, rotateZ: 90 }}>
            <div className="center">
              <p><b className="big">CodeRotate</b></p>
              <div className="image-block">
                <img className="large" src={eightthimg} alt="eightthimg"/>
              </div>
            </div>
          </Step>
          <Step data={{x: 1000, y:3000, z: 100, rotateY:-180, rotateZ: 90 }}>
            <div className="center">
            <p><b className="big">CodeRotate</b></p>
              <div className="image-block">
                <img className="large" src={ninthimg} alt="ninthimg"/>
              </div>
            </div>
          </Step>

          {/* Infrastructure as Code */}
          <Step data={{x: 1000, y:4500, z: 100, rotateY:-180, rotateZ: 90 }}>
            <div className="center">
            <p><b className="big">Rotation</b> Code</p>
            <div className="inline">
                {/* <b className="blue">Code</b> */}
                <div className="image-block">
                  <img src={secondimg} alt="secondimg"/>
                  <div>Formation</div>
                </div>
              </div>
              <div className="inline right line">
                {/* <b className="blue">Build</b> */}
                <div className="image-block">
                  <img src={fifteenthimg} alt="fifteenthimg"/>
                  <div>Formation</div>
                </div>
              </div>
            </div>
          </Step>
          <Step data={{x: 1000, y:4000, z: 10000, rotateY:-180, rotateZ: 90 }} className="hide">
            <div className="center">
              <div className="inline left line">
                <b className="blue">skeleton</b>
                <p>description</p>
              </div>
              <div className="inline">
                <b className="red">skeleton</b>
                <p>description</p>
              </div>
              <div className="inline right line">
                <b className="yellow">skeleton</b>
                <p>description</p>
              </div>
            </div>
          </Step>

          <Step data={{x: 1000, y: 500, z: 3000, rotateY: 30 }} className="hide">
            <p>Presentation <b>React</b>, 2022.</p>
          </Step>
        </Impress>
      </div>
    );
  }


export default App;
