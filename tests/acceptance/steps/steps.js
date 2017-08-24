import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I visit page "$uri"', function(uri, next) {
      server.createList('artist', 1);
      server.createList('album', 1, { artist: 1});
      server.createList('song', 1, { album: 1});
      
      visit(uri);
      assert.ok(true, this.step);
      andThen(() => next());  
    })
    .when('I visit page "$uri"', function(uri, next) {
      visit(uri);
      assert.ok(true, this.step);
      andThen(() => next());  
    })
    .then('I will be in page "$uri"', function(uri, next) {
      assert.equal(currentURL(), uri);
      next();
    });
}
