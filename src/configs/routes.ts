const routes = {
  pages: {
    public: {
      home: '/',
      aboutMe: '/about-me',
      resume: '/resume',
      portfolio: '/portfolio',
      contact: '/contact',
      cookiesPolicy: '/cookies-policy',
      auth: {
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        resetPassword: '/reset-password',
      },
    },
    authenticated: {
      dashboard: '/dashboard',
    },
  },
};

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
      faq: 'pages/home/faq',
    },
    aboutMe: {
      metadata: 'pages/about-me/metadata',
      skills: 'pages/about-me/skills',
    },
    resume: {
      root: 'pages/resume',
      metadata: 'pages/resume/metadata',
    },
    portfolio: {
      root: 'pages/portfolio',
      metadata: 'pages/portfolio/metadata',
    },
    contact: {
      metadata: 'pages/contact/metadata',
    },
  },
};

export default routes;
