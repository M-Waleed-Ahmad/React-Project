const express = require('express');
const app = express();
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');
const {createPool}= require('mysql2');
const { v4: uuidv4 } = require('uuid');
  const port = 80;
  const cors = require('cors');
  app.use(cors()); // Enable CORS to allow requests from the React frontend

  app.use(cookieParser());


  const corsOptions = {
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow cookies to be sent
};
    let userData = {
        UserID: '',
        email: '',
        positionId: '',
        isLoggedIn: false,
    };  
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.use(express.urlencoded());
  
  
function formatDate(dateString) {
    // Parse the input date string
    const date = new Date(dateString);

    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date string in the desired format
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}

 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded());

// Establish connection to database
const pool=createPool({
    host:'localhost',
    user:'root',
    password:'waleed1086',
    database:'MED',
    connectionLimit:100
})
// Assuming you have a function to execute your query, for example:
function executeQuery(query, values = []) {
    return new Promise((resolve, reject) => {
        // Execute your query here
        // For example:
        pool.query(query, values, (err, result) => {
            if (err) {
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(result); // Resolve the promise with the result
            }
        });
    });
  }
// Usage:

  

// Endpoints

// Doctors Page EndPoint
app.get('/api/doctors', async(req, res) => {
    
   executeQuery(`SELECT COUNT(*) AS ApprovedDoctorsCount
    FROM doctors
    WHERE AdminsApproval = 1; -- Assuming 1 indicates approval and 0 indicates not approved`)
    .then(DoctorsCount => {
        console.log('DoctorsCount:', DoctorsCount);
        count=DoctorsCount
    })
    .catch(error => {
        console.log('Error:',error)
    });
    executeQuery(`SELECT *  FROM doctors
                  Inner Join Users
                  On doctors.DoctorID=Users.UserID
                  WHERE AdminsApproval = 1;`)
     .then(doctors => {
        console.log(doctors);
        res.json( { doctors,count});
      })
    .catch(error => {
        console.error('Error executing query:', error);
    });
});

// Email Check Endpoint
app.get('/api/check-email', async (req, res) => {
    try {
        console.log('Checking email:', req.query.email);
        const { email } = req.query;
        const query = 'SELECT COUNT(*) AS count FROM Users WHERE Email = ?';
        const values = [email];
        const result = await executeQuery(query, values);
        const emailExists = result[0].count > 0;
        console.log('Email exists:', emailExists);
        res.json({ exists: emailExists });
    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// SignUp Endpoints
// SignUp Patient
app.post('/api/patient/signup', (req, res) => {

    userid=uuidv4();
    console.log('Request body:', req.body.medicalHistory[0].history);
    const { age, weight, height,firstName,lastName,email,password,gender, disease, allergies, medicalHistory, treatment, contactName, contactPhoneNumber, contactEmail  } = req.body;
    const user_query = 'INSERT INTO Users (UserID, PositionID, FirstName, LastName, Email, Password, Gender) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values1 = [userid, 3, firstName, lastName, email, password, gender];
    const patient_query = 'INSERT INTO Patients (PatientID, Age, Weight, Height, Disease, Allergies) VALUES (?, ?, ?, ?, ?, ?)';
    const values2 = [userid, age, weight, height, disease, allergies];
    const med_query = 'INSERT INTO HealthRecords (EHRID, PatientID, MedicalHistory, Treatment, Status) VALUES (?, ?, ?, ?, ?)';
   
    emer=`INSERT INTO EmergencyInfo (EMID, PatientID, ContactName, ContactPNO, ContactMail)
    VALUES (?, ?, ?, ?, ?);
    `
    emerValu=[uuidv4(),userid,contactName,contactPhoneNumber,contactEmail];
    
    console.log('Medical history:', medicalHistory);
    pool.query(user_query, values1, (err, SUC) => {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('User data inserted successfully');
            pool.query(patient_query, values2, (err, SUC) => {
                if (err) {
                    console.log('Error:', err);
                } else {
                    console.log('Patient data inserted successfully');
                    for (let int = 0; int < medicalHistory.length; int++) { // Removed -1 from the loop condition
                        const values3 = [uuidv4(), userid, medicalHistory[int].history, medicalHistory[int].treatment, 'past'];
                        console.log('int=', medicalHistory.length);
                        pool.query(med_query, values3, (err, SUC) => {
                            if (err) {
                                console.log('Error:', err);
                            } else {
                                executeQuery(emer,emerValu)
                                .then(suc=>{
                                    console.log('Ss');
                                    const userCookie={
                                        UserID:userid,
                                        email:email,
                                        isLoggedIn:true
                                    }
                                    res.cookie('user', userCookie, {
                                        httpOnly: true, // Cookie not accessible via JavaScript
                                        secure: false, // Set to true if using HTTPS
                                        sameSite: 'Lax', // Can be 'Strict', 'Lax', or 'None'
                                        path: '/' // Cookie available to all paths on the domain
                                      });
                                    res.sendStatus(200);
                                    
                                })
                                console.log('Health record inserted successfully');
                            }
                        });
                    }
                }
            });
        }
    });

  
 });

// SignUp Doctor




// Login Endpoint

app.post('/api/login', async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { email, password } = req.body;
        const query = 'SELECT * FROM Users WHERE Email = ? AND Password = ?';
        const values = [email, password];
        const result = await executeQuery(query, values);
        if (result.length > 0) {
            const user = result[0];
            const userCookie = {
                UserID: user.UserID,
                email: user.Email,
                positionId:user.PositionID,
                isLoggedIn: true,
            };
          userData.UserID=userCookie.UserID;
            userData.email=userCookie.email;
            userData.positionId=userCookie.positionId;
            userData.isLoggedIn=true;
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.sendStatus(500);
    }
});

app.get('/api/check', (req, res) => {
    const userCookie = req.cookies.user;
    console.log('User cookie:', userData);
    if (userData.isLoggedIn) {
        console.log('User is logged in');
        res.sendStatus(200);
    } else { 
        console.log('User is not logged in');
        res.sendStatus(401);
    }
 
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 
});
