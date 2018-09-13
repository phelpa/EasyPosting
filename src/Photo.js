import React from 'react';
import store from './reducers';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = (props) => {
    console.log(store.getState());

    this.submitLike = (e) => {
        e.preventDefault();
        props.submitLike(); 
    }
   
    return (
        <figure className='w-30 mr3'> 

            <div className="grid-photo-wrap">
            <img onClick={this.submitLike} className='br3' src="https://i.redd.it/yb5j9b6yb4c11.jpg" alt="Meu cachorro lindo" />
        
            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={props.likes} className="likes-heart">{props.likes}</span>
            </CSSTransitionGroup>

            </div>

            <figcaption className='black ma3'>
            Meu cachorro lindo
            </figcaption>
            
            <button type="button" onClick={this.submitLike} className="btn btn-outline-primary">
            &#10084; {props.likes}</button> 
            
            <button type="button" className="btn btn-outline-primary">
            {props.messages.length+2} Comments
            </button>

            
            

        </figure>

        
    );
}

export default Photo;