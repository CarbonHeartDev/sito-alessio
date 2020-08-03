import React from "react"

import Button from "./Button"

import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.text}>
                <span className={styles.subtitle}>{props.subtitle}</span>
                <span className={styles.title}>{props.title}</span>
            </div>
            <gatsby-image className={styles.pic} src="https://source.unsplash.com/random/600x300" alt="" />
            <p className={styles.description}>{props.children}</p>
            <Button internalLink={props.internalLink} tabIndex={props.tabIndex} text="scopri"></Button>
        </div>
    )
}
