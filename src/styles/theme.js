const theme = {
  colors: {
    primary: '#55c57a',
    primaryLight: '#7dd56f',
    primaryDark: '#28b487',
    white: '#fff',
    bodyText: '#777',
    lightGrey: '#f7f7f7',
    lightGreyAlt: '#f2f2f2',
    border: '#e0e0e0',
    borderLight: '#f1f1f1',
    mutedText: '#999',
    darkHeader: '#444',
    errorRed: '#eb4d4b',
    errorOrange: '#ff7730',
    successGreen: '#20bf6b',
  },

  gradients: {
    primary: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    primaryRight: 'linear-gradient(to right, #7dd56f, #28b487)',
    overlay: 'linear-gradient(to right bottom, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85))',
    error: 'linear-gradient(to right, #ff7730, #eb4d4b)',
  },

  fonts: {
    primary: "'Lato', sans-serif",
    weightLight: 300,
    weightRegular: 400,
    weightBold: 700,
  },

  shadows: {
    card: '0 1.5rem 4rem rgba(0, 0, 0, 0.1)',
    button: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
    form: '0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06)',
    userView: '0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07)',
    cta: '0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15)',
    alert: '0 2rem 4rem rgba(0, 0, 0, 0.25)',
  },

  borderRadius: {
    pill: '10rem',
    card: '3px',
    form: '4px',
    loginForm: '5px',
    cta: '2rem',
    circle: '50%',
  },

  sectionRotate: '9vw',
};

export default theme;
