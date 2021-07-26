from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'janicecaldeira.dev@gmail.com',
    "MAIL_PASSWORD": 'nice.dev.blue'
}

app.config.update(mail_settings)
mail = Mail(app)

class Contato:
   def __init__ (self, name, email, message):
      self.nome = name
      self.email = email
      self.mensagem = message

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/habilidades')
def sobremim():
   return render_template('habilidades.html')

@app.route('/projetos')
def projetos():
   return render_template('projetos.html')

@app.route('/contato')
def contato():
   return render_template('contato.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
   if request.method == 'POST':
      form = Contato(
         request.form['name'],
         request.form['email'],
         request.form['message']
      )

      msg = Message(
         subject= 'Contato do seu Portfolio',
         sender=app.config.get("MAIL_USERNAME"),
         recipients=[app.config.get("MAIL_USERNAME")],
         body=f'''
         🇳​​​​​🇴​​​​​🇻​​​​​🇦​​​​​ 🇲​​​​​🇪​​​​​🇳​​​​​🇸​​​​​🇦​​​​​🇬​​​​​🇪​​​​​🇲​​

         {form.nome} com o e-mail {form.email}, enviou a seguinte mensagem: 
         
        {form.mensagem}''' 
         )
      mail.send(msg)
   return render_template('send.html',form=form)

if __name__ == '__main__':
   app.run(debug=True)