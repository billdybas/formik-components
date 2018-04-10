import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'react-select'

class FormikSelect extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    input: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string
        }),
        PropTypes.arrayOf(
          // If 'multi' select
          PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
          })
        ),
        PropTypes.string // '' when empty
      ]),
      onChange: PropTypes.func.isRequired, // setFieldValue
      onBlur: PropTypes.func.isRequired // setFieldTouched
    }).isRequired
  }

  handleChange = value => {
    this.props.input.onChange(this.props.field, value)
  }

  handleBlur = () => {
    this.props.input.onBlur(this.props.field, true)
  }

  render () {
    const { input, field, ...rest } = this.props

    return (
      <Select
        {...rest}
        // Required props
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={input.value}
      />
    )
  }
}

export default FormikSelect
