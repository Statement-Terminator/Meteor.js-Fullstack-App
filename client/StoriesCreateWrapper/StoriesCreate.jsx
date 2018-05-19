import React, {Component} from 'react';


export default class StoriesCreate extends Component {
  //method that calls method.js to insert an object into MongoDB

  addStory(event){
    event.preventDefault();
    var text = this.refs.story.value.trim();
    var textTitle = this.refs.title.value.trim();

    if(text && textTitle && document.getElementById('link')){
    var imgURL = document.getElementById('link').innerHTML;
    Meteor.call('addStory',text,textTitle,imgURL, (error,data)=>{
        if(error){
          Bert.alert('Please Login First','danger','fixed-top','fa-frown-o');
        }else{
          this.refs.story.value="";
          this.refs.title.value="";
        }
    });
  }

}
  addFile(event){
    event.preventDefault();
    client = filestack.init('AlBhEkEARVOHW0WWLrJMzz');

    const links = this.refs.links;
    document.getElementById('Upload').remove();
    const addLink = function(file) {
        const link = document.createElement('a');
        link.innerHTML = file.url;
        link.href = file.url;
        link.setAttribute("id", "link");
        links.appendChild(link);
        if(document.getElementById("link")){
          var imgURL = document.getElementById("link").innerHTML;
          console.log(imgURL);
          document.querySelector("img").src = imgURL;
        }
    };

    client.pick({
      accept: 'image/*',
      fromSources:  ['local_file_system','imagesearch'],
      maxSize: 1024*2024,
      maxFiles: 1,
    }).then(
      function(result) {
        result.filesUploaded.forEach(function(file) {
            addLink(file)
        });
    });
  }





  render(){
    return(
      <form className="new-story">
        <img style={{"display":"block","width":"100%","margin":"auto","width":"300px","height":"300px","marginTop":"20px"}}/>
        <button id="Upload" onClick={this.addFile.bind(this)}> Upload Image </button>
        <div ref="links"></div>
        <input type="text" ref="title" maxLength="20" placeholder="Your Title" />
        <input type="text" ref="story" maxLength="700" placeholder="Describe Your Encounter" />
        <button className="Add"
              onClick={this.addStory.bind(this)}>
              add
              </button>
      </form>
    )
  }
}
