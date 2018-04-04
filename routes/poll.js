const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const Vote = require('../models/Vote')
router.get('/', (req, res) => {
    Vote.find().then(votes => res.json( {message: 'success', votes: votes} ))
})

var pusher = new Pusher({
    appId: '503500',
    key: '5ebaadb47f5d037c114e',
    secret: 'cf74c366761e5bb2d889',
    cluster: 'ap2',
    encrypted: true
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os,
        points: 1
    }
    
    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: req.body.os
        });
    })
    
    return res.json( { 'status': 'sucess', 'message': 'Thank you'} );
})

module.exports = router