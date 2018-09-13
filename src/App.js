import { connect } from 'react-redux';
import Main from './Main';
import { addMessage, addLikes } from './actions';


//redux stuff
//eu posso dois states, um pro like e um pro messages entao messages:state vai ficar e messages:state.messages;
const mapStateToProps = (state) => {
    return {
        messages:state.messages,
        likes: state.likes
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage:(author,message) =>  dispatch(addMessage(author,message)),
        submitLike:() => dispatch(addLikes())
        
    }
}


/*
  Here we create an <App/> component which is just our <Main/> component with it's props
  populated with our actions and our state

  We're injecting the data at the top level and passing it down, but you can connect() any component to make the actions and the store available to you. 
*/
 
var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
