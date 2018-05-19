import React, {Component} from 'react';
import StoriesReport from './StoriesReport.jsx';
//this page is made to display stories into the wrapper
export default class StorySingle extends Component {
  render(){
    var imgURL = this.props.story.img;
    var text1 = this.props.story.text;
    if(text1.length > 70){
      var myStr = this.props.story.text;
      myStr = myStr.substring(70, myStr.indexOf("$") - 1);
    }else{
      var myStr = this.props.story.text;
    }
    console.log(this.props.story.text);
    return(
      <a href={this.props.story.title}><li ref="hover" style= {{"color":"white","display":"inlineBlock","width":"100%","borderRadius":"10px","textAlign":"center","border":"solid","borderColor":"#e57373","margin":"auto","marginTop":"40px","width":"400px","height":"100px","backgroundColor":"#e57373"}}>
        <img style= {{"color":"white","position":"absolute","width":"100%","borderRadius":"10px","textAlign":"center","border":"solid","borderColor":"#e57373","marginLeft":"-300px","marginTop":"-2.5px","width":"100px","height":"100px","backgroundColor":"#e57373"}} src={imgURL} />
        <div style={{"width":"100%","display":"block","position":"relative","textAlign":"center","marginTop":"-20px","fontWeight":"900","color":"black"}}>{this.props.story.title}</div>
        <div ref="storyPara" style={{"width":"100%","display":"block","position":"relative","width":"400px"}}>{myStr}</div>
        <p style={{"color":"#90caf9","position":"absolute", "marginLeft":"140px"}}>Click to read more</p>
        <StoriesReport />
      </li> </a>
    )
  }
}
