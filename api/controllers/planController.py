from models.Plan import Plan
from helpers.controller import response
from flask_cors import  cross_origin
from flask import Flask, json ,request
from helpers.secure import validate_token 


app = Flask(__name__)


@app.route('/API/plans' , methods=['POST'])
@cross_origin()
def savePlan():
    plan = Plan()
    data = request.get_json(force=True)
    plan.save(data)
    return response({"message":"GUARDADO"})


@app.route('/API/plans' , methods=['GET'])
@cross_origin()
def allPlan():
    plan = Plan()
    plans = plan.getAll()
    return response(plans)



@app.route('/API/plans' , methods=['POST'])
@cross_origin()
def byIdPlan(id):
    plan = Plan()
    planId = plan.findById(id)
    return response(planId)

@app.route('/API/plans' , methods=['DELETE'])
@cross_origin()
def removePlan(id):
    plan = Plan()
    plans = plan.remove(id)
    return response(plans)


@app.route('/API/plans' , methods=['PUT'])
@cross_origin()
def putPlan(id):
    plan = Plan()
    data = request.get_json(force=True)
    plans = plan.update(data)
    return response({"message":"ACTUALIZADO"})








