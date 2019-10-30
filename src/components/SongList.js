import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: '1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', id: 1 },
        { title: '2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', id: 2 },
        { title: '3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', id: 3 }
    ])

    /**
     * add song function
     */
    const addSong = () => {
        setSongs([...songs, { title: 'new song', id:uuid() }])
    }

    return (
        <React.Fragment>
            <div className="song-list">
                <ul>
                    {songs.map(song => {
                        return (
                            <li key={song.id}> {song.title}</li>
                        )
                    })}
                </ul>
                <button onClick={addSong}>Add Song</button>

            </div>
        </React.Fragment>
    )
}

export default SongList;
