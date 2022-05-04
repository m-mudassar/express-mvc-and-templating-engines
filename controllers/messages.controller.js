const path = require('path')

function getMessages(req, res) {
    res.render('messages', {
        title: 'My friends are verrry clever',
        friend: 'Mudassar',
    })
}

function postMessage(req, res) {
    res.send('Updating message............')
}

module.exports = {
    postMessage,
    getMessages
}