const express = require('express');
const routers = express.Router();
const {postmru, postscancscan, postBanker, returnText} = require('./controllers/controllers');

//scan-cscan
routers.post('/simulation_cscan_scan', postscancscan);
// routers.get('/get_scan_cscan', 'get contr');

//bankers
routers.post('/simulation_bankers', postBanker);
// routers.get('/get_bankers', 'getcontr');

//mru
routers.post('/mru', postmru);
// routers.get('/get_mru', 'getcontr');

routers.get('/chatbot', returnText);

module.exports = routers;
