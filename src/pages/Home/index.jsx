import Carousel from '../../components/Carrossel/Carousel'

import { productImages } from '../../assets/'
import styles from './Home.module.css'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
        <Header />
        <Carousel images={productImages}/>
    </>
  )
}

export default Home
