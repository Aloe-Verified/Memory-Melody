// APIController.js
const clientId = '7a2aa6b064cf47048161dcf349a8694d';
const clientSecret = '54e6227f9ffb4203bf39e5a6fdeb0bef';

const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token;
}

const getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    return data.categories.items;
}
const getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const data = await result.json();
    return data.playlists.items;
}
const getTracks = async (token, tracksEndPoint) => {
    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const data = await result.json();
    return data.items;
}
const getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const data = await result.json();
    return data;
}

// ...other methods like getPlaylistByGenre, getTracks, getTrack

export { getToken, getGenres, getPlaylistByGenre, getTracks, getTrack };