import PropTypes from 'prop-types'
function Component({ name, age }) {
  return (
    <>
      <h1>
        In 5 years {name} will be {age + 5}
      </h1>
    </>
  )
}

Component.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// All the propType properties are optional by default, we need to explicitly write isRequired tag if something must be need to pass
// in props
export default Component
