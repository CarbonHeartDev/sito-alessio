import React from "react"
import { navigate } from "gatsby"

import styles from "./Button.module.css"

const internalNavigationHandler = (target, e) => {
    if (!e.key || e.key === "Enter") {
        e.preventDefault();
        navigate(target);
    }
}

const Button = (props) => {
    return (
        <div className={styles.button}
            onClick={(e) => internalNavigationHandler(props.internalLink, e)}
            onKeyDown={(e) => internalNavigationHandler(props.internalLink, e)}
            role="button"
            tabIndex={props.tabIndex}
        >{props.text}</div>
    )
}

export default Button