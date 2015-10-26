var tsproject = require( 'tsproject' );
var gulp = require( 'gulp' );
gulp.task( 'build', function() {
 
    // path to named configuration file provided and optional settings specified 
    return tsproject.src( './src',
        { 
            logLevel: 1,
            compilerOptions: {
                listFiles: true
            } 
        })
        .pipe( gulp.dest( './dist' ) );
 
});