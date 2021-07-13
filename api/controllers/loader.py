from controllers import userController,storeController,planController
from flask import Flask


def loader_routes(app):
    app.add_url_rule('/API/authentication', view_func=userController.auth , methods=["POST"])

    #store routes
    app.add_url_rule('/API/stores', view_func=storeController.save , methods=["POST"])
    app.add_url_rule('/API/stores', view_func=storeController.all , methods=["GET"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.remove , methods=["DELETE"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.put , methods=["PUT"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.byId , methods=["GET"])

    #plans routes
    app.add_url_rule('/API/plans', view_func=planController.savePlan , methods=["POST"])
    app.add_url_rule('/API/plans', view_func=planController.allPlan , methods=["GET"])
    app.add_url_rule('/API/plans/<id>', view_func=planController.removePlan , methods=["DELETE"])
    app.add_url_rule('/API/plans/<id>', view_func=planController.putPlan , methods=["PUT"])
    app.add_url_rule('/API/plans/<id>', view_func=planController.byIdPlan , methods=["GET"])

