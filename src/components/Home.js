import React, {useState} from 'react';
import '../styles/Home.css';
import PageWrapper from './PageWrapper'
import Typewriter from 'typewriter-effect';
const Home = () => {  
//   const [ time, setTime ] = useState(false);
//   let classes = "img";
//   if(time) {
//   classes += " changed";
// }
  return(
    <PageWrapper>
      <div className='home'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello! I\'m Karina')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteChars(6)
            typewriter.typeString('Frontend Developer')
              .callFunction(() => {
                console.log('New string typed out');
              })
              .start()
          }}
        />
        <div className='img'/>
      </div>
    </PageWrapper>
  )
}


export default Home;
