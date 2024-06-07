function make_album (artist_name: String, album_title: string, tracks?: number){
let album : {artist: String, title: string, tracks?: number} = {
artist: artist_name,
title: album_title,
};

if(tracks !== undefined){
    album.tracks = tracks;
}
return album;
}

let album1 = make_album("Hamza", "album title no 1");

let album2 = make_album("usman", "album title no 2");

let album3 = make_album("Ali", "album title no 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);