const mix = require('laravel-mix');
require('dotenv').config();

const srcPath = 'assets';
const publicPath = 'dist';

mix.setPublicPath(publicPath)
  .js(`${srcPath}/scripts/main.js`, 'scripts')
  .sourceMaps()
  .sass(`${srcPath}/styles/main.scss`, 'styles')
  // .copyDirectory(`${srcPath}/fonts`, `${publicPath}/fonts`)
  // .copyDirectory(`${srcPath}/icons`, `${publicPath}/icons`)
  // .copyDirectory(`${srcPath}/images`, `${publicPath}/images`)
  .options({
    processCssUrls: false,
    postCss: [
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-pxtorem')({
        rootValue: 16,
        unitPrecision: 5,
        propList: ['font-size', 'letter-spacing'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      }),
    ],
  })
  .disableSuccessNotifications()
  .extract()
  .version();

// if (!mix.inProduction()) {
//   mix.sourceMaps().browserSync({
//     // proxy: process.env.BASE_URL,
//     server: {
//       baseDir: 'dist',
//     },
//     ghostMode: {
//       clicks: false,
//       scroll: true,
//       forms: {
//         submit: false,
//         inputs: false,
//         toggles: false,
//       },
//     },
//     files: [
//       'public/**/*.twig',
//       'modules/**/*.php',
//       'templates/**/*.twig',
//       'translations/**/*.php',
//       `${publicPath}/**/*.{js,vue,css}`,
//     ],
//   });
// }
