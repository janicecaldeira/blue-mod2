from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy

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

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://oceguner:A3_E_vkSUh6ZaQ1AR4VoQXlD1eLsAssB@kesavan.db.elephantsql.com/oceguner'
db = SQLAlchemy(app)

class Contato:
   def __init__ (self, name, email, message):
      self.nome = name
      self.email = email
      self.mensagem = message

class Projeto(db.Model):
   id = db.Column(db.Integer, primary_key = True, autoincrement = True)
   nome = db.Column(db.String(150), nullable = False)
   imagem = db.Column(db.String(500), nullable = False)
   descricao = db.Column(db.String(500), nullable = False)
   link = db.Column(db.String(300), nullable = False)
   
   def __init__(self, nome, imagem, descricao, link):
      self.nome = nome
      self.imagem = imagem
      self.descricao = descricao
      self.link = link

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

@app.route('/adm')
def adm():
   projetos = Projeto.query.all()
   return render_template('adm.html', projetos=projetos)

@app.route('/new', methods=['GET', 'POST'])
def new():
   if request.method == 'POST':
      projeto = Projeto(
         request.form['nome'],
         request.form['imagem'],
         request.form['descricao'],
         request.form['link']
      )
      db.session.add(projeto)
      db.session.commit()
      return redirect('/adm')

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
   db.create_all()
   app.run(debug=True)