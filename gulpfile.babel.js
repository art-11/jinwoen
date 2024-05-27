// import plugin
const {	src, dest, watch, parallel } = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer');
	// cssDeclarationSorter = require('css-declaration-sorter'),
	// compass = require('compass-importer'),
	// sourcemaps = require('gulp-sourcemaps'),
	// imagemin = require('gulp-imagemin'),
	// pug = require('gulp-pug'),
	// plumber = require('gulp-plumber'),
	// rename = require("gulp-rename"),
	// htmlbeautify = require('gulp-html-beautify'),
	// terser = require('gulp-terser'),
	// merge = require('merge-stream'),
	// spritesmith = require('gulp.spritesmith'),
	// buffer = require('vinyl-buffer');
// file paths
const paths = {
	styles:{src: 'sass/**/*.sass', dest: 'css'}// sass 來源路徑
	// htmls:{src: 'pug/*.pug', dest: './'},//pug 來源路徑
	// images:{src: 'images/*.*',dest: 'img'},//images 來源路徑
	// jsPath:{src:'js/*.js', dest: 'js/dest'},//js 來源路徑
	// sprites:{src: 'images/sprites/*.*', dest: 'img/sprites/'},//要merge的圖片檔案路徑
	// csstemplate: 'autosize.hbs'// sprite Css規則檔案
};

//sass function
sass.compiler = require('node-sass');

function RunSass() {
	let plugins = [
		//autoprefixer CSS 加瀏覽器的webkit
		//在package.json 的 browserslist 設定過濾瀏覽器參數
		autoprefixer()
		//CSS排序規則
		//1.alphabetically: a-z
		//2.smacss: Box > Border > Background > Text > Other
		//3.concentric-css: Positioning > Visibility > Box model >Dimensions > Text
		// cssDeclarationSorter({order: 'alphabetically'})
	];
	return src(paths.styles.src)
		//.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'expanded', //nested, expanded, compact, compressed
				indentType: 'tab',
    			indentWidth: 1
					// importer: compass
			})
				.on('error', sass.logError)
		)
		.pipe(postcss(plugins))
		.pipe(dest(paths.styles.dest));
}
//pug function
// function RunPug() {
// 	return src(paths.htmls.src)
// 		.pipe(plumber({
// 			errorHandler: function(error) {
// 				console.log(error.message);
// 				this.emit('end');
// 			}
// 		}))
// 		.pipe(pug({ // compile pug into HTML
// 			pretty: '\t'
// 		}))
// 		.pipe(htmlbeautify({
// 			indent_size: 4,
// 			indent_char: '\t', //讓一個標籤獨佔一行
// 			unformatted: true, // 默認情況下，body | head 標籤前會有一行空格
// 			extra_liners: []
// 		}))
// 		.pipe(rename({
// 			extname: '.asp'
// 		}))
// 		.pipe(dest(paths.htmls.dest));
// }
//imagesmin function
// function RunImgmin() {
// 	return src(paths.images.src)
// 		.pipe(imagemin({
// 			svgoPlugins: [{
// 				removeViewBox: true
// 			}]
// 		})) // 圖片最小化
// 		.pipe(dest(paths.images.dest)); //壓縮後檔案輸出位置
// }
//compile js function
// function CompileJs() {
// 	return src(paths.jsPath.src)
// 		.pipe(plumber({
// 			errorHandler: function(error) {
// 				console.log(error.message);
// 				this.emit('end');
// 			}
// 		}))
// 		.pipe(babel({
// 			presets: ['@babel/env'] //es6 es7 轉換 es5
// 		}))
// 		.pipe(dest(paths.jsPath.dest))
// 		.pipe(terser({
// 			keep_fnames: false,
// 			ie8: true,
// 			mangle: false
// 		}))//壓縮JS
// 		.pipe(rename({
// 			suffix: '.min'
// 		}))
// 		.pipe(dest(paths.jsPath.dest));
// }

//images sprite
// function ImgSprite() {
// 	const spriteData = src(paths.sprites.src)
// 		.pipe(spritesmith({
// 			imgName: 'sprite.png', //輸出圖片名稱
// 			cssName: 'sprite.css', //輸出css名稱
// 			padding: 5, //圖片間格
// 			algorithm: 'binary-tree',
// 			cssTemplate: paths.csstemplate,
// 			cssHandlebarsHelpers: {
// 				externalName(name) {
// 					let className = name;
// 					if (/^\d/.test(className)) {
// 						className = `a__${name}`;
// 					}
// 					return `.${externalClassName}.${className}`;
// 				},
// 				percent(value, base) {
// 					return `${(value / base) * 100}%`;
// 				},
// 				bgPosition(spriteSize, imgSize, offset) {
// 					const result = (offset / (imgSize - spriteSize)) * 100;
// 					if (Number.isNaN(result)) {
// 						return '0';
// 					}
// 					return `${result}%`;
// 				}
// 			}
// 		}));

// 	const imgStream = spriteData.img
// 		.pipe(buffer())
// 		.pipe(imagemin())
// 		.pipe(dest(paths.sprites.dest));

// 	const cssStream = spriteData.css
// 		.pipe(dest(paths.sprites.dest));

// 	return merge(imgStream, cssStream)
// }


//watch function
function RunWatch(){
	watch(paths.styles.src, RunSass);
	// watch(paths.htmls.src, RunPug);
	// watch(paths.images.src, RunImgmin);
	// watch(paths.jsPath.src, CompileJs);
	// watch(paths.sprites.src, ImgSprite);
}

exports.default = parallel(RunSass, RunWatch);