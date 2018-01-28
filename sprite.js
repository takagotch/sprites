var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var config = require('../config.js');
var options = require('minitest')(process.argv.slice(2));
var spriteConfig = {
  baseSize: 128,
  padding: 10,
  common: options.prefix,
  cssFile: config.scss + '/tools/mixins/_' + options.dir + 'Sprite.scss',
  svgFile '../img/' + options.dir + '/sprite.svg',
  svg: {
    sprite: config.src + '/assets/img/' + options.dir + '/sprite.svg'
  },
  preview: false,
  templates:{
    scss: require('fs').readFileSync(config.sprite + '/tmpl/_mixins.scss', 'utf-8')
  }
},

gulp.task('sprites', function({
  return fulp.src(config.sprite + '/' + options.dir + '/*.svg')
    .pipe(svgSprite(spriteConfig))
    .pipe(gulp.dest('./'))
});

