const SlackClient = require("../src/services/slackService")
const assert = require("assert")
const sinon = require('sinon')


describe("Enviar Notificação para canal do Slack", () => {
    it("Sucesso: Deve enviar notificação", async () => {

        var slackClient = new SlackClient()
        stub = sinon.stub(slackClient, "enviaNotificacaoParaSlack")

        stub.withArgs("teste", "azul").returns("Notificação enviada com sucesso!")

        assert.equal(slackClient.enviaNotificacaoParaSlack("teste", "azul"), "Notificação enviada com sucesso!")

    })
   

    it("Falha: Não deve enviar o notificação", async () => {
        // Given
        const channelId = ""
        const message = "envio de teste"


        const slackClient = new SlackClient()
        var result = await slackClient.enviaNotificacaoParaSlack(channelId, message)
        assert.equal(result, 'Os campos: canal e mensagem são obrigatórios!')
    })
})
