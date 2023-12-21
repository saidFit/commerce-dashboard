import React from 'react'
import { GridHome } from '../components/HomeCom/GridHome'
import { Header } from '../components/HomeCom/Header'
import { Main } from '../components/HomeCom/Main'
import { Product } from '../components/HomeCom/Product'
import { InfoTop } from '../components/InfoTop'

export const Home = () => {
  return (
    <div className='Home'>
       <Header/>
       <Main/>
       <GridHome/>
       <Product/>
    </div>
  )
}
