import { useStaticQuery, graphql } from "gatsby"

export const useActivities = ( count=50 ) => {
  const data = useStaticQuery(graphql`
  query ActivityDataQuerys {
    allWpActivity {
      nodes {
        title
        link
      }
    }
  }
  `)
  console.log('from useActivities', data)
  return data.allWpActivity.nodes.splice(0, count)
}
