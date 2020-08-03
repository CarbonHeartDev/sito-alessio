import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from "@browniebroke/gatsby-image-gallery"

import Layout from '../components/Layout'
import styles from './products.module.css'
import '../styles/global.css'

const Products = () => {

  const data =

    useStaticQuery(graphql`query {
  allContentfulProduct(sort: { fields: highlight, order: DESC }) {
    nodes {
      name
      image {
        localFile {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata 
    {
      productsTitle
    }
}
}
`);

  const images = data.allContentfulProduct.nodes.map((node) => node.image.localFile.childImageSharp);

  return (
    <Layout>
      <div className={styles.products}>
        <h1>{data.site.siteMetadata.productsTitle}</h1>
        <div className={styles.gallery}>
          <Gallery images={images}></Gallery>
        </div>
      </div>
    </Layout>
  )
}

export default Products