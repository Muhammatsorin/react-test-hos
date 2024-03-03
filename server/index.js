const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_hos",
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World from server',
    })
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (err) {
            return res.status(500).json({ msg: err });
        }

        if (result.length > 0) {
            const InPassword = result[0].password;
            if (InPassword === password) {
                return res.send({
                    msg: "Login successful!",
                    result: result[0]
                })
            } else {
                return res.status(401).json({
                    msg: "Incorrect email or password"
                });
            }
        } else {
            return res.status(401).json({
                msg: "Unregistered user!"
            });
        }
    });
});

app.post('/logout', (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error during logout' });
        }

        // Clear localStorage on the client side
        res.json({ message: 'Logout successful', clearLocalStorage: true });
    });
});

app.post('/getPatients', (req, res) => {
    const permission = req.body.permission
    const email = req.body.email

    if (permission === 'admin') {
        db.query("SELECT number_id , register.patient_id , register_by , prefix , firstname , lastname , gender , birthday , phone_number , name_dad , name_mom , address , congenital_disease , blood_group , occupation , status FROM register INNER JOIN patient ON register.patient_id = patient.patient_id",
            (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
    }

    if (permission === 'officer') {
        db.query("SELECT number_id , register.patient_id , register_by , prefix , firstname , lastname , gender , birthday , phone_number , name_dad , name_mom , address , congenital_disease , blood_group , occupation , status FROM register INNER JOIN patient ON register.patient_id = patient.patient_id WHERE register_by = ?",
            [email], (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
    }

})

app.get('/getPatients/:id', (req, res) => {
    const id = req.params.id
    db.query('SELECT * FROM patient WHERE patient_id = ?', [id], function (err, results) {
        if (err) {
            console.log(err)
        } else {
            res.json(results[0])
        }
    })
})

app.post('/register', (req, res) => {
    const number_id = req.body.number_id
    const patient_id = req.body.patient_id
    const register_by = req.body.register_by
    const prefix = req.body.prefix
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const gender = req.body.gender
    const birthday = req.body.birthday
    const phone_number = req.body.phone_number
    const name_dad = req.body.name_dad
    const name_mom = req.body.name_mom
    const address = req.body.address
    const congenital_disease = req.body.congenital_disease
    const blood_group = req.body.blood_group
    const occupation = req.body.occupation
    const status = req.body.status

    db.query("SELECT * FROM register WHERE patient_id = ?", [patient_id], (err, result) => {
        if (err) {
            res.json(err)
        }

        if (result.length === 0) {
            db.query("INSERT INTO register (number_id , patient_id , register_by) VALUES(?,?,?)", [number_id, patient_id, register_by], (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    if (result) {
                        db.query("INSERT INTO patient (patient_id , prefix , firstname , lastname , gender , birthday , phone_number , name_dad , name_mom , address , congenital_disease , blood_group , occupation , status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                            [patient_id, prefix, firstname, lastname, gender, birthday, phone_number, name_dad, name_mom, address, congenital_disease, blood_group, occupation, status], (err, result) => {
                                if (err) {

                                } else {
                                    res.json({
                                        msg: "add patient data to patient table successfuly ..",
                                        result: result
                                    })
                                }
                            })
                    } else {
                        res.json("add fails !! please check ..")
                    }
                }
            })
        } else {
            res.send("This Patient ID already registered ..")
        }
    })
})

app.put('/update', (req, res) => {
    const patient_id = req.body.patient_id
    const prefix = req.body.prefix
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const gender = req.body.gender
    const birthday = req.body.birthday
    const phone_number = req.body.phone_number
    const name_dad = req.body.name_dad
    const name_mom = req.body.name_mom
    const address = req.body.address
    const congenital_disease = req.body.congenital_disease
    const blood_group = req.body.blood_group
    const occupation = req.body.occupation
    const status = req.body.status

    db.query("UPDATE patient SET prefix = ? , firstname = ? , lastname = ? , gender = ? , birthday = ? , phone_number = ? , name_dad = ? , name_mom = ? , address = ? , congenital_disease = ? , blood_group = ? , occupation = ? , status = ? WHERE patient_id = ?",
        [prefix, firstname, lastname, gender, birthday, phone_number, name_dad, name_mom, address, congenital_disease, blood_group, occupation, status, patient_id], (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM register WHERE patient_id = ?", [id], (err, result) => {
        if (result) {
            db.query("DELETE FROM patient WHERE patient_id = ?" , [id] , (err , result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
        } else {
            res.json(err)
        }
    })
})


app.listen(3001, () => {
    console.log("Hello World from Server");
});