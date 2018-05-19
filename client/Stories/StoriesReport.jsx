import React, {Component} from 'react';

export default class StoriesReport extends Component {

  render(){
    var reportBtnStyle ={
      width: '100px',
      fontSize: '10px',
      position:'absolute',
      marginTop:'45px',
      marginLeft:'295px'
    };
    return(
      <div style={reportBtnStyle}>
        <button type="button"><a href="mailto:npkdenz@hotmail.com">Report Content</a></button>
      </div>
    )
  }
}
