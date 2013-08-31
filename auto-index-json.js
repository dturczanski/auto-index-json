var express = require('express')
  , fs = require('fs')
  , app = express.createServer();

var root = __dirname + '/public';

express.directory.json = function(req, res, files, next, dir, showUp, icons){
  var richFiles = files.map(function(file) {
        var fileStats = fs.statSync(root + dir + '/' + file);
        return {'name': file, 'isDirectory': fileStats.isDirectory()};
  });
  files = JSON.stringify({
        'files': richFiles,
        'dir': dir
  });
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', files.length);

  res.end(files);
};

app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.directory(root));
  app.use(express.static(root, { maxAge: hourMs }));
  app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
});

app.listen(8080);
