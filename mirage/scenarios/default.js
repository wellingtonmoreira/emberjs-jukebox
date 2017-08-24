export default function(server) {
	server.createList('artist', 10);
	server.createList('album', 10, { artist: server.db.artists[0].id});
	server.createList('song', 10, { album: server.db.albums[0].id});
}
