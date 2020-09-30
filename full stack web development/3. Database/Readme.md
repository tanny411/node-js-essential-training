## The Full Stack Web Development Course: Database

### 1. MySQL
- ![SQL parts](images/sql.png)
- Some tools to run MySQL are CLI and phpmyadmin (that comes with xampp)
- Primary Key: Though not required a table cannot have more than 1 primary key, and must have unique values and no null values.
- Auto increment: Says what it does, and does not need to be specified when inserting rows.
- Can set Default values for columns.
- Some statements
    - SELECT * FROM table WHERE id BETWEEN 2 AND 4;
    - WHERE city LIKE 'a%'
    - WHERE city IN ('city1', 'city2')
    - SELECT CONCAT(first_name, ' ', last_name) AS 'Name' from table;
    - ALTER TABLE table ADD column varchar(255); or REMOVE column;
    - ALTER TABLE table MODIFY COLUMN column float;
    - Use of foreign keys
        ```
            CREATE TABLE orders(
                id INT NOT NULL AUTO_INCREMENT,
                product_id INT, 
                customer_id INT,
                order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id),
                FOREIGN KEY(customer_id) REFERENCES customer_table(id),
                FOREIGN KEY(product_id) REFERENCES product_table(id)
            );
        ```
    - To set foreign keys from phpmyadmin, from the table structure select More >> Add index. Then from realtional view >> add internal relations and also add foreign key constraints.
    - To export DB, go into the DB and export it from the export tab. To import it, create your DB, go into it, and import it from the Import tab.

### 2. PostgreSQL
- Designed for high-volume environment, reliable and stability. Implements SQL standard very well. Has Support for JSON and NoSQL. A little learning curve and slightly slow for read-heavy operations.
- Some of the tools to use PostgreSQL is PG Client, phpPgAdmin, PG Admin etc.
- Data types are pretty much similar, SERIAL and BIG SERIAL dtypes work like AUTO INCREMENT of mysql. UUID dtype - universally unique identifier, a long unique identifier.
- CLI
    - Download from www.postgresql.org. Run the psql executable from the bin folder. `./psql -U username`.
    - List of databases `\l`. Connect to a database `\c dbname`. See tables `\dt`.
    - `CREATE DATABASE dbname;`. See current users `SELECT * FROM pg_user;`. Create user with `CREATE USER devuser WITH PASSWORD '123';` and make it a super user `ALTER USER devuser WITH SUPERUSER`. Now we can devuser to create other users. Change password by `UPDATE pg_shadow SET passwd = 'newpass' WHERE username = 'devuser'`. Add add this user to our database `GRANT ALL ON database dbname TO devuser;`. Exit with `\q`.
    - Now if we try to login with devuser it will try to find a db with the same name as the user. So we do `./psql -U devuser dbname`. 
    - `ALTER TABLE table_1 ADD CONSTRAINT constraint_name FOREIGN KEY(col_1) REFERENCES table_2(col_2)`.
- Pg Admin
    - In the installed directory there is a folder called pgadmin which gives a GUI to work with pgsql. Run executable from pgadmin bin folder. dbname >> schemas >> public >> my_table.
    - Login/Group role >> rt click >> create >> login/group role. General >> username. Definition >> password. Privileges >> set as super user, can login >> Save. We can see and edit the information.
    - Tables >> table_name >> constraints >> add foreign key.\
- With PHP
    - Go to the php.ini file and remove the semicolon from the line `extension=php_pgsql.dll`.
    - Connect to pgsql with `$con = pg_connect("host=".$dbhost." port=".$dbport." dbname=".$dbname." user=".$dbuser." password=".$dbpass);`. Use `pg_query`, `pg_close`.
    -  `$result = pg_query_params("INSERT INTO articles(title, body, category_id) VALUES($1, $2, $3)", array($title, $body, $category_id));` is more secure than sending in a query string directly.

### 3. MongoDB
- NoSQL means 'Not Only SQL'. It is an alternative to SQL and can infact apply SQL-like query concepts. NoSQL has been increasingly popular with big data and real-time web apps. They are easier to scale, and dont need to think of schema before hand. 
- NoSQL commonly uses horizontal scaling. It means to add more nodes to a system, or computers to a distributed system, increasing the number of servers.
- Vertical scaling on the other hand means adding high end resources to a single node in a system, like CPU, memory, drives etc. Uses virtualization technology more effectively.
- Types of NoSQL dbs:
    - Column: Cassandra, Hbase, Vertica
    - Document: MongoDB, CouchDB, Rethink
    - Key/Value: Couchbase, Dynamo, Memcached, Redis
    - Graph: Neo4J, MarkLogic
