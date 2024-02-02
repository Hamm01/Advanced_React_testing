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
  age: PropTypes.number
}

export default Component
