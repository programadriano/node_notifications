const MicrosoftTeamsClient = require("../src/services/microsoftTeamsService")
const assert = require("assert")
const sinon = require('sinon')


describe("Enviar Notificação para canal do Teams", () => {
    it("Sucesso: Deve enviar notificação", async () => {

        var client = new MicrosoftTeamsClient()
        stub = sinon.stub(client, "enviaNotificacaoParaMicrosoftTeams")

        stub.withArgs('token', 'title', 'message').returns("Notificação enviada com sucesso!")

        console.log(client.enviaNotificacaoParaMicrosoftTeams('token', 'title', 'message'));

        assert.equal(client.enviaNotificacaoParaMicrosoftTeams('token', 'title', 'message'), "Notificação enviada com sucesso!")
    })

    it("Falha: Não deve enviar o notificação", async () => {
        var client = new MicrosoftTeamsClient()
        var result = client.enviaNotificacaoParaMicrosoftTeams('', 'title', 'message')
        assert.equal(result, 'Token é obrigatório!')
    })

})
