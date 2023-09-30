const app = require('express')();
const cors = require('cors')
const videos = require('./videos.json');

app.use(cors())

app.get('/', (req, res) => res.send(`
    <h1>Rotas: <br> 
    <a href='http://localhost:3000/js'>javascript</a> <br>
    <a href='http://localhost:3000/html'>html</a> <br>
    <a href='http://localhost:3000/vscode'>vscode</a>
    </h1>
`))

app.get('/js', (req, res) => res.send(videos.js));

app.get('/html', (req, res) => res.send(videos.html))

app.get('/vscode', (req, res) => res.send(videos.vscode))

app.listen(process.env.PORT || 3000, () => console.log('servidor aberto em http://localhost:3000'))