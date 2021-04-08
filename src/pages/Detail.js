import React from 'react'
import { Layout } from '../Components/Layout'
import { PhotoCardWithQuery } from '../Container/PhotoCardWithQuery'

export default ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
