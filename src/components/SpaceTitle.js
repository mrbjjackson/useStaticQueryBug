import React from 'react'

export const prependSpaceTitle = (title, prepend=false, capitalize=false) => {
  return prepend ? (capitalize ? `The ${title}` : `the ${title}` ) : title
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function SpaceTitle({title, prepend=false, capitalize=false}) {
  return (
    <>
      {prependSpaceTitle(title, prepend, capitalize)}
    </>
  )
}
