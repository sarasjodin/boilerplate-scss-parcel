export default {
  server: {
    baseDir: 'dist',
    routes: {
      '/about': 'dist/about.html',
      '/process': 'dist/process.html',
      '/sass': 'dist/sass.html'
    }
  },
  files: ['dist/**/*'],
  port: 3000
};
