const redirectURI = 'http://localhost:3000/'
const clientID = '760f1584f7ad4f29bf8412c65035faa7'
let accessToken 

export const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access Token match 

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&])*/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // This clears the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(() => accessToken = "", expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            let accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
         //                   "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID+ "&response_type=token&scope=playlist-modify-public&redirect_uri=" + REDIRECT_URI"
            window.location = accessURL;
        }
    },
    async search(term) {
        let accessToken = this.getAccessToken()
        let headers = {Authorization: `Bearer ${accessToken}`}
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
            headers: headers
          })
        let jsonResponse = await response.json()
        
        
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        }));
             
    },
    async savePlaylist(playlistName,arrURI) {
        let access_token = this.getAccessToken()
        let headers = {Authorization: `Bearer ${access_token}`}
        let userID 
        let playlistID
        if(!playlistName || !arrURI) {
            return
        } 
        const response = await fetch('https://api.spotify.com/v1/me', {headers: headers})
        userID = await response.json.id
        const res = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name: playlistName})
        })
        playlistID = await res.json.id
        const resp = await fetch(`https://api.spotify.com/v1//v1/users/${userID}/playlists/${playlistID}/tracks`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: arrURI})
            }
        )
        playlistID = resp.json.id
    }
}
