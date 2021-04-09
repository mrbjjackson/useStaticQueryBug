const { notDeepEqual } = require("assert")
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpActivity {
        nodes {
          slug
          id
        }
      }
    }
  `).then(result => {

    result.data.allWpActivity.nodes.forEach(node => {
      createPage({
        path: `activities/${node.slug}`,
        component: path.resolve(`./src/templates/activityTemplate.js`),
        context: {
          id: node.id
        },
      })
    })

  })
}