import React from 'react';

const player = ( props ) => {
    return (
        <div className="Player">
            <button>Challenge Spelling</button>
            <button>Word Completed</button>
            <div></div>
            <input
		        type="text"
		        maxlength="1"
		        onkeypress="return"
		        onChange={props.changed}
           />
        </div>
    )
};

export default player;