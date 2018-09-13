import React from 'react';
import './argon.css';
import 'tachyons';
import './Main.css';
import './animations.css';
import Comments from './Comments';
import Photo from './Photo'


const Main = (props) => {
  
    return (
     
      <div>
        <h1 className="f-subheadline title flex justify-center ma3 mb4">EasyPosting</h1>
        <div className="App flex justify-center">
          <Photo {...props}/>
          <Comments {...props}/>
        </div>
      </div>
     
      
    );
}

export default Main;
