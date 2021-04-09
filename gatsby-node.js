const { notDeepEqual } = require("assert")
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpActivity {
        nodes {
          status
          slug
          link
          id
          title
        }
      }
      allWpSpace {
        nodes {
          slug
          id
          spaceMetadata {
            showOnSite
            calendarId
          }
          status
        }
      }
    }
  `).then(result => {

    result.data.allWpActivity.nodes.forEach(node => {
      if(node.status==='publish') {
        createPage({
          path: `activities/${node.slug}`,
          component: path.resolve(`./src/templates/activityTemplate.js`),
          context: {
            id: node.id
          },
        })
      }
    })

    result.data.allWpSpace.nodes.forEach(node => {
      if(node.status==='publish' && node.spaceMetadata.showOnSite === true) {
        const calendarId = node.spaceMetadata.calendarId || null

        createPage({
          path: `spaces/${node.slug}`,
          component: path.resolve(`./src/templates/spaceTemplate.js`),
          context: {
            id: node.id,
            calendarId: calendarId
          },
        })
      }
    })

  })
}