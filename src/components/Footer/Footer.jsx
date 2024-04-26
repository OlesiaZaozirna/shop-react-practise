import React from 'react'
import { Link } from 'react-router-dom' 

import styles from "../../styles/Footer.module.css"
import LOGO from "../../images/logo.svg"
import { ROUTES } from "../../utils/routes"
import SPRITE from "../../images/sprite.svg"

const Footer = () =>(
    <section className={styles.footer}>
     <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                  <img src={LOGO} alt="Stuff" />
              </Link>
      </div>
      
      <div className={styles.rights}>
        Developed by Olesia Zaozirna as learning project
      </div>

      <div className={styles.socials}>

        <a htef="https://instagramm.com" target="_blank" rel="noreferrer">
          <svg className="icon">
             <use xlinkHref={`${SPRITE}#instagram`} />
          </svg>
        </a>

        <a htef="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
             <use xlinkHref={`${SPRITE}#facebook`} />
          </svg>
        </a>

        <a htef="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
             <use xlinkHref={`${SPRITE}#youtube`} />
          </svg>
        </a>

      </div>

    </section>
  )


export default Footer