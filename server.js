const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sgMail = require('@sendgrid/mail')
const router = require("./routes");
require("dotenv").config();
const cors = require('cors')


const bodyParser = require("body-parser");

// Defining middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var options = {
    setHeaders: function (res, path, stat) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Strict-Transport-Security': 'max-age=15780000; includeSubDomains'
      })
    }
  }

// Serving up static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build", options));
}

//send to react app!
app.use(router);

// emial setup
// =============================================================

app.post('/sendEmail', function(req, res) {
    console.log(req.body)
    let Email = JSON.stringify(req.body.email)
    let Name = JSON.stringify(req.body.name)
    let Subject = JSON.stringify(req.body.subject)
    let Subject2 = JSON.stringify(req.body.subject1)
    let Message = JSON.stringify(req.body.message)
    
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY);
    const msg = {
      to: "william.stearns303@gmail.com",
      from: "william.stearns303@gmail.com",
      subject: Name + "is looking for " + Subject,
      text: Subject,
      html: Name + " has a message for you. The message says:   " + Message +".     respond to:  " + Email,
    };
    sgMail.send(msg);
  
  });

  app.post('/sendNewsletter', function(req, res) {
    console.log(req.body)
    let Email = JSON.stringify(req.body.email)
    
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY);
    const msg = {
      to: "william.stearns303@gmail.com",
      from: "william.stearns303@gmail.com",
      subject: 'Baio-Bar Newsletter Update',
      text: Email,
      html: Email + " Want To Subscribe To Your Newsletter",
    };
    sgMail.send(msg);
  
  });


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
