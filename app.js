const app = require('express')();
const cors = require('cors')
const videos = require('./videos.json');

app.use(cors())

app.get('/', (req, res) => res.send(videos));

app.listen(process.env.PORT || 3000, () => console.log('servidor aberto em http://localhost:3000'))