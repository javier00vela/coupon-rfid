from models.Product import Product
from helpers.controller import response
from flask_cors import  cross_origin
from flask import Flask, json ,request
from helpers.secure import validate_token 


app = Flask(__name__)


@app.route('/API/products' , methods=['POST'])
@cross_origin()
def saveProduct():
    product = Product()
    data = request.get_json(force=True)
    product.save(data)
    return response({"message":"GUARDADO"})


@app.route('/API/products/store/' , methods=['GET'])
@cross_origin()
def allProductStore(idStore):
    product = Product()
    products = product.getAllStore(idStore)
    return response(products)

@app.route('/API/products' , methods=['GET'])
@cross_origin()
def allProduct():
    product = Product()
    products = product.getAll()
    return response(products)

@app.route('/API/products' , methods=['POST'])
@cross_origin()
def byIdProduct(id):
    product = Product()
    productId = product.findById(id)
    return response(productId)

@app.route('/API/products' , methods=['DELETE'])
@cross_origin()
def removeProduct(id):
    product = Product()
    products = product.remove(id)
    return response(products)


@app.route('/API/products' , methods=['PUT'])
@cross_origin()
def putProduct(id):
    product = Product()
    data = request.get_json(force=True)
    products = product.update(data)
    return response({"message":"ACTUALIZADO"})








