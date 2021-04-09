import { useStaticQuery, graphql } from "gatsby"

export const useActivities = ( count=50 ) => {
  const data = useStaticQuery(graphql`
  query ActivityDataQuerys {
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
  `)
  console.log('from useActivities', data)
  return data.allDataJson.nodes0[0].nodes
}
