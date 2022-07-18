import React from 'react';
import Link from 'next/link';
import styles from '../styles/nav.module.css'

export default function Nav() {
  return (
      <nav className={styles.nav}>
          <ul className={styles.list}>
              <li className={styles.item}>
                  <Link href="/">
                      <a>Home</a>
                  </Link>
              </li>
              <li>
                  <Link href="/add-post">
                      <a>Add post</a>
                  </Link>
              </li>
          </ul>
      </nav>
  );
}