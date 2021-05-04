import React, { useState } from 'react';
import cx from 'classnames';

const LikeButtonSFC = () => {
    const [counter, setCounter] = useState(100);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log("first", clicked);
        if (!clicked) {
            setClicked(true)
            setCounter(counter + 1);
        } else {
            setClicked(false)
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div>
                <button
                    class={cx(clicked ? 'liked' : '', 'like-button')}
                    onClick={handleClick}>Like | <span class="likes-counter">{counter}</span>
                </button>
            </div>
            <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .likes-counter {
                       color: black;
                   }
                `}
            </style>
        </>
    );
}

export default LikeButtonSFC;