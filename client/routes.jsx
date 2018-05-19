import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import StoriesWrapper from './Stories/StoriesWrapper.jsx';
import StoriesCreateWrapper from './StoriesCreateWrapper/StoriesCreateWrapper.jsx';
import StoryFull from './Stories/StoryFull.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout,{
      content: (<StoriesWrapper />)
    })
  }
});
FlowRouter.route('/submit', {
  action(){
    mount(MainLayout,{
      content: (<StoriesCreateWrapper />)
    })
  }
});
FlowRouter.route('/:_title', {
  action(params){
    mount(MainLayout, {
      content: (<StoryFull _title={params._title} />)
    })
  }
});
