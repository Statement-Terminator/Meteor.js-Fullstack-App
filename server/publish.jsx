Stories = new Mongo.Collection("stories");

Meteor.publish("allStories",function(){
  return Stories.find();
})
/*Meteor.publish("titleStory",function(){
  return Stories.find({title: this.props.story.title});
}) */
