require.config({
  baseUrl: "../js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery-1.8.0',
    underscore: 'lib/underscore-1.4.2',
    backbone: 'lib/backbone-0.9.2',
    'backbone.localStorage': 'lib/backbone.localStorage',
    jasmine: '../test/lib/jasmine',
    'jasmine-html': '../test/lib/jasmine-html',
    spec: '../test/spec/'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});


if(this.__karma__) {
  var tests = [];
  for (var file in window.__karma__.files) {
      if (/Spec\.js$/.test(file)) {
          tests.push(file);
      }
  }

  requirejs.config({
      // Karma serves files from '/base'
      baseUrl: '/base/js',

      paths: {
          'jquery': 'lib/jquery',
          'underscore': 'lib/underscore',
          'backbone': 'lib/backbone'
      },

      shim: {
          'underscore': {
              exports: '_'
          }
      },

      // ask Require.js to load these files (all our tests)
      deps: tests,

      // start test run, once Require.js is done
      callback: window.__karma__.start
  });
} else {
  window.store = "TestStore"; // override local storage store name - for testing

  require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/models/TodoSpec');
    specs.push('spec/models/PatientSpec');
    specs.push('spec/views/ClearCompletedSpec');
    specs.push('spec/views/CountViewSpec');
    specs.push('spec/views/FooterViewSpec');
    specs.push('spec/views/MarkAllSpec');
    specs.push('spec/views/NewTaskSpec');
    specs.push('spec/views/TaskListSpec');
    specs.push('spec/views/task/TaskViewSpec');
    specs.push('spec/views/task/ViewTaskViewSpec');
    specs.push('spec/views/task/EditTaskViewSpec');


    $(function(){
      require(specs, function(){
        jasmineEnv.execute();
      });
    });

  });
}