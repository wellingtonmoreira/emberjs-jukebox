export default function() {
  this.urlPrefix = 'http://localhost:8081';
  this.namespace = 'api';

  this.get('/artists');
  this.post('/artists');
  this.get('/artists/:id');
  this.put('/artists/:id');
  this.delete('/artists/:id');

  this.get('/albums', (schema, request) => {
    var albums = schema.albums.all();
    var artists = schema.artists.all();
    return {
      albums : albums.models,
      artists: artists.models
    };
  });

  this.post('/albums');  
  this.get('/albums/:id');
  this.put('/albums/:id');
  this.delete('/albums/:id');

  this.get('/songs', (schema, request) => {
    var songs = schema.songs.all();
    var albums = schema.albums.all();
    return {
      songs: songs.models,
      albums : albums.models
    };
  });

  this.post('/songs');  
  this.get('/songs/:id');
  this.put('/songs/:id');
  this.delete('/songs/:id');
}
