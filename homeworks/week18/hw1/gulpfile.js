/* eslint-disable */
const gulp = require('gulp');
// 報錯
const plumber = require('gulp-plumber');
// del 
const del = require('del');
// html
const pug = require('gulp-pug');
// css
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
// javascript
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// functions
function clean() {
	return del('./build/*');
}

function html() {
	return gulp.src('./src/pug/*.pug')
		.pipe(plumber())
		.pipe(pug()) // pug
		.pipe(gulp.dest('./build/'));
}

function css() {
	return gulp.src('./src/css/style.scss')
		.pipe(plumber())
		.pipe(sass()) // compile scss
		.pipe(cleanCSS({ compatibility: 'ie8' })) // css minify
		.pipe(gulp.dest('./build/css'));
}

function javascript() {
	return gulp.src('./src/js/*.js')
		.pipe(plumber())
		.pipe(babel({
            presets: ['@babel/env'] // babel
        }))
		.pipe(uglify()) // javascript minify
		.pipe(gulp.dest('./build/js'));
}

function watch() {
	gulp.watch('./pug/*.pug', html);
	gulp.watch('./css/style.scss', css);
	gulp.watch('./js/*.js', javascript);
}

exports.html = html;
exports.css = css;
exports.javascript = javascript;
exports.watch = watch;
exports.default = gulp.series(clean, html, css, javascript);
