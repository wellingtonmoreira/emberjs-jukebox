/* global server*/
import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I visit page "$uri"', function(uri, next) {
      var expectedArtist = { 
        artistName: 'Kenny Rogers', 
        imageUrl: 'http://imgurl.co/kenny'
      };
      var expectAlbum = {
        artist: 1,
        albumName: 'Gates of Fried Chicken of Hell',
        imageUrl: 'http://image.massacration.com'
      };
      var expectedSong = {
        album: 1,
        songTitle: 'Plush'
      };

      server.createList('artist', 1, expectedArtist);
      server.createList('album', 1, expectAlbum);
      server.createList('song', 1, expectedSong);

      visit(uri);
      assert.ok(true, this.step);
      andThen(() => next());  
    })
    .when('I visit page "$uri"', function(uri, next) {
      visit(uri);
      assert.ok(true, this.step);
      andThen(() => next());  
    })
    .define('I will be in page "$uri"', function(uri, next) {
      assert.equal(currentURL(), uri);
      next();
    })
    .define('the element "$element" exists', function(element, next) {
      assert.equal(find(element).length, 1, 'Element must exist');
      next();
    })
    .define('I click on "$element"', function(element, next) {
      click(element)
      assert.ok(true, this.step);
      andThen(() => next());  
    })
    .define('the element "$element" should appear "$n" times', function(element, n, next) {
      assert.equal(find(element).length, n, 'Field appearances must be exact');
      next();
    })
    .define('the field "$fieldId" is filled with "$value"', function(fieldId, value, next) {
      assert.equal(find(fieldId).length, 1, 'Field must exist');
      assert.equal(find(fieldId)[0].value, value, 'Value must be equal');
      next();
    })
    .define('I fill the field "$fieldId" with "$value"', function(fieldId, value, next) {
      fillIn(fieldId, value);
      assert.ok(true, this.step);
      next();
    });
}
