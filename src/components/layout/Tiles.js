import React from 'react'
import Tile from './Tile';

const Tiles = (props) => {

    const { links } = props;

    return (
        <div>{links.map((link, key) =>
            <Tile link={link.link} text={link.text} key={key} />
        )}</div>
    )
}

export default Tiles
