import { forwardRef } from 'react'

function InnerFunction(props, ref) {
  return (
    <input
      {...props}
      ref={ref}
      style={{ border: '2px solid green' }}
      type="text"
    />
  )
}

export const CustomInput = forwardRef(InnerFunction)