- MongoDB holds data in document type files like json files, actually bson, which is a binary representation of the json files. It is schema less, one collection holds different documents with unlimited fields of any type. Collection is like a table and document is like rows. No complex joins. 
- If you just have a lot of data and not a whole bunch of relationships, NoSQL is probably the way to go.
- Download: Mongodb website >> community server. Create a folder `data/db` in the installed location, this is where all your dbs will be stored. Also create a folder called `log`. Go to mongodb/bin and run `mongod --directoryperdb --dbpath path_to_db_folder --logpath path_to_log_folder/mongodb.log --logappend --rest --install`. Then start the service `net start MongoDB`.
- Mongo Find commands:
    - From bin folder `mongo` command will start the mongo shell.
    - `show dbs`, `use newdb` to create and switch to the newdb. `db.createCollection('newCollection')`. Check which db you in `db`. `show collections`. 
    - Add dates with `new Date('2020-12-12')`. Insert documents by `db.collection_name.insert({ your_document_json_object_like })`. See data by `db.collection_name.find();`. Use `.pretty()` to make it look better. Insert as an array of objects to insert more than one.
    - Search by `db.collection_name.find({name: 'aisha'})` works exactly like this even if you wanna search from arrays. To search from objects `.find({ client: { name: 'aisha', age : 30 } })`. But if you don't want to match the object exactly do `.find({"client.name":"aisha"})`. You can also use regex.
    - You can findOne(). You can limit what to return `.find({condition},{name:1, client:1})`, 1 means to include something. Put 0 to get everything but those fields.
    - `.find().sort({name:1})` ascending, -1 is descending.
    - `.limit(3)` get the first 3, `.skip(2)` skip the first two.
    - .find() returns a cursor object that we can store in a variable like `var myCursor = db.collection_name.find()` and then we can use it normally, or iterate through it with `.next()`, check with `myCursor.hasNext() ? myCursor.next() : null`.
    - `field: {$eq: 2}`, we also have ne, gt, gte, lt, lte, `{field : {$exists: true}}`, `{$in:[list_of_stuff]}`. `$or: [{cost: {$eq: 2000 }}, {cost: {$gt: 100000}}]`, $and.
    - `db.collection_name.aggregate({$limit :2})`, $skip, $sort{name: 1}, `.aggregate([{$match : {name: 'aisha'}}])`.
    - We can also concat fields together and display as another name.
- Mongo Update commands:
    - `db.collection_name.update({condition},{replacemet})`, to update just a single field do `.update({condition}, {$set : {update_field:"value"}})`, to update array values so `{$set : "array_name.0" : "new_val"}` 0 is the index, 1,2 etc. Similarly to update object values `{ "client.name" : "new_val" }`
    - To push to array use `$push` in place of set. To remove from array use `$pull`. To remove the last element use `$pop: {array_name:1}`.
    - If we update with a condition that doesn't match anything, it does nothing. If we want such that an entry is created if nothing is matched, we use `{upsert:true}` as a third parameter in update query.
    - `.findAndModify()` returns the found result, then updates.
    - `.remove()`
- Using Mongoose and Node:
    - Install mongoose with npm in a nodejs project. We create a folder called models and add .js file in there which has a mongoose.Schema() variable containing the layout of the database with the data types. Although it is not necessary for NoSQL, it's a good idea to do it for mongoose. This can ofcourse be changed on the fly since it is NoSQL. connect by `mongoose.connect('mongodb://localhost/dbname')` and call the exported model variable to operate on the database. See code for more (folder 10).
    - RestEasy chrome extension to send post requests. Use jsonformatter website to check json formatting of the post requests body.

### 4. CouchDB
- Document type NoSQL database, used JSON like format and has subscribable data updates in the _changes feed. It uses Couch replication protocol to synchronize JSON documents between two peers using the CouchDB REST API. It has a REST-like interface.
- `instance_start_time` and `update_seq` fields in response are mandatory. Replicator must generate a Replication ID before sending data SOURCE -> TARGET (called replication).
- It can work on a single node, then it doesn't take advantage of things like new scaling and fault tolerance. It can run on clusters too.
- 'Fauxton' is the Web UI for CouchDB, can be installed with npm as well as with windows CouchDB installer.
- Installation:
    - Windows: Install CouchDB from the website, open    `localhost:5984/_utils/
    - Linux: This installs couchdb and futon. Futon is similar to fauxton.
        ```
        sudo apt-get update
        sudo apt-get install software-properties-common -y
        sudo add-apt-repository ppa:couchdb/stable -y
        sudo apt-get update
        sudo apt-get install couchdb -y
        curl localhost:5984
        ```
- Using Fauxton GUI: configure a single node. Then verify installation. Create a database and start adding documents. Create database >> for each row create a new document. Options >> include docs to view the key-vals of the docs. We can also view it in table format. API buttons shows an example api call to fetch all rows.
- Using Futon GUI: This is an older GUI that has been replaced by Fauxton in newer CouchDB versions. At the bottom right it shows everyone is admin, click the fix this link. Verify installation. New database >> new document >> add fields >>save document.
- database >> all document >> new view >> produces a map function, outputs a key-value pair. Creates various 'views' of our database. We can use standard JS functions in the view creation function. We can also add conditions. API requests to get those views are shown. In the API url we can change limit and add `&decending=true` etc.
- Set up remote db and replicate: IBM Cloudant offers free services, sign up and , set to accept request from all domains in CORS. From local db >> replication >> set to server as remote >> https://myusername:mypassword@myusername.cloudant.com >> check create target >> click replication. Your db will now be available in cloudant. 
- From command line use curl to use CouchDB. 
    - Get all dbs `curl -X GET $HOST/_all_dbs` where $HOST = http://localhost:5984. To login as admin set $HOST=http://myusername:mypassword@localhost:5984. 
    - Add db by `GET $HOST/new_db`
    - To add a doc in new_db, fisrt we need to create our own UUID (thats auto set in GUI), by `GET $HOST/_uuids`. Copy that id. Then `PU $HOST/new_db/the_id -d "{"name":"aisha","age":60}"`
    - To get a document `GET $HOST/new_db/the_id`
    - To update a document `PUT $HOST/new_db/the_id -d "{"_rev":"the_rev_id", "name":"not_aisha"}"`
    - To delete `DELETE $HOST/new_db/the_id?rev=the_rev_id`