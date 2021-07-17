from models.Person import Person
from models.Plan import Plan
from helpers.controller import response
from flask_cors import  cross_origin
from flask import Flask, json ,request
from helpers.secure import validate_token 


app = Flask(__name__)


@app.route('/API/persons' , methods=['POST'])
@cross_origin()
def savePerson():
    person = Person()
    data = request.get_json(force=True)
    if person.getCountTarget(data["rfid"])[0]["cant"] == 0 :
        person_id = person.save(data)
        couponSelected = Plan.getPlanCoupons(person,data["type_asign"])
        for coupon in couponSelected:
            person.set_coupon(coupon , person_id)
    else:
        return response({"message":"Tarjeta asignada anteriormente"})
    return response({"message":"GUARDADO"})


@app.route('/API/persons' , methods=['GET'])
@cross_origin()
def allPerson():
    person = Person()
    persons = person.getAll()
    return response(persons)



@app.route('/API/persons' , methods=['POST'])
@cross_origin()
def byIdPerson(id):
    person = Person()
    personId = person.findById(id)
    return response(personId)

@app.route('/API/persons' , methods=['DELETE'])
@cross_origin()
def removePerson(id):
    person = Person()
    persons = person.remove(id)
    return response(persons)


@app.route('/API/persons' , methods=['PUT'])
@cross_origin()
def putPerson(id):
    person = Person()
    data = request.get_json(force=True)
    person.update(data)
    print(data["id"])
    couponSelected = Plan.getPlanCoupons(person,data["type_asign"])
    person.delete_coupons(data["id"])
    for coupon in couponSelected:
        person.set_coupon(coupon , data["id"])
    return response({"message":"ACTUALIZADO"})








