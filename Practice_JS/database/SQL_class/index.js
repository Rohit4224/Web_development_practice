const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');

const express = require("express");
const app = express();
const methodOverride = require("method-override");

const path = require("path");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true})); // to parse the form data for pathch request

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'DELTA_APP',
    password: '12345699'
});

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
}

let getRandomId = () => {
    return [
      faker.string.uuid(),
    ];
}

let q = "INSERT INTO USER(id, username, email, password) VALUES ?";
/* let users = [
    ["123A", "123_newuserA", "abc@gmail.comA", "00000A" ], 
    ["123B", "123_newuserB", "abc@gmail.comB", "00000B"]
]; */

let data = [];

/* for (let i= 1; i <= 100; i++){
    data.push(getRandomUser());
} */


// let q = "SHOW TABLES";
/* try {
    connection.query(q, [data], (err, result) => {
         if(err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
};

connection.end(); */

app.get('/', (req, res) => {
    let q = 'SELECT COUNT(*) FROM USER';
    try {
        connection.query(q, (err, result) => {
             if(err) throw err;
            let count = (result[0]["COUNT(*)"]);
            res.render("home.ejs", { count });
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    };
});

app.get("/user", (req, res) => {
    let q = `SELECT * FROM USER`;
    try {
        connection.query(q, (err, users) => {
            if(err) throw err;
            // console.log(result);
            res.render("showusers.ejs", {users})
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    };
});

//edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM USER WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    };
    // console.log(id);
    // res.render("edit.ejs");
});

//update route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM USER WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if (formPass != user.password){
                res.send("Password is incorrect, you cannot hack it.");
            } else {
                let q2 = `UPDATE USER SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }

        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    };
    // res.send("updated");
});

app.get("/user/add", (req, res) => {
    res.render("adduser.ejs");
});


app.post("/user/added", (req, res) => {
    let { username, email, password } = req.body;
    let Id = getRandomId();
    let Newuser = [];
    Newuser.push([Id, email, username, password]);
    let q = "INSERT INTO USER(id, username, email, password) VALUES ?";
    try {
        connection.query(q, [Newuser], (err, result) => {
             if(err) throw err;
            console.log(result);
            res.redirect("/user");
        })
    } catch (err) {
        console.log(err);
    };
    // console.log(Newuser);
    // res.send("success");
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    /* let q = `SELECT * FROM USER WHERE id='${id}'`;
    try {
        connection.query(q, (err, user) => {
            if(err) throw err;
            console.log(user);
            res.render("delete_password.ejs", {user});
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }; */
    res.render("delete_password.ejs", {id});
});

app.delete("/user/delete/:id", (req, res) => {
    let { id } = req.params;
    let {password: formPass} = req.body;
    // let q = `DELETE FROM USER WHERE Id="${id}"`;
    let q = `SELECT * FROM USER WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
             if(err) throw err;
             let user = result[0];
            //  console.log(user.password);
            //  console.log(formPass);
             if (formPass != user.password){
                res.send("Password is incorrect, you cannot hack it.");
             } else {
                let q2 = `DELETE FROM USER WHERE Id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    res.redirect("/user");
                })
             }
            
        })
    } catch (err) {
        console.log(err);
    };
    // res.redirect("/user");
})

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});



//   console.log(getRandomUser());

//const mysql = require('mysql2');

/* const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'DELTA_APP',
    password: '12345699'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Query for listing tables
    connection.query("SHOW TABLES", (err, result) => {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }
        console.log('Tables in the database:', result);

        // Close the database connection
        connection.end((err) => {
            if (err) {
                console.error('Error closing the database connection:', err);
            }
            console.log('Database connection closed');
        });
    });
});
 */
