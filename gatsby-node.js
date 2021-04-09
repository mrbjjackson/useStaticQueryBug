const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allDataJson {
        nodes {
          activities {
            nodes {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allDataJson.nodes[0].activities.nodes.forEach(node => {
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