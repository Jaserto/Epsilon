import { DefaultTheme } from 'styled-components';

const styles = {
  font: {
    primary: "'Poppins', sans-serif;",
    secondary: "'Roboto', sans-serif;",
    sizes: {
      xsm:'1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2.4rem',
      xl: '3.6rem',
      xxl: '6.4rem',
    }
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
  },
  spacings: {
    xsm: '.8rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.6rem',
    xxl: '6.4rem'
  }
}

export const light: DefaultTheme = {
  isLight: true,
  colors: {
    bg: {
      body: "#F8F8F8",
      modal: "#F8F8F8",
      input:"#fff",
    },
    textColor: {
      primary: "#29292E",
      details: "#737380",
      input:"#835AFD",
    },
    black: "#29292E",
    shadow: "#050206",
    purple: {
      white:"#0064E6",
      light: "#0557C2",
      dark: "#003E8F",
    },
    google:'#EA4335',
    danger: "#E73F5D",
    gray: {
      dark: "#737380",
      medium: "#A8A8B3",
      light: "#DBDCDD",
    },
    white: {
      medium: "#F8F8F8",
      light: "#FEFEFE",
    },

    pink: {
      medium: "#391ec1",
      light: "#4a11d3",
    }
  },
  ...styles,
}


export const dark: DefaultTheme = {
  isLight:false,
  colors: {
    bg: {
      body: "#111111 ",
      modal: "#29292E",
      input:"#2d2d2d",
    },
    textColor: {
      primary: "#FEFEFE",
      details: "#F8F8F8",
      input:"#FEFEFE",
    },
    black: "#29292E",
    shadow: "#050206",
    purple: {
      white:"#0064E6",
      light: "#0557C2",
      dark: "#003E8F",
    },
    google:'#EA4335',
    danger: "#E73F5D",
    gray: {
      dark: "#737380",
      medium: "#A8A8B3",
      light: "#DBDCDD",
    },
    white: {
      medium: "#F8F8F8",
      light: "#FEFEFE",
    },
    pink: {
      medium: "#6f77ff",
      light: "#9580ff",
    }
  },
  ...styles,
}