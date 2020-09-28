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

### 3. 