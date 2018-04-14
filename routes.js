'use strict'

var express = require('express');
var router = express.Router();
// GET /questions
// return all questions
router.get('/', function(req, res){
    res.json({response: "you sent me a get request"});
});

// POST /questions
// crate a new question
router.post('/', function(req, res){
    res.json({response: "you sent me a post request",
        body: req.body
    });
});

// GET /questions/:qID
// get specific question
router.get('/:qID', function(req, res){
    res.json({response: "you sent me a get request for questions:" + req.params.qID
    });
});


// POST /questions/:qID/answers
// crate a new answer for question :qID
router.post('/:qID/answers', function(req, res){
    res.json({response: "you sent me a post request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});


// PUT (UPDATE) /questions/:qID/answers/aID
// edit answer :aID for question :qID
router.put('/:qID/answers/:aID', function(req, res){
    res.json({response: "you sent me a put request to /answers",
        questionId: req.params.qID,
        answerID: req.params.aID,
        body: req.body
    });
});


// DELETE /questions/:qID/answers/aID
// delete answer :aID for question :qID
router.delete('/:qID/answers/:aID', function(req, res){
    res.json({response: "you sent me a delete request to /answers",
        questionId: req.params.qID,
        answerID: req.params.aID
    });
});



// POST /questions/:qID/answers/aID
// vote-up/vote-down on answer :aID for question :qID
router.post('/:qID/answers/:aID/vote-:dir', function(req, res, next){
        if (req.params.dir.search(/^(up|down)$/) === -1){
            var err = new Error("not found");
            err.status = 404;
            next(err);
        } else {
            next();
        }
    }, function(req, res){
        res.json({response: "you sent me a post request to /vote " + req.params.dir,
            questionId: req.params.qID,
            answerID: req.params.aID,
            vote: req.params.dir
        });
});







module.exports = router;
