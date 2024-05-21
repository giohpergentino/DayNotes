const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://giovannapergentino:CFmWN8Fe7AmUP2Vx@clusterdaynotes.os2zwjr.mongodb.net/annotation?retryWrites=true&w=majority&appName=ClusterDayNotes';

module.exports = mongoose.connection;