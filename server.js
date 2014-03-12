/** Config Vars ***/
var expressPort = 80;
var mongoPort = 27017;
var databaseName = "Climatiza";



var async = require("async");
var _ = require("underscore");

/******** Passowrd Hash setup*****/
var passwordHash = require('password-hash');
/********** Express setup ******/
var express = require('express');
var app = express();

//*************** Routes ****************/






// Express app config
// This points the default route to the angular js seed
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);


// middleware

app.use(express.bodyParser());
app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());



/**********************************************/

    app.listen(expressPort);

    console.log('Express started on port ' + expressPort);
