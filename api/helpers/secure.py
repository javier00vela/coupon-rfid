
from jwt import encode ,decode
from config import config
from flask import request
import base64

def encode_string(string):
    return string

def generate_token(json):
    return encode({'payload' : json} , config.app.config["TOKEN"], algorithm='HS256')


def validate_token(fun):
    def wrapper():
        try:
            variable = request.headers.get('Authorization')
            payload = decode( variable , config.app.config["TOKEN"] ,algorithms=["HS256"])
            if not payload:
                return {'message':'Unauthorized','status': 401}
            return fun()
        except:
                return {'message':'Unauthorized','status': 401}
    return wrapper

