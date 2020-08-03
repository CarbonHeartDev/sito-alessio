import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Card from '../components/Card'
import Layout from '../components/Layout'

import styles from './index.module.css'
import '../styles/global.css'
import '../assets/fontello-6d84545c/css/arrow-embedded.css'



const Home = () => {

  const data = useStaticQuery(
    graphql`
query {
  allContentfulInn {
    nodes {
      name
      slug
      shortDescription {
        shortDescription
      }
    }
  }
    allContentfulRoom(filter: {inn: {name: {eq: null}}}) {
    nodes {
      name
      slug
      shortDescription {
        shortDescription
      }
      inn {
        name
      }
    }
  }
  allContentfulPage {
    nodes {
      title
      slug
      contentPreview {
        contentPreview
      }
    }
  }
  site {
    siteMetadata 
    {
      innSubtitle
      apartmentSubtitle
      productsTitle
      productsDescription
    }
  }
}
`)

  return (
    <Layout>
      <div className={styles.sections}>
        {
          data.allContentfulInn.nodes.map((inn, i) => <Card key={i} tabIndex={i} title={data.site.siteMetadata.innSubtitle} subtitle={inn.name} internalLink={`/inns/${inn.slug}`}>{inn.shortDescription.shortDescription}</Card>)
        }
        {
          data.allContentfulRoom.nodes.map((apartment, i) => <Card key={i} tabIndex={i} title={data.site.siteMetadata.apartmentSubtitle} subtitle={apartment.name} internalLink={`/apartments/${apartment.slug}`}>{apartment.shortDescription.shortDescription}</Card>)
        }
        {
          data.allContentfulPage.nodes.map((page, i) => <Card key={i} tabIndex={i} title={page.title} internalLink={`/${page.slug}`}>{page.contentPreview.contentPreview}</Card>)
        }

        <Card title={data.site.siteMetadata.productsTitle} subtitle="" internalLink="/products">{data.site.siteMetadata.productsDescription}</Card>
      </div>
      <div className="footer"></div>
    </Layout>
  )
}

export default Home