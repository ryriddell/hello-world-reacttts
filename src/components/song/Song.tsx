import React from 'react';
import { SongType } from './Song.types';

const Song = (props: SongProp) => {
    return (
        <li>
            {props.song.title} by { props.song.artist}. Votes: {props.song.votes} 
            <button onClick={props.voteFn}>Vote now</button>
        </li>
    )
};

type SongProp = {
    song: SongType,
    voteFn: () => void
}

export default Song;