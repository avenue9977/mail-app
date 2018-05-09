var express = require('express');
var router = express.Router();
var Joi = require('joi');

// database
var emails = require('./database.js');

// api routes 

// get all emails
router.get('/emails', function(req, res) {
    // responce with all emails
    res.send(emails);
});

// get specific email
router.get('/emails/:id', function(req, res) {

    // find the requests email
    var email = emails.find(function(email) {
        return email.id === parseInt(req.params.id);
    });

    if (!email) {
        return res.status(404).send("The email with the given ID not found");
    }

    // responce with the email
    res.send(email);

});

// get inbox messages
router.get('/inbox', function(req, res) {

    var emailsArray = [];

    // filter trought database and return emails of type inbox
    emails.forEach(function(email) {
        filterEmails(email, 'inbox', emailsArray);
    });

    // responce with all inbox emails
    res.send(emailsArray);

});

// get send messages
router.get('/send', function(req, res) {

    var emailsArray = [];

    // filter trought database and return emails of type inbox
    emails.forEach(function(email) {
        filterEmails(email, 'send', emailsArray);
    });

    // responce with all inbox emails
    res.send(emailsArray);

});

// get draft messages
router.get('/drafts', function(req, res) {

    var emailsArray = [];

    // filter trought database and return emails of type inbox
    emails.forEach(function(email) {
        filterEmails(email, 'draft', emailsArray);
    });

    // responce with all inbox emails
    res.send(emailsArray);

});

// create an email 
router.post('/emails', function(req, res) {

    // validate the requests email
    var result = validateEmail(req.body);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }

    //create the email
    var email = {
        "id": emails.length + 1,
        "type": req.body.type,
        "to": req.body.to,
        "fromName": req.body.fromName,
        "fromEmail": req.body.fromEmail,
        "date": req.body.date,
        "subject": req.body.subject,
        "message": req.body.message
    };

    // add to database (emails array)
    emails.push(email);

    // responce with all emails
    res.json(emails);

});

// updare an email
router.put('/emails/:id', function(req, res) {

    // find the requests email
    var email = emails.find(function(email) {
        return email.id === parseInt(req.params.id);
    });

    if (!email) {
        return res.status(404).send("The email with the given ID not found");
    }

    // validate the request
    var result = validateEmail(req.body);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }

    // update the email
    email.to = req.body.to;
    email.fromName = req.body.fromName;
    email.fromEmail = req.body.fromEmail;
    email.date = req.body.date;
    email.subject = req.body.subject;
    email.message = req.body.message;

    // responce with the updated email
    res.send(email);

});

// delete an email
router.delete('/emails/:id', function(req, res) {
    // find the requests email
    var email = emails.find(function(email) {
        return email.id === parseInt(req.params.id);
    });

    if (!email) {
        return res.status(404).send("The email with the given ID not found");
    }

    // remove email from database (emails array)
    var index = emails.indexOf(email);
    emails.splice(index, 1);

    // responce with the deleted email
    res.send(email);
});

// validating function
function validateEmail(email) {
    var schema = {
        "type": Joi.string(),
        "to": Joi.string().email().allow(''),
        "from": Joi.string().email(),
        "fromName": Joi.string(),
        "fromEmail": Joi.string().email(),
        "date": Joi.string(),
        "subject": Joi.string().trim().allow(''),
        "message": Joi.string().trim().allow('')
    };

    var result = Joi.validate(email, schema);
    return result;
}

// filtering function
function filterEmails(item, type, array) {
    if (item.type === type) {
        array.push(item);
    }
}

module.exports = router;