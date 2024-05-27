const express = require('express');
const app = express();
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');
const {createPool}= require('mysql2');
const { v4: uuidv4 } = require('uuid');
  const port = 80;
  const cors = require('cors');
  app.use(cors()); // Enable CORS to allow requests from the React frontend

    
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
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 
});
