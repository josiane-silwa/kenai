import Brend from '../../components/Brend/index'
import styles from './Perfil.module.css'
import fig1 from '../../assets/img/avatar-1.png'
import fig2 from '../../assets/img/avatar-2.png'
import fig3 from '../../assets/img/avatar-3.png'

const Perfil = () => {
  return (
    <div className={styles.containerPerfil}>
      <Brend />
      <div className={styles.bodyContainer}>
        <h1>Bem-vindo de volta ao Kenai</h1>
        <h4>Quem está usando</h4>
        <div className={styles.avataresContainer}>
          <div className={styles.avatar}>
            <img src={fig1} alt="" />
            <span>Haissa Silva</span>
          </div>
          <div className={styles.avatar}>
            <img src={fig2} alt="" />
            <span>Matheus Ramos</span>
          </div>
          <div className={styles.avatar}>
            <img src={fig3} alt="" />
            <span>Viniciius Eiji</span>
          </div>
        </div>
        <div className={styles.buttonPerfil}>
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default Perfil
