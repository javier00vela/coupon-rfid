
from config.db import Db
from models.User import User
from helpers.controller import response
from flask_cors import CORS, cross_origin
from flask import Flask , request
from helpers import secure
from helpers.secure import validate_token , encode_string


app = Flask(__name__)


@app.route('/' , methods=['GET'])
def index():
    usuario = User()
    idUser = usuario.findAll()
    return response(idUser)


@app.route('/API/authentication' , methods=['POST'])
@cross_origin()
def auth():
    data = request.get_json(force=True)
    usuario = User()
    print(data["email"] )
    authed = {}
    authed = usuario.auth(data["email"] , encode_string(data["password"]) )
    if authed : 
        return response({
            "token": secure.generate_token(authed)
        })

    return response({
        'message': "El usuario y/o contraseña son incorrectos!"
    })


@app.route('/API/validate' , methods=['GET'])
@cross_origin()
@validate_token
def validate():
    usuario = User()
    idUser = usuario.findAll()
    return response({
        "token": secure.generate_token(idUser)
    })

