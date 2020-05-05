const accountSid = 'AC7bc6b910f02c9913e8614d0d55944da8';
const authToken = 'e37e5c8505b05fb791691dfa4f969f3a';
const client = require('twilio')(accountSid, authToken);
const CNST = require('../config/constant');

exports.sendSMS = (phoneNumber, code, requestType, link) =>
    new Promise((resolve, reject) => {
        if (requestType === "forgotPassword") {
            const message = "This is your forget password link.\nPlease click on this button to reset your password:" + link + "\nBud's Bank Team";
            client.messages
                .create({
                    body: message,
                    from: '+12064663221',
                    to: '+1' + phoneNumber
                })
                .then(message => resolve({ status: 200, isSuccess: true, message: CNST.PHONE_SENT_SUCCESS }))
                .catch(error => reject({ status: 400, isSuccess: false, message: error.message }));
        } else {
            const message = "Your verification code is " + code + "\nBud's Bank Team";
            client.messages
                .create({
                    body: message,
                    from: '+12064663221',
                    to: '+1' + phoneNumber
                })
                .then(message => resolve({ status: 200, isSuccess: true, message: CNST.PHONE_SENT_SUCCESS }))
                .catch(error => reject({ status: 400, isSuccess: false, message: error.message }));
        }
    })
