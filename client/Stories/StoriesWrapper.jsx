import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import StorySingle from './StorySingle.jsx';
//import StoriesCreate from './StoriesCreate.jsx';

Stories = new Mongo.Collection("stories");

export default class StoriesWrapper extends TrackerReact(React.Component) {

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
  stories(){
    return Stories.find().fetch();
  }
  addStory(event){
    event.preventDefault();
    var text = this.refs.story.value.trim();
    var textTitle = this.refs.title.value.trim();
    if(text){
    Meteor.call('addStory',text,textTitle, (error,data)=>{
        if(error){
          Bert.alert('Please Login First','danger','fixed-top','fa-frown-o');
        }else{
          this.refs.story.value="";
        }
    });
  }

}
  render(){
    return(
      <div>
        <h1 style={{"color":"#e57373","textAlign":"center"}}> Encountering Strange Events </h1>
        <ul>
        {this.stories().map((story)=>{
          return <StorySingle key={story._id} story={story}/>
        } )}
        </ul>
      </div>
    )
  }
}
