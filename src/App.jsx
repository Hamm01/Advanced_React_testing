import { useRef } from 'react'
import { CustomInput } from './customInput'

export default function App() {
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

/*
 So we add ForwardRef there are some points to note
 1. when we want to pass a ref to custom Component. then we need to choose forward ref to pass that ref
 2. how to do.. like in our form there is custom Input component. which comes from external file customInput
 3. that file has innerComponent which has our Input field, that we want to use in our function, so how can we pass the ref to that
 input
 4. we need to choose forwardRef. we will do forwardRef(InnerFunction) than export that export const CustomInput .. wh
 5. which we can use in our form and pass any props like title, type etc and ref.
 6. important thing to not when creating the innerComponent, we need to pass the ref to input that we want to use , and that must
 be 2nd argument in that function after props
*/
