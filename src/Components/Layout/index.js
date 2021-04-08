import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'

export const Layout = ({ children, title, subTitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subTitle && <meta name='description' content={subTitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
