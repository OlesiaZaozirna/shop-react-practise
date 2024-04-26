import React from 'react'
import {Link} from "react-router-dom"

import styles from "../../styles/Header.module.css"

import { ROUTES } from '../../utils/routes'

import LOGO from "../../images/logo.svg"
import AVATAR from "../../images/avatar.jpg"
import SPRITE from "../../images/sprite.svg"



const Header = () => {
  return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                  <img src={LOGO} alt="Stuff" />
              </Link>
          </div>

          <div className={styles.info}>
              <div className={styles.user}>
                  <div
                      className={styles.avatar}
                      style={{ backgroundImage: `url(${AVATAR})` }}
                  />   
                   <div className={styles.user}>Guest</div>
              </div>

              <form className={styles.form}>
                  <div className={styles.icon}>
                      <svg className='icon'>
                          <use xlinkHref={`${SPRITE}#search`}  />
                      </svg>
                  </div>
                  <div className={styles.input}>
                      <input type="search"
                          name="search"
                          placeholder="Search for anuthing..."
                          autoComplete="off"
                          onChange={() => { }}
                          value="" />
                  </div>

                  {false&& <div className={styles.box}></div>}
              </form>

              <div className={styles.account}>
                  <Link to={ROUTES.HOME} className={styles.favourites}>
                      <svg className={styles["icon-fav"]}>
                          <use xlinkHref={`${SPRITE}#heart`} />
                      </svg>
                  </Link>

                  <Link to={ROUTES.CART} className={styles.cart}>
                      <svg className={styles["icon-cart"]}>
                          <use xlinkHref={`${SPRITE}#bag`} />
                      </svg>
                      <span className={styles.count}>0</span>
                  </Link>
              </div>
            </div>
        </div>
  )
}

export default Header