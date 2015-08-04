// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
	gulp.src('css/*.css').pipe(gulp.dest('release/css'));
	gulp.src('css/colors/*.css').pipe(gulp.dest('release/css/colors'));
	gulp.src('fonts/*.*').pipe(gulp.dest('/fonts'));
	gulp.src('img/*.*').pipe(gulp.dest('release/img'));
	gulp.src('img/logos/*.*').pipe(gulp.dest('release/img/logos'));
	gulp.src('img/overlays/*.*').pipe(gulp.dest('release/img/overlays'));
	gulp.src('img/portfolio/large/*.*').pipe(gulp.dest('release/img/portfolio/large'));
	gulp.src('img/portfolio/small/*.*').pipe(gulp.dest('release/img/portfolio/small'));
	gulp.src('img/skills/*.*').pipe(gulp.dest('release/img/skills'));
	gulp.src('img/slider/*.*').pipe(gulp.dest('release/img/slider'));
	gulp.src('img/slider/cha/*.*').pipe(gulp.dest('release/img/slider/cha'));
	gulp.src('js/*.js').pipe(gulp.dest('release/js'));
	gulp.src('*.ico').pipe(gulp.dest('release'));
	gulp.src('*.html').pipe(gulp.dest('release'));
	return;
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'deploy']);