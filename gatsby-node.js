const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
  `
    {
      allDataJson {
        nodes {
          activities {
            nodes {
              id
              slug
            }
          } 
        }
      }
    }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const activityTemplate = path.resolve(`./src/templates/activityTemplate.js`)
  result.data.allDataJson.nodes[0].activities.nodes.forEach(node => {
    createPage({
      path: `activities/${node.slug}`,
      component: activityTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id
      },
    })
  })
}



// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     query AllActivities {
//       allDataJson {
//         nodes {
//           activities {
//             nodes {
//               id
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     console.log(result.data.allDataJson.nodes)

//     result.data.allDataJson.nodes[0].activities.nodes.forEach(node => {
//       createPage({
//         path: `activities/${node.slug}`,
//         component: path.resolve(`./src/templates/activityTemplate.js`),
//         context: {
//           id: node.id
//         },
//       })
//     })

//   })
// }