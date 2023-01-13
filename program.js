const express = require('express')
const bodyParser = require('body-parser');
const SlackClient = require("./src/services/slackService")

const app = express()
app.use(bodyParser.json());

const port = 3000

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