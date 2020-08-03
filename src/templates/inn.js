import React from "react"

import RoomRecord from "../components/RoomRecord"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulInn(slug: { eq: $slug }){
    name
    slug
    room {
      name
      slug
      shortDescription {
          shortDescription
      }
      images{
        localFile{
          childImageSharp {
            fixed(width:300, height: 179, fit:CONTAIN) {
            ...GatsbyImageSharpFixed
            }
        }
      }
    }
  }
}
  }
`

const InnTemplate = (props) => {

  return (
    <Layout>
      {
        props.data.contentfulInn.room.map((room, i) => <RoomRecord key={i} gatsbyImg={props.data.contentfulInn.room[i].images[0].localFile.childImageSharp.fixed} name={room.name} internalLink={`/inns/${props.data.contentfulInn.slug}/rooms/${room.slug}`}>{room.shortDescription.shortDescription}</RoomRecord>)
      }
    </Layout>
  )
}

export default InnTemplate