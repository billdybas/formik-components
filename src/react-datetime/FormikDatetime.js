import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'

class FormikDatetime extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    input: PropTypes.shape({ // TODO: Naming conflict
      value: PropTypes.any,
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
      <Datetime
        {...rest}
        // Required props
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={input.value}
      />
    )
  }
}

export default FormikDatetime
