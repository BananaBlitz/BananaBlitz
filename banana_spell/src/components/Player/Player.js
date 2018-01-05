import React from 'react';
import Avatar from '../Avatar/Avatar'
import './Player.css'

const player = ( props ) => {
    return (
        <div className="Player">
            <Avatar />
            <button>Challenge Spelling</button>
            <button>Word Completed</button>
            <div></div>
            <input
		        type="text"
		        maxlength="1"
		        onkeypress="return"
		        onChange={props.changed}
           />
           <div></div>
           <button>Submit</button>
        </div>
    )
};

export default player;