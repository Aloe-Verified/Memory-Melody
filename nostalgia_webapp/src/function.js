import React, { useState, useEffect } from 'react';
import { getToken, getGenres, getPlaylistByGenre, getTracks, getTrack } from './APIController';
import "./style.css";

function Test() {

    const [genres, setGenres] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedPlaylist, setSelectedPlaylist] = useState('');
    const [token, setToken] = useState('');

    const [ShowSpotify, setShowSpotify] = useState(true);

    const toggleSpotify = () => {
      setShowSpotify(!ShowSpotify);
    }

    useEffect(() => {
        async function loadGenres() {
            const token = await getToken();
            setToken(token);
            const genres = await getGenres(token);
            setGenres(genres);
        }

        loadGenres();
    }, []);

    const handleGenreChange = async (e) => {
        const genreId = e.target.value;
        setSelectedGenre(genreId);
        const playlist = await getPlaylistByGenre(token, genreId);
        setPlaylists(playlist);
    };

    const handlePlaylistChange = (e) => {
        setSelectedPlaylist(e.target.value);
        console.log(selectedPlaylist.id);
        console.log("Selected playlist:", e.target.value);
    };

    const handleFormSubmit = async (e) => {
        
        e.preventDefault();
        try{
        console.log("Fetching tracks for playlist:", selectedPlaylist); 
        const tracks = await getTracks(token, selectedPlaylist);
        console.log("Fetched tracks:", tracks);
        setTracks(tracks);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }

    };

    const handleTrackClick = async (trackEndpoint) => {
        const track = await getTrack(token, trackEndpoint);
        // Process track data as needed
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                {/* Genre Select */}
                <div className="genre"> 
                  <div className='col-sm-6 form-group row mt-4 px-0' id={ShowSpotify ? "open" : "close"}>
                      <label htmlFor='Genre' className='form-label col-sm-2'>Genre:</label>
                      <select id='select_genre' className='form-control form-control-sm col-sm-10' onChange={handleGenreChange}>
                          {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                      </select>
                  </div>
                </div>
                

                {/* Playlist Select */}
                <div className="playlist">
                  <div className='col-sm-6 form-group row px-0' id={ShowSpotify ? "open" : "close"}>
                      <label htmlFor='Playlist' className='form-label col-sm-2'>Playlists:</label>
                      <select id='select_playlist' className='form-control form-control-sm col-sm-10' onChange={handlePlaylistChange}>
                          {playlists.map(playlist => <option key={playlist.id} value={playlist.tracks.href}>{playlist.name}</option>)}
                      </select>
                  </div>
                </div>
                

                {/* Submit Button */}
                <div className="submitButton">
                  <div className='col-sm-6 row form-group px-0' id={ShowSpotify ? "open" : "close"}>
                      <button type='submit' id='btn_submit' className='btn btn-success col-sm-12' onClick={toggleSpotify}>Search</button>
                  </div>
                </div>
                
                
                
                <div className="iframe">
                <iframe title="Spotify Embed: Recommendation Playlist" id={ShowSpotify ? "open" : "close"}
    
    src={`https://open.spotify.com/embed/playlist/37i9dQZF1DX3Sp0P28SIer?utm_source=generator&theme=0`}
    width="100%"
    height="100%"
    style={{ minHeight: '200px', minWidth: "1190px" }}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>
                </div>
                
            </form>
            

            {/* Tracks List */}
            <div className='row'>
                <div className='col-sm-6 px-0'>
                    <div className='list-group song-list'>
                        {tracks.map(track => (
                            <a href="#" key={track.id} className="list-group-item list-group-item-action list-group-item-light" onClick={() => handleTrackClick(track.href)}>{track.name}</a>
                        ))}
                    </div>
                </div>
                {/* Additional details can be displayed here */}
            </div>
        </div>
    );
}

export default Test;