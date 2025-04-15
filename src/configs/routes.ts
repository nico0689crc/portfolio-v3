const routes = {
  pages: {
    public: {
      home: '/',
      auth: {
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        resetPassword: '/reset-password',
      }
    },
    authenticated: {
      dashboard: '/dashboard',
    },
  },
}

export default routes