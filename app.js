const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.get("/send-email", async (req, res) =>{


    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "13d90cfb0ae15d",
          pass: "bb6b2e3cea138d"
        }
      })

      var message = {
        from: "noreplay@teste.com",
        to: "teste@gmail.com",
        subject: "Recuperar senha",
        text: "Prezado(a) osmar, você solicitou alteração de senha.",
        html: "<p>HTML version of the message</p>"
      };

    transport.sendMail(message, function(err){
        if (err) return res.status(400).json({
            erro:true,
            mensagem:"Erro: E-mail não enviado com sucesso!"
        })

        return res.json({
            erro: false,
            mensagem: "E-mail enviado com sucesso!"
        });

    })

})


app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080:http://localhost:8080")
})