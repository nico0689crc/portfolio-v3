const routes = {
  pages: {
    public: {
      home: '/',
      aboutMe: '/about-me',
      resume: '/resume',  
      portfolio: '/portfolio',  
      contact: '/contact',  
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

export const apiRoutes = {
  auth: {
    login: 'auth/login',
  },
  socialLinks: 'social-links',
  pages: {
    default: {
      metadata: 'pages/default/metadata',
    },
    home: {
      metadata: 'pages/home/metadata',
    },
    aboutMe: {
      metadata: 'pages/about-me/metadata',
    },
    resume: {
      metadata: 'pages/resume/metadata',
    },
    portfolio: {
      metadata: 'pages/portfolio/metadata',
    },
    contact: {
      metadata: 'pages/contact/metadata',
    }
  }
}


export default routes