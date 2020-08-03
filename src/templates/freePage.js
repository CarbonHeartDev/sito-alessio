import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

import styles from "./freePage.module.css"

export const query = graphql`
query($slug: String!) {
  contentfulPage(slug: { eq: $slug }) {
    title
    content {
      json
    }
  }
}
`

const InnTemplate = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.title}>{props.data.contentfulPage.title}</h1>
        <div className={styles.content}>
          {documentToReactComponents(props.data.contentfulPage.content.json, options)}
        </div>
      </div>
    </Layout>
  )
}

export default InnTemplate