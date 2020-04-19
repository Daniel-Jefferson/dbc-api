var helperFile = require('../helpers/helperFunctions');

exports.updateToken = function (req, res) {
    var userID = req.body.user_id || '';
    var token = req.body.token || '';
    var device_id = req.body.device_id || '';

    if (!userID){
        output = {status: 400, isSuccess: false, message: "User ID required"};
        res.json(output);
        return;
    }
    if (!token){
        output = {status: 400, isSuccess: false, message: "FCM Token required"};
        res.json(output);
        return;
    }
    if (!device_id){
        output = {status: 400, isSuccess: false, message: "Device ID required"};
        res.json(output);
        return;
    }

    helperFile.updateFCMToken(userID, token, device_id).then(response => {
        if (!response.isSuccess){
            output = {status: 400, isSuccess: false, message: response.message};
            res.json(output);
        } else{
            output = {status: 200, isSuccess: true, message: "Fcm token updated successfully"};
            res.json(output);
        }
    });
};
