export default function() {
  this.urlPrefix = 'http://localhost:8081';
  this.namespace = 'api';

  this.get('/artists');
  this.post('/artists');
  this.get('/artists/:id');
  this.put('/artists/:id');
  this.delete('/artists/:id');

  this.get('/albums');

  this.post('/albums');  
  this.get('/albums/:id');
  this.put('/albums/:id');
  this.delete('/albums/:id');

  this.get('/songs');
  this.post('/songs');  
  this.get('/songs/:id');
  this.put('/songs/:id');
  this.delete('/songs/:id');
}
