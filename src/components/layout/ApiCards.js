import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NasaContext from "../context/nasa/nasaContext";
const ApiCards = () => {
    const nasaContext = useContext(NasaContext);
    const {links} = nasaContext;

    return (
        <div className={'columns is-multiline mt-5'}>
            {links.map((link, key) =>
                <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }} className={'card column is-3'} whileHover={{ scale: 1.2 }} key={key}>
                    <Link to={link.link} className={'title'}>
                        <div className="card-content" >{link.text}</div>
                    </Link>
                </motion.div>

            )}

        </div>
    )
}

export default ApiCards
