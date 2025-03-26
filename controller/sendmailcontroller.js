
var usermodel = require('../model/sendmailmodel');
var usermodelinfo = require('../model/sendmailinfomodel');

//Send Mail To Gmail
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vexlureinternational@gmail.com',
        pass: 'okym kefb yski jmvc'
    }
});
exports.insert = async (req, res) => {

    try {
        var email = req.body.email;

        if (!email) {
            return res.status(400).json({
                status: "Error !!!",
                message: "Email is required"
            })
        }


        var data = await usermodel.create({ email });
        var mailOptions = {
            from: email,
            to: 'vexlureinternational@gmail.com',
            subject: email,
            text: email + ' This User Has Subscribed To Your Newsletter  '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.insert_info = async (req, res) => {

    try {
        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var message = req.body.message;
        var companyName = req.body.companyName;

        if (!name || !email || !phone || !message || !companyName) {
            return res.status(400).json({
                status: "Error !!!",
                message: "All fields are required"
            })
        }

        var data = await usermodelinfo.create({ name, companyName, email, phone, message });
        var mailOptions = {
            from: email,
            to: 'vexlureinternational@gmail.com',
            subject: email,
            text: 'This User Has Made An Inquiry On Your Site\n' +
                'Name : ' + name + '\n' +
                'Company Name : ' + companyName + '\n' +
                'Email : ' + email + '\n' +
                'Phone : ' + phone + '\n' +
                'Message : ' + message + '\n'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}
exports.get_data = async (req, res) => {

    try {
        var data = await usermodel.find();
        res.status(200).json({
            status: data,
            message: "Email sent successfully"
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.get_data_info = async (req, res) => {

    try {
        var data = await usermodelinfo.find();
        res.status(200).json({
            status: data,
            message: "Email sent successfully"
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}


