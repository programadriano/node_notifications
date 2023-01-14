const { WebClient } = require('@slack/web-api')
const slackConfig = require("../config/slackConfig")


class SlackService {

    async enviaNotificacaoParaSlack(channelId, message) {

        if (channelId != "" && message != "") {
            const web = new WebClient(slackConfig.token)
            console.log(slackConfig.token);

            await web.chat.postMessage({
                channel: channelId,
                text: message
            })

            return "Notificação enviada com sucesso!"
        } else {
            return "Os campos: canal e mensagem são obrigatórios!"
        }


    }
}

module.exports = SlackService