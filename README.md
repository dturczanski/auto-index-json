auto-index-json
===============

Node.js service serving directory content in JSON. 

By default it serves the files from directory named 'public' that is placed in scripts directory from port 8080. To change directory edit the root var.


###Requirements
You need to have Node.js with Express module installed.

For example on Ubuntu the following should be sufficient:
```
sudo apt-get install nodejs npm
sudo npm install -g express
```

###Usage
Run the script as Node.js application: 
```
nodejs auto-index-json.js
```

###Customization
Script uses directory middleware from Connect module. The JSON response type function is replaced and extended as 
the original version doesn't contain any metadata about files and directories apart from file name.

Feel free to change body of the express.directory.json function to suit your needs.
