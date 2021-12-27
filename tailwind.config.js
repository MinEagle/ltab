module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://th.wallhaven.cc/small/dp/dpv8d3.jpg')",
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      transitionProperty: ['active', 'group-hover'],
      transitionTimingFunction: ['active', 'group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
