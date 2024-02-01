import { Child } from './Child'
import styles from './App.module.css'
export default function App() {
  return (
    <>
      <h1 className={`${styles.header} ${styles['header-lighter']}`}>
        App Div
      </h1>
      <Child />
    </>
  )
}
