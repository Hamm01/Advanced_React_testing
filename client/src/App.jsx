import { Child } from './Child'
import styled from 'styled-components'
export default function App() {
  const RedHone = styled.h1`
    color: red;
  `
  return (
    <>
      <RedHone>App Div </RedHone>
      <Child />
    </>
  )
}
