import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const GET_PHOTOS = gql` 
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <ul>
      {
        data.photos.map((photoCard, id) => (
          <PhotoCard key={id} id={id} {...photoCard} />
        ))
      }
    </ul>
  )
}
