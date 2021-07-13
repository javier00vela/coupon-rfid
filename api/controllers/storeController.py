from models.Store import Store
from helpers.controller import response
from flask_cors import  cross_origin
from flask import Flask, json ,request
from helpers.secure import validate_token 


app = Flask(__name__)


@app.route('/API/stores' , methods=['POST'])
@cross_origin()
def save():
    store = Store()
    data = request.get_json(force=True)
    store.save(data)
    return response({"message":"GUARDADO"})


@app.route('/API/stores' , methods=['GET'])
@cross_origin()
def all():
    store = Store()
    stores = store.getAll()
    return response(stores)



@app.route('/API/stores' , methods=['POST'])
@cross_origin()
def byId(id):
    store = Store()
    storeId = store.findById(id)
    return response(storeId)

@app.route('/API/stores' , methods=['DELETE'])
@cross_origin()
def remove(id):
    store = Store()
    stores = store.remove(id)
    return response(stores)


@app.route('/API/stores' , methods=['PUT'])
@cross_origin()
def put(id):
    store = Store()
    data = request.get_json(force=True)
    stores = store.update(data)
    return response({"message":"ACTUALIZADO"})








