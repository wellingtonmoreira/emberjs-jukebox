import Ember from 'ember';

export default Ember.Component.extend({
  items: [
    { title: 'Artists', route: 'artists' },
    { title: 'Albums', route: 'albums' },
    { title: 'Songs', route: 'songs' }
  ]
});
