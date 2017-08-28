// exports.config = {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['index.spec.js']
// };

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['index.spec.js'],
  multiCapabilities: [
  // {browserName: 'firefox'}, 
  {browserName: 'chrome'}
  ]
}