import React,{Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class StoryFull extends TrackerReact(Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        stories: Meteor.subscribe("allStories")
      }
    }
  }
  componentWillUnmount(){
    this.state.subscription.stories.stop();
  }
  story(){
    return Stories.find({title: this.props._title}).fetch();
  }


  render(){
    console.log(this.story());
    let res = this.story();
    if(!res){
      return(<div>Loading</div>);
    }
    return(
      <div style= {{"display":"inlineBlock","width":"100%","borderRadius":"10px","textAlign":"center","margin":"auto","marginTop":"40px","width":"400px","height":"100px"}}>
      {this.story().map( (story)=>{
        return <div style= {{"fontSize":"40px","color":"#e57373"}}> {story.title} </div>;
      } )}
      <div className="line" style= {{"display":"inlineBlock","width":"100%","borderRadius":"10px","margin":"auto","width":"270px","height":"1px","backgroundColor":"#e57373"}}> </div>
      {this.story().map((story)=>{
        return <img style={{"width":"100%","borderRadius":"10px","textAlign":"center","border":"solid","borderColor":"#e57373","marginTop":"5px","width":"400px","height":"400px","backgroundColor":"#e57373"}} src={story.img} />
      })}
      {this.story().map( (story)=>{
        return <div style = {{"marginTop":"50px"}}> {story.text} </div>;
      } )}
      </div>
    )
  }
}
