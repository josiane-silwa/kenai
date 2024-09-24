import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import CarouselThumbs from "./CarouselThumbs"
import { productImages } from '../../assets/'
import './CarouselThumbs.css'

const index = () => {

  const larguraTela = window.innerWidth;
  larguraTela <= 600 
  ? console.log('celular',larguraTela) 
  : larguraTela <= 900 
  ? console.log('tablet',larguraTela) 
  : console.log('desktop',larguraTela)

  return (
        <div 
          style={{
            height: '100vh',
            paddingTop: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            ...(larguraTela <= 600 
                  ? { width: '400px', border: '1px solid red' } 
                  : larguraTela <= 912 
                  ? { width: '612px', border: '1px solid pink'}
                  :{ width: '912px'})
        }}>
          <div 
              style={{padding: '20px', 
                ...(larguraTela <=600 
                ? {
                    maxWidth: '400px',
                    backgroundColor: 'black'
                }
                : larguraTela <= 912 
                ? {
                  maxWidth: '600px',
                  backgroundColor: 'blue'
                } 
                : 
                {
                  width: '910px',
                  backgroundColor: 'red'
                })
              }}>
            <CarouselThumbs images={productImages}/>
          </div>
        </div>
  )
}

export default index
