export default function() {
  this.urlPrefix = 'http://localhost:8081';
  this.namespace = 'api';

  this.get('/artists');
  this.get('/artists/:id');
  this.post('/artists');
  this.put('/artists/:id');
  this.delete('/artists/:id');

  this.get('/albums', (schema) => {
    var albums = schema.albums.all();
    var artists = schema.artists.all();
    return {
      albums: albums.models,
      artists: artists.models
    };
  });
  this.get('/albums/:id', (schema, request) => {
      var album = schema.albums.find(request.params.id);
      return {
        album: album,
        artist: schema.artists.find(album.artist)
      };
  });

  this.post('/albums');
  this.put('/albums/:id');
  this.delete('/albums/:id');

  this.get('/songs', (schema) => {
    var songs = schema.songs.all();
    var albums = schema.albums.all();
    return {
      songs: songs.models,
      albums: albums.models
    };
  });
  this.get('/songs/:id', (schema, request) => {
      var song = schema.songs.find(request.params.id);
      return {
        song: song,
        album: schema.albums.find(song.album)
      };
  });
  this.post('/songs');
  this.put('/songs/:id');
  this.delete('/songs/:id');
}