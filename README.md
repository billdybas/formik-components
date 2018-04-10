# formik-components

Formik Wrappers for 3rd Party Components

## Why?

[Formik](https://github.com/jaredpalmer/formik) makes building React forms painless. 👍

However, if you want to use it with 3rd party form components (eg. a fancy date picker), you need to make sure [event handlers are hooked up correctly](https://github.com/jaredpalmer/formik#why-use-setfieldvalue-instead-of-handlechange). That becomes tedious when multiple projects use the same 3rd party components w/ Formik.

This project includes Formik wrappers for several popular 3rd party components to act as drop-in replacements in Formik forms.

## Supported Components

- [react-dates](https://github.com/airbnb/react-dates)
- [react-datetime](https://github.com/YouCanBookMe/react-datetime)
- [react-select](https://github.com/JedWatson/react-select)

## Conventions

Wrapped components generally require a `field` prop and an `input` prop.

The `field` prop must be equivalent to the `name` attribute on the field to match up with the Formik state.

The `input` prop is an object that contains `value`, `onChange`, and `onBlur`:
- `value` must be provided the field's value from Formik's [`values`](https://github.com/jaredpalmer/formik#values--field-string-any-)
- `onChange` must be provided Formik's [`setFieldValue`](https://github.com/jaredpalmer/formik#setfieldvalue-field-string-value-any-shouldvalidate-boolean--void)
- `onBlur` must be provided Formik's [`setFieldTouched`](https://github.com/jaredpalmer/formik#setfieldtouched-field-string-istouched-boolean-shouldvalidate-boolean--void)

All other props passed to these components are passed through to the 3rd party component, so you can still customize it to your liking.

## Contributing

Do you want a Formik wrapper for another component library? Have you written a Formik wrapper for another component library? Consider making an [issue](https://github.com/billdybas/formik-components/issues) or submitting a [pull request](https://github.com/billdybas/formik-components/pulls). Your contributions are greatly appreciated! ❤️

## License

See `LICENSE`
