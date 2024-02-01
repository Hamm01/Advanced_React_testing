## How to Write CSS Modules.

When we need to write to css more towards indivual componentized way
then we can choose the Module Css way to import the css

here below

import styles from './App.module.css'

and this styles.header class will be used in App component

2.  we can differnt class using this
    we have a class name header-lighter in App.module.css . so we can use below

<h1 className={`${styles.header} ${styles['header-lighter']}`}>

or we can make class name headerLighter in App.module.css and then use

<h1 className={`${styles.header} ${styles.headerLighter}`}>

Both above are same
