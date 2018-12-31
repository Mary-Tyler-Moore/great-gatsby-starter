module.exports = {
  siteMetadata: {
    title: `Great Gatsby Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`
      }
    }
  ]
};
