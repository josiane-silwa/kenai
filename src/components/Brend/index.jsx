import React from 'react'
import styles from './Brend.module.css'

function index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.gradient}>Kenai</h1>
      <div className={styles.clock}>
        <span>10:43 PM</span>
      </div>
    </div>
  )
}

export default index
