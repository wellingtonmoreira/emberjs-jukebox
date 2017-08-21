import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('edit');
  });
  this.route('albums');
  this.route('songs');
});

export default Router;
