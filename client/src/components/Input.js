import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <div className='form-group p-2'>
      <input className='form-control' type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
Input.defaultProps = {
  type: 'text',
  onChange: () => {}
}
