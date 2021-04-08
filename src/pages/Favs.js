import React from 'react'

import { FavsWithQuery } from '../Container/GetFavorites'
import { Layout } from '../Components/Layout'

export default () => (
  <Layout title='Tus Favoritos' subTitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
