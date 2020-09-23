## The Full Stack Web Development Course: Back End

### 1. Node.js
- Its Asynchronous and optimized for throughput and scalability. It is event-driven. It is single threaded and supports concurrency via events and callbacks.
- Install node with `sudo apt install nodejs` and check versions `node -v` and `npm -v`. Run js files from terminal with `node file.js`. Cannot run browser based functions though.
- `npm install express` installs it in the node_modules folder. `-g` tag installs it globally. Always have a package.json file and used `--save` tag when installing to add stuff to package.json. To create the file call `npm init`. Later on `npm install` with install all required dependencies.
- Create a server with http, set a callback, and set it to listen to a port. Thats it! In the callback send the html file to display.
- `npm install nodemon -g` to watch file and restart server automatically. From termical call `nodemon`.
- With Express:
    - We have certain middlewares that run one after another. We can create custom middlewares too, basically a function that can handle request, response and calls next() to run the next middleware.
    - Set up certain routes, ofcourse also the `get /` route. listen to port and export the app. See code for details.
    - We can have static html files and show express the path. Then localhost/thathtmlfile.html will load it directly.
- Template Engine PUG:
    - With a template engine we can load pages through server to the client. PUG(jade) can be used. `npm install pug --save`. In js, `app.set('set engine', 'pug')` to use it.
    - In a folder called views, we save our .pug files. And from the routes we call `res.render('index')` to render index.pug.
    - html2jade site to fo from html to pug/jade syntax. Indents are wither space or tab. Mixtures give error.
    - We can send data to pug file from the res.render() function and use then with `#{varName}`. 
    - We can use loops and conditionals in pug too.
    - Use `include includes/head.pug` to reuse html codes.
- Template Engine EJS:
    - `npm install ejs --save`
    - `app.set('set engine', 'ejs')`
    - Wont pick pickup views file autmatically, so set that path as well `app.set('views', path.join(__dirname, 'views'))`.
    - In views folder, create your index.ejs file, put your html there, similar like before, res.render(filename, params) and access those params in the .ejs file by <%= param %>. Use conditionals and all etc too <% if (someThing){ %>.
- MongoDB (details covered later in the course)
    - Mongo executable from the bin folder is run
    - We don't even have to create database or anything, it can be created throug the application, if it doesnt find the dabase or collection we specify it's gonna create it automatically.
    - In the project `npm install mongojs --save`.
    - In app.js
        ```
        const MongoClient = require('mongodb').MongoClient;
        const url = 'mongodb://localhost:27017/myproject';
        MongoClient.connect(url, function(err, db){
            if(err){
                return console.dir(err);
            }
            console.log('Connected to mongodb');
        });
        ```
        Within this function, after connection has been established, you can set and get stuff in/out of the database.
- **Login Project**:
    - express, ejs, mongojs, express-messages, express-validator (see github docs), express-session (see github docs), connect-flash, passport, passport-local, body-parser, bcryptjs, bootstrap (can be installed with npm too), nodemon
    - In package.json, in scripts add `"start" : :nodemon"`. Now you can start your app with `npm start`.
    - We create a localstrategy of the passport which checks username and password from database. passport uses this localstrategy and performs authentication of user login.
    - For registering, the form values are taken an inserted in db simply.
    - To keep the login information accessible after successful login, we need to serialize, deserialize using passport.

### 2. Meteor.js
- **Full stack** js framework, for both front and back end. Both web and mobile applications.
- Meteor uses mongodb in the backend.
- You can install packages from atmosphere that are written specifically for meteor with `meteor add pkg` or also use npm packages by `meteor npm install pkg`.
- Meteor supports 3 UI rendering libraries: Blaze, React, Angular.
- Some built-in user-accounts systems are available.
- Meteor offers testing:
    - Unit testing: testing modules separately
    - Integration testing: tesing modules together
    - Acceptance testing: testing browser button functionality etc
    - Load testing: test how app handles load
- Install meteor, check `meteor --version`.
- Create a project with `meteor create project_name`. cd into project_name folder, run `meteor`. that will open up your project. In browser go to `localhost:3000`.
- We will work on the client and server folder. 
- In html files, we can define templates and use them.
- We basically create functions in main.js inside of template_name.helpers(), and we can use those funtion names in the html to get values.
- With a folder outside the server and client folder, it will be accessible to both the server and the client.
- With `meteor mongo` in shell, you can access the database. Also use it from the browser console, it's accessible both server and client as we created the file as such.
- `meteor remove insecure` and now you cant't access db directly from client, that has to be done by the server on clients request.
- By default meteor has autopublish which allows any collection to be published anywhere. Run `meteor remove autopublish`. Publish a db from server, subscribe to it from client side.
- To style with bootstrap use `meteor add twbs:bootstrap`. It will be automatically in effect, we don't have to link to it or anything. 

### 3. Angular
- Client side framework (so its actually front-end but taught in the backend section of the course for relevance).
- Used often with Single Page Applications (SPA).
- Components in Angular divide the code into reusable chunks, make it easier to read, and makes it easy for multiple developers to collaborate.
- It has components, a class for that component, and those are accessed from html by tag name of the components selector. Html is put in the template part of the component.
- It uses Typescript which is a typed superset of javascript that compiles down to javascript.
- Create app from scratch:
    - Have `nodejs`, `npm` the install `Angular`. See angular docs to replace package.json contents, which you created by `npm init`. You can start your application by `npm start`.
    - Also create tsconfig.json, typings.json, system.config.js. See docs. Btw, all these can be created with angular quick start.
    - Then do `npm install`. 
- Quick Start: 
    - Clone their github repo (see docs).
    - `npm install`, `npm start`.
- Instead of putting html in template string, use template url and link to html file.
- ngModel data binding, connects data in all places for a variable, like in a text input box, h1 tag etc.
- Services grab data from wherever, and components can use these data provided by the services. Add the service as a provider in the post service. Set it up as a promise to perform asynchronous data transfer.
- Use `jsonplaceholder.typicode.com` as a dev tool, it offers a json api to which we can make requests to.
- We can use observables to do asynchronous data streaming from services, and subscribe to those from components.