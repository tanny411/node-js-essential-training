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
        ```javascript
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
    - Integration testing: testing modules together
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

### 3. PHP
- Powerful open source server side programming language, executed on server then generates html to show on client side. Interpreted at runtime, no compiling. 
- Directly embedded in html using <?php ?>.
- XAMPP is a bundled software that bundles together php, mysql and apache server for use. Server parses the .php files.
- It has drivers to work with noSQL too. php is also multi-paradigm, so both functional and OOP.
- Installation:
    - Linux installation more suited for actual hosting:
        ```
        sudo apt-get update
        sudo apt-get install apache2 (check in localhost)
        sudo apt-get install php7.0 php-pear libapache2-mod-php7.0 php7.0-mysql
        sudo systemctl restart apache2
        sudo gedit /var/www/html/test.php (<?php echo 'Hello World'?>, and then check in localhost/test.php)
        sudo apt-get install mysql-server (put root password when asked)
        mysql -u root -p
        CREATE DATABASE testdb;
        SHOW DATABASES;
        exit
        ```
    - For development purposes just get xampp. In windows run xampp-control.exe as administrator. Click the red crosses of apache and mysql and turn 'em to green ticks, meaning they will now be installed as services and will run in the background. Start apache and mysql. Now localhost should show you xampp. You will have your htmls in xampp >> htdocs. Create your website folder here.
    - For Linux, download xampp, then 
        ```
        sudo chmod +x xampp-linux-1.8.3-installer.run
        sudo ./xampp-linux-1.8.3-installer.run
        ```
        - /opt/lampp/htdocs (put your web files here)
        -  sudo chmod -R a+rwx htdocs (from lampp folder)
        - In browser: http://localhost/phpmyadmin/
- PHP language:
    - Constant: `define('CONSTVAR', 'value'); echo CONSTVAR;`. Constants don't use dollar sign.
    - Variables always start with $ sign. `$user`.
    - String concat by a `.` like `$user.' has '.$num.' books.'`.
    - `$ara = Array('one', 'two', 'three')`
    - `$ara = ['one', 'two', 'three']`. Array append dynamically, `$ara[3]='newNumber'`.
    - Associative array: `$nums = Array('one' => 1, 'two' => 2)`
    - Looping for arrays: `foreach($item as $ara){}`
    - `var_dump($var)` will show the data type.
    - `date('Y/m/d')` or l, M, Y, 'h:i:sa' etc. Set timezone with `date_default_timezone_set('America/New_york')`.
    - `$d = strtotime('tomorrow')` or today , 11 January 2020. Then display with `date('Y-m-d', $d)`.
- PHP Super Globals
    - $_POST['fieldname'] and $_GET['fieldname'] are used to access variables from html to php.
    - To give get parameters, `header("Location: index.php?error=Please%20fill%20all")`.
    - `if():` and `endif;` and you don't have to use the curly braces. Similarly, `foreach():` and `endforeach;`.
    - To use cookies `setcookies($cookie_name, $cookie_val, time()+secs)`, third parameter is till when to make the cookie last. Access it with `$_COOKIES[$cookie_name]` and can be used across pages. Cookies are set in clients browser.
    - Session does the same kind of thing, except its on the server and not on the clients browser. Every page you are using session, you have to include `session_start();`. Then set with `$_SESSION['username']='myName'`. These can be used across pages. These will last until you close the browser.
    - `$_SERVER[PHP_SELF]` can be used to post to the same page.
    - Check with `isset(var)` and unset it with `unset(var)`.
    - To unset all session variables, `session_unset();` and you can `session_destroy();`.
- OOP: No need for explanation if a code snippet is all you need.
    ```php
	class Book{
		// Properties
		protected $price;
		protected $title;
		public static $store = 'My Store';

		public function __construct($title, $price){
			$this->title = $title;
			$this->price = $price;
			echo '<br>The class "',__CLASS__,'" was instantiated!<br>';
		}

		public function __destruct(){
			echo '<br>The class "',__CLASS__,'" was destructed!<br>';
		}

		public function __toString(){
			return $this->getTitle();
		}

		// Methods
		public function setTitle($title){
			$this->title = $title;
		}

		public function getTitle(){
			return $this->title;
		}

		public static function getStore(){
			return self::$store;
		}
	}

	class Magazine extends Book {
		public $month;
		public $year;

		// Constructor
		public function __construct($title, $price, $month, $year){
			$this->month = $month;
			$this->year = $year;

			parent::__construct($title, $price);
			echo '<br>The class "',__CLASS__,'" was instantiated!<br>';
		}

		public function getYear(){
			return $this->year;
		}
    }
    ```
    ```php
    include 'Book.php';

    echo Book::getStore();

	$book1 = new Book('My Book', 9.99);
	echo $book1->setTitle('My Book');
	echo $book1->getTitle();
    ```
- MySQL with PHP
    - Two main choices, mysqli and PDO. mysqli is barely faster, pdo is a little hard to learn but safe and supports lots of other data drivers, not just mysql.
    - `mysqli_connect()` to connect, `mysqli_connect_errorno()` to check connection and `mysqli_connect_error()` to show error.
    - `mysqli_query()` to give query and `mysqli_fetch_assoc()` to get the result as an associative array.
- The OOP way
    - Folder Structure: 
        - lib (has class files including Template class, Database class etc)
        - config (has config file, which has all the includes)
        - templates
            - inc (has the header, footer files)
            - other pages
        - index.php 
    - Create a class called **Template** that will take in a template file path to display and bunch of parameters along with it.
    - Now we create templates for all the files like first_page, about_page and pass in the path to these files along with the variables it will need and echo the template object from the index page. It will work kindof like a template engine.
    - Also have a config file that has all the includes you need for all files. So instead of bunch of includes, we include only the config file. Also has all the constants etc.
    - We can use autoloader, which will do the require_once only when the class is instantiated.
    - 