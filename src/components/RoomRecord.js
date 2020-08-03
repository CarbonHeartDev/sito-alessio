import React from "react"
import { navigate } from "gatsby"
import Img from 'gatsby-image'

import styles from "./RoomRecord.module.css"

const internalNavigationHandler = (target, e) => {
    if (!e.key || e.key === "Enter") {
        e.preventDefault();
        navigate(target);
    }
}

export default function RoomRecord(props) {
    return (
        <div className={styles.room}
            onClick={(e) => internalNavigationHandler(props.internalLink, e)}
            onKeyDown={(e) => internalNavigationHandler(props.internalLink, e)}
            role="row"
            tabIndex={props.tabIndex}>
            <div className={styles.texts}>
                <div className={styles.title}>{props.name}</div>
                <div className={styles.description}>{props.children}</div>
            </div>
            <div className={styles.image}>
                <Img fixed={props.gatsbyImg}></Img>
            </div>
        </div>
    )
}
