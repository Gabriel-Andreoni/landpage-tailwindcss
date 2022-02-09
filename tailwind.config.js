module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        heroImgAnimate: {
          '0%': { transform: 'translateX(-200%)', opacity: '0' },
          '50%': {opacity: '.5'},
          '100%': {transform: 'translateX(0%)', opacity: '1'}
        },

        heroApAnimate: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { opcacity: '.5'},
          '100%': {transform: 'translateY(0%)', opacity: '1'}
        }
      },
      animation: {
        heroImgAnimate: 'heroImgAnimate 1s ease',
        heroApAnimate: 'heroApAnimate 1s ease',
        servicosAnimate: 'heroImgAnimate 1s ease'
      },
    },
    fontFamily: {
      fontHero: ['"KoHo"'],
      fontHeroLight: ['"KoHo"']
    },
    fontSize: {
      hero: ['5em', {
        lineheight: '1.5em'
      }],
      fontPadrao: ['1.5em', {
        lineheight: '1.5em'
      }],
      heroFont640px: ['2em', {
        lineheight: '1em'
      }],
    },

    screens: {
      'celular': '0px',

      'tablet': '740px',

      'image-hidden':'742px',
      
      'laptop': '960px',

      'desktop': '1024px',
    },
  },
  plugins: [],
}
