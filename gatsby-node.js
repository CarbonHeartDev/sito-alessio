const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const InnTemplate = path.resolve('./src/templates/inn.js')
  const RoomTemplate = path.resolve('./src/templates/room.js')
  const FreePageTemplate = path.resolve('./src/templates/freePage.js')
  const res = await graphql(`
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
    allContentfulRoom {
      nodes {
        name
        slug
        description {
          description
        }
        images {
          localFile {
            relativePath
          }
        }
        inn {
          slug
        }
      }
    }
    allContentfulPage {
      nodes {
        title
        slug
      }
    }
  }
  `)

  res.data.allContentfulInn.nodes.forEach((inn) => {
    createPage({
      component: InnTemplate,
      path: `/inns/${inn.slug}`,
      context: {
        slug: inn.slug
      }
    });
  });

  res.data.allContentfulRoom.nodes.forEach((room) => {
    createPage({
      component: RoomTemplate,
      path: (room.inn) ? `/inns/${room.inn.slug}/rooms/${room.slug}` : `/apartments/${room.slug}`,
      context: {
        slug: room.slug
      }
    });
  });

  res.data.allContentfulPage.nodes.forEach((freePage) => {
    console.log("Test:")
    console.log(freePage)
    createPage({
      component: FreePageTemplate,
      path: `/${freePage.slug}`,
      context: {
        slug: freePage.slug
      }
    });
  })

}