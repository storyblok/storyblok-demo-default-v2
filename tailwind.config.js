module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
    'bg-medium',
    'bg-dark',
    'bg-white',
    'bg-light',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:bg-tertiary',
    'hover:bg-medium',
    'hover:bg-dark',
    'hover:bg-white',
    'hover:bg-light',
    'text-primary',
    'text-secondary',
    'text-tertiary',
    'text-medium',
    'text-dark',
    'text-white',
    'text-light',
    'hover:text-primary',
    'hover:text-secondary',
    'hover:text-tertiary',
    'hover:text-medium',
    'hover:text-dark',
    'hover:text-white',
    'hover:text-light',
    'border-primary',
    'border-secondary',
    'border-tertiary',
    'border-medium',
    'border-dark',
    'border-white',
    'border-light',
    'items-start',
    'items-center',
    'items-end',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    fontFamily: {
      display: 'var(--font-family-display)',
      body: 'var(--font-family-body)',
    },
    borderRadius: {
      'none': '0',
      'sm': 'var(--rounded_sm)',
      'DEFAULT': 'var(--rounded_default)',
      'md': 'var(--rounded_md)',
      'lg': 'var(--rounded_lg)',
      'xl': 'var(--rounded_xl)',
      '2xl': 'var(--rounded_2xl)',
      '3xl': 'var(--rounded_3xl)',
      'full': 'var(--rounded_full)',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        medium: 'var(--medium)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
