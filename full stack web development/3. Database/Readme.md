## The Full Stack Web Development Course: Database

### 1. MySQL
- ![SQL parts](images/sql.png)
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
