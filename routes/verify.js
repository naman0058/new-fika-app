var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');




// Create a transporter for sending emails
// const transporter = nodemailer.createTransport({
//     host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
//     port: 465, // Secure port for SSL
//     secure: true, // Use SSL
//     auth: {
//       user: 'info@fikaonline.in', // Your GoDaddy email address
//       pass: 'FikaAmit@123', // Your GoDaddy email password
//     },
//   });
  


const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Use Microsoft 365 SMTP
    port: 587, // Use TLS (not SSL)
    secure: false, // false for TLS
    auth: {
      user: 'info@fikaonline.in', // Your GoDaddy Microsoft 365 email
      pass: 'FikaAmit@123', // Use App Password (not normal password)
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
});

// Test email sending
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server is Ready to Send Emails');
    }
});




  


    async function sendUserMail(email,subject,message) {
        try {
          console.log('Data Recieve',email); 
          console.log('Data Recieve',subject); 
          console.log('Data Recieve',message); 
    
          // Fetch recipients from an API (replace 'api_url' with your API endpoint)
          const recipients = email; // Assuming the API returns an array of recipients
      
          // Loop through recipients and send emails
       
      
              // console.log('recipients',recipients)
              try {
                const mailOptions = {
                  from: 'info@filemakr.com',
                  to: email,
                  subject: subject,
                  html: `
                  <html>
                    <head>
                      <style>
                        body {
                          style="font-family: Georgia;
                          color: black;
                        }
                        strong {
                          font-weight: bold;
                        }
                      </style>
                    </head>
                    <body style="font-family: Georgia;color:'black'">
                      ${message}
                    </body>
                  </html>
                `,
              
                };
      
                // Send the email
                const info = await transporter.sendMail(mailOptions);
                console.log('information',info)
                console.log(`Email sent to ${email}: ${info.response}`);
              } catch (emailError) {
                console.error(`Error sending email to ${email}:`, emailError);
              }
            
          
        } catch (fetchError) {
          console.error('Error fetching recipients or sending emails:', fetchError);
        }
      }

    module.exports = {
        sendUserMail
    }