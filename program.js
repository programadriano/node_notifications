const express = require('express')
const bodyParser = require('body-parser');
const SlackClient = require("./src/services/slackService");
const MicrosoftTeamsClient = require('./src/services/microsoftTeamsService');

const app = express()
app.use(bodyParser.json());

const port = 3000

app.post('/teams', function (req, res) {
    try {
        const title = req.body.title;
        const message = req.body.message;
        const token = req.headers['x-token-auth'];
        console.log(token);

        let client = new MicrosoftTeamsClient();
        var send = client.enviaNotificacaoParaMicrosoftTeams(token, title, message)

        res.json(send);
    } catch (err) {
        res.status(500).send(err.message);
    }

})

app.post('/slack', async function (req, res) {
    try {
        const channelId = req.body.channelId;
        const message = req.body.message;

        let slackNotification = new SlackClient();
        var send = await slackNotification.enviaNotificacaoParaSlack(channelId, message);

        res.json(send);
    } catch (err) {
        res.status(500).send(err.message);
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})