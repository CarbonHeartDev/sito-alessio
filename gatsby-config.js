/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        phoneNumber: '1234567890',
        emailAddress: 'demo@demo.com',
        innSubtitle: 'B&B',
        apartmentSubtitle: 'Appartamento',
        productsTitle: 'I Nostri Prodotti',
        productsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus suscipit augue, at vulputate dui rhoncus vitae. Aliquam posuere purus quis condimentum eleifend. Morbi ultricies elit id quam ullamcorper, in ullamcorper ex commodo.'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
                downloadLocal: true
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/assets/`
            }
        }
    ],
}