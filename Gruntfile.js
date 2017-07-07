module.exports = function(grunt) {
  grunt.initConfig({
    cucumberjs: {
      options: {
        format: 'html',
        output: './public/report.html',
        theme: 'bootstrap'
      },
      features : []
    }
  });

  grunt.loadNpmTasks('grunt-cucumberjs');

  grunt.registerTask('default', ['cucumberjs']);
};
