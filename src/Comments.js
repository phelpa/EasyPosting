import React from 'react';

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    submitMessage = (e) => {
        e.preventDefault();
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.submitNewMessage(author,comment);
        this.refs.commentForm.reset();
        //console.table(store.getState());
    }

    render() {
      return (
        <div id="Components">
          <h1 className="f4 ml2">
            Roberto
            <small className="ma2 black">Daora!</small>
          </h1>
          <h1 className="f4 ml2">
            Aldair
            <small className="ma2 black">Grande max!</small>
          </h1> 
            {
              this.props.messages.map((element,idx) => {
                return (
                   
                  <h1 key={idx} className="f4 ml2">
                    {element.author}
                    <small className="ma2 black">{element.message}</small>
                    
                  </h1>
                   
                )
              })
            }
            
          <form ref="commentForm" onSubmit={this.submitMessage}>
              <input type="text" ref="author" placeholder="author" className="form-control form-control-alternative" /> 
              <input type="text" ref="comment" placeholder="comment" className="form-control form-control-alternative" />
              <input type="submit" hidden/>
          </form>       
        </div>
        
            );
    }
}

export default Comments;