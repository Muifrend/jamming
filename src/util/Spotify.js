const redirectURI = 'http://localhost:3000/'
const client_ID = '760f1584f7ad4f29bf8412c65035faa7'
let accessToken = ''

const Spotify = {
    getAccessToken() {
        let url = window.location;
        if(accessToken) {
            return accessToken
        } else {
            accessToken = window.href.match(/access_token=([^&]*)/)[0]
        }
        if((url.href.match(/access_token=([^&]*)/)) && (url.href.match(/expires_in=([^&]*)/))) {
            accessToken = url.href.match(/access_token=([^&]*)/)[0]
            let expirationTime = url.href.match(/expires_in=([^&]*)/)[0]
            setTimeout(() => {accessToken = ''}, expirationTime*1000)
            window.history.pushState('Access Token', null, '/');
        }
        if((!accessToken)&&(!url.href.match(accessToken))) {
            url = `https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    }
}

export default Spotify