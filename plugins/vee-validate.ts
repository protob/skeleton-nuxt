import { extend } from 'vee-validate'
import { required, email, numeric, max, alpha } from 'vee-validate/dist/rules'

// './vee-validate-rules.js';
extend('required', required)
extend('numeric', {
  ...numeric,
  message: 'Must be numeric',
})

extend('email', email)
extend('max', max)
extend('alpha', alpha)
