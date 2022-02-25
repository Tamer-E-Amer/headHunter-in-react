/**
 * @description JS task runner file using gulp in order to watch the sass code in the containers and components and create the corresponding css files in assets/css folder
 */
 const gulp = require('gulp');
 const gulpSass = require('gulp-sass')
 const sass = gulpSass(require('sass'));
 
 gulp.task("watch", async function(){
     // create css file for components
     gulp.watch('src/components/**/*.scss', async function(){
     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/assets/css'));
     })

     //create css file for containers
     gulp.watch('src/containers/**/*.scss', async function(){
     gulp.src('src/containers/**/*.scss').pipe(sass()).pipe(gulp.dest('src/assets/css'));
     })

    })