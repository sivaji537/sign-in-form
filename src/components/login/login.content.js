export const initialFormValues = {
    email: {
      value: '',
      error: false,
      helperText: '',
      required: true,
    },
    password: {
      value: '',
      error: false,
      helperText: '',
      required: true,
    }
  }

export const labelMap = {
    headers : {
        signIn : 'Sign in'
    },
    fields: {
        email: 'Email',
        password: 'Password',
        rememberMe: 'Remember Me?',
        signIn: 'Sign in'
    },
    links: {
        forgotPassword: 'Forgot your password?',
        signup: 'Sign up',
        resendEmail: 'Resend email confirmation'
    },
    generalText: {
       signup: 'Don\'t have an account?'
    }
}