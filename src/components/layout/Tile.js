import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ link, text, i }) => {

    const verticalArray = ["is-vertical", ""];
    const choosedVertical = verticalArray[Math.floor(Math.random() * verticalArray.length)];

    const horizontalArray = ["is-4", "is-8", "is-12"];
    const choosedHorizontal = horizontalArray[Math.floor(Math.random() * horizontalArray.length)];

    const notificationColors = ["is-primary", "is-link", "is-info", "is-success", "is-warning", "is-danger"];
    const choosedNotificationColor = notificationColors[Math.floor(Math.random() * notificationColors.length)];

    let number = choosedHorizontal.replace(/^\D+/g, '');
    let newHorizontal = number === 12 ? `is-${number}` : `is-${12 - number}`

    return (


        <div className={`tile ${newHorizontal} is-parent column is-inline-block`}>
            <div className={`tile is-child ${choosedVertical}`}>
                <article className={`tile is-child notification ${choosedNotificationColor}`}>
                    <p className="title" key={i}><Link to={`${link}`}>{text}</Link></p>
                </article>
            </div>
        </div>

    )
}

export default Tile
