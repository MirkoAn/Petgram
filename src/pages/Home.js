import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Components/ListOfPhotoCards'
import { Layout } from '../Components/Layout'

const HomePage = ({ id }) => (
  <Layout
    title='Petgram - Tu app de fotos de mascotas'
    subTitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
