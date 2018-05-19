Meteor.methods({
  addStory(story,title,imgURL){
    check(story, String)
    check(title, String)
    if(!Meteor.userId()){
      throw new Meteor.Error('Please Login First')
    }
    Stories.insert({
      text:story,
      title:title,
      createdAt: new Date(),
      user: Meteor.userId(),
      img: imgURL
    });
  }
});
