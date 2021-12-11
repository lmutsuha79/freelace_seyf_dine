module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: [
        './dist/**/*.html'
      ],
      defaultExtractor: content => content.mathch(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
}
