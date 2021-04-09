module.exports = {
  siteMetadata: {
    title: `St Agnes MMI`,
    description: `The Miners and Mechanics' Institute. For the benefit of all in our community`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stagnes-mmi`,
        short_name: `mmi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `http://mmi.local/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          // "G-MWJF0F3B7Q", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          'c_mf6c5cnot5l5il6gp6pmjskd40@group.calendar.google.com', // MMI
          'c_095fq4p07q7iekcc1ajhi8qouk@group.calendar.google.com', // 1-2-1 Room
          'c_u2cjkl19t0b9e3c3qnvdgd6mek@group.calendar.google.com', // Passmore Room
          'c_qmsgchk1nkr8sr2sbov54r2304@group.calendar.google.com', // Studio 1
          'c_e8l4405j53d0ointlvcjinmlgs@group.calendar.google.com', // Studio 2
          'c_3t8o8172qh71kjh4pl9onugn5g@group.calendar.google.com', // Dance Hall
          'c_7dfeeua6jq95fpvg5iocic6k5s@group.calendar.google.com', // Bar / Café
          'c_4hqgtqia4d3iandb9i2acr8s24@group.calendar.google.com', // Kitchen
          'c_j7434odu4mt4uefj3ab7f32lec@group.calendar.google.com', // De Pace Room
          'c_femsddo0f6ndoah97nnag68jco@group.calendar.google.com', // Enys Room
        ],
        // options to retrieve the next 10 upcoming events
        timeMin: (new Date()).toISOString(),
        maxResults: 100,
        singleEvents: true,
        orderBy: 'startTime',
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
