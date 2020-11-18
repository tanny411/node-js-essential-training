

- In data schema we can add reference to another collection. The `user` field will contain the fields of the `user` collection.
    ```Javascript
    new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        ...
    })
    ```
- We can populate info from the referenced schema like this.
    ![](images/mern-schema-interaction.png)
- This is how the output will come out as.
    ![](images/mern-schema-interaction2.png)
	
