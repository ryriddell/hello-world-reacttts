import React, { useState } from 'react';
import { SongType } from './Song.types';
import Song from './Song';

const SongList = ({songListInput}: {songListInput: SongType[]}) => {
    const [visible, setVisible] = useState<boolean>(true);
    const [listOfSongs, setListOfSongs] = useState(songListInput);
  
    const voteForSong = (songIndex: number): void => {
        let thisSongList = [...listOfSongs];
        thisSongList[songIndex].votes = thisSongList[songIndex].votes+1;
        setListOfSongs(thisSongList);
    };

    const displayList: JSX.Element[] = songListInput.map((song: SongType, index) => {
        return <Song song={song} voteFn={() => voteForSong(index)} key={index}/>
    });

    const updateVisible = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={updateVisible}>{visible ? 'Hide Songs' : 'Show Songs'}</button> 
            {visible 
                ? 
                    <ul>
                        {displayList}
                    </ul>
                :
                    <p>
                        Songs are hidden
                    </p>
            }
        </div>
    );
};

export default SongList;