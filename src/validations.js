import { setInteractionMode, extend } from 'vee-validate'
import { required, email, min, alpha_num, max } from 'vee-validate/dist/rules'

setInteractionMode('eager')
extend('email', email)
extend('required', {
  ...required,
  message: '{_field_} is required',
})
extend('min', {
  ...min,
  message: (field, { length }) => {
    return `${field} must be at least ${length} characters`
  },
})
extend('max', {
  ...max,
  message: (field, { length }) => {
    return `${field} must not exceed ${length} characters`
  },
})

extend('alpha_num', {
  ...alpha_num,
  message: 'The {_field_} field may only contain alpha-numeric characters',
})
