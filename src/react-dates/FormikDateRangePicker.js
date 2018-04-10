import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import { START_DATE, END_DATE } from 'react-dates/constants'

// See: https://github.com/airbnb/react-dates#daterangepicker
class FormikDateRangePicker extends Component {
  static propTypes = {
    startDateField: PropTypes.shape({
      field: PropTypes.string.isRequired,
      input: PropTypes.shape({
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired, // setFieldValue
        onBlur: PropTypes.func.isRequired // setFieldTouched
      }).isRequired
    }).isRequired,
    endDateField: PropTypes.shape({
      field: PropTypes.string.isRequired,
      input: PropTypes.shape({
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired, // setFieldValue
        onBlur: PropTypes.func.isRequired // setFieldTouched
      }).isRequired
    }).isRequired
  }

  state = {
    focusedInput: null
  }

  handleChange = values => {
    const { startDateField, endDateField } = this.props
    startDateField.input.onChange(startDateField.field, values.startDate)
    endDateField.input.onChange(endDateField.field, values.endDate)
  }

  handleFocus = focusedInput => {
    const { startDateField, endDateField } = this.props
    // Set the focused input
    this.setState({ focusedInput })
    // Blur when both inputs have been blurred
    switch (focusedInput) {
      case START_DATE:
      case END_DATE:
        break
      default:
        // 'null' when unfocused
        startDateField.input.onBlur(startDateField.field, true)
        endDateField.input.onBlur(endDateField.field, true)
    }
  }

  render () {
    const { startDateField, endDateField, ...rest } = this.props

    return (
      <DateRangePicker
        {...rest}
        // Required props
        endDate={endDateField.input.value}
        endDateId={endDateField.field}
        focusedInput={this.state.focusedInput}
        onDatesChange={this.handleChange}
        onFocusChange={this.handleFocus}
        startDate={startDateField.input.value}
        startDateId={startDateField.field}
      />
    )
  }
}

export default FormikDateRangePicker
