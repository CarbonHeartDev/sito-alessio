import React from "react"
import { navigate, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./Layout.module.css"
import Icon from "../assets/logo.svg"

const Layout = (props) => {

    const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata 
    {
        phoneNumber
        emailAddress
    }
  }
}
  `)

    const navigationHandler = (target, e) => {
        if (!e.key || e.key === "Enter") {
            e.preventDefault();
            window.location.href = target;
        }
    }

    const homeButtonHandler = (e) => {
        if (!e.key || e.key === "Enter") {
            e.preventDefault();
            navigate("/");
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>B&B Nido delle Aquile</title>
            </Helmet>
            <div className={styles.navbar}>
                <img className={styles.logo} src={Icon} alt="Logo del sito"></img>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>Nido Delle Aquile</span>
                    <span className={styles.name}>B&B</span>
                </div>
            </div>
            <div className={styles.container}>
                {props.children}
            </div>
            <div className={styles.footer}>
                <div className={styles.contacts}>
                    <span className={[styles.contactElement, styles.phoneSection].join(' ')}
                        onClick={(e) => navigationHandler(`tel:${data.site.siteMetadata.phoneNumber}`, e)}
                        onKeyDown={(e) => navigationHandler(`tel:${data.site.siteMetadata.phoneNumber}`, e)}
                        role="button"
                        tabIndex={0}>
                        <span className="icon-phone"></span>
                        <span className={[styles.contactText, styles.phoneNumber].join(' ')}>
                            {data.site.siteMetadata.phoneNumber}
                        </span>
                    </span>
                    <span className={[styles.contactElement, styles.emailSection].join(' ')}
                        onClick={(e) => navigationHandler(`mailto:${data.site.siteMetadata.emailAddress}`, e)}
                        onKeyDown={(e) => navigationHandler(`mailto:${data.site.siteMetadata.emailAddress}`, e)}
                        role="button"
                        tabIndex={0}>
                        <span className="icon-mail-alt"></span>
                        <span className={[styles.contactText, styles.emailAddress].join(' ')}>
                            {data.site.siteMetadata.emailAddress}
                        </span>
                    </span>
                </div>
                <span className={styles.homeButton}
                    onClick={(e) => homeButtonHandler(e)}
                    onKeyDown={(e) => homeButtonHandler(e)}
                    role="button"
                    tabIndex={0}>
                    <span className="icon-home"></span>
                </span>
            </div>
        </>
    )
}

export default Layout
