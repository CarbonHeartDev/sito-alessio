import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"

import styles from "./Room.module.css"
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const Room = (props) => {

    return (
        <div className={styles.room}>
            <h1>{props.name}</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    {props.children}
                </div>
                <div className={styles.pics}>
                    <Gallery images={props.images} />
                </div>
            </div>
        </div>
    )
}

export default Room;