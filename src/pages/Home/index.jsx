import Carousel from '../../components/Carrossel/Carousel'

import { productImages } from '../../assets/'
import styles from './Home.module.css'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <Header />
        <Carousel images={productImages}/>
    </div>
  )
}

export default Home
