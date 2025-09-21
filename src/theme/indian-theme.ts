import { createTheme } from 'tailwindcss-theming';

const indianTheme = createTheme({
  colors: {
    saffron: '#FF9933',
    white: '#FFFFFF',
    green: '#138808',
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      light: '#F9F9F9',
      dark: '#FFFFFF',
    },
    border: {
      default: '#E0E0E0',
      focus: '#FF9933',
    },
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    default: '8px',
    large: '16px',
  },
  shadows: {
    default: '0 2px 4px rgba(0, 0, 0, 0.1)',
    hover: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

export default indianTheme;