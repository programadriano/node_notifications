const axios = require('axios');

class MicrosoftTeamsClient {

    enviaNotificacaoParaMicrosoftTeams(token, title, message) {

        if (token == "")
            return 'Token é obrigatório!'

        let webhook = `https://vortxbr.webhook.office.com/webhookb2/${token}`

        axios.post(webhook, {
            "title": title,
            "text": message
        })

        return "Notificação enviada com sucesso!"


    }
}

module.exports = MicrosoftTeamsClient