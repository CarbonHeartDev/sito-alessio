import React from "react"

import Room from "../components/Room"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
contentfulRoom(slug: { eq: $slug }) {
    name
    description {
      description
    }
    images {
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
`

const RoomTemplate = (props) => {
  const images = props.data.contentfulRoom.images.map((node) => node.localFile.childImageSharp);

  return (
    <Layout>
      <Room name={props.data.contentfulRoom.name} images={images}>
        {props.data.contentfulRoom.description.description}
      </Room>
    </Layout>
  )
}

export default RoomTemplate