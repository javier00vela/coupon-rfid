from controllers import userController,storeController
from flask import Flask


def loader_routes(app):
    app.add_url_rule('/API/authentication', view_func=userController.auth , methods=["POST"])
    app.add_url_rule('/API/stores', view_func=storeController.save , methods=["POST"])
    app.add_url_rule('/API/stores', view_func=storeController.all , methods=["GET"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.remove , methods=["DELETE"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.put , methods=["PUT"])
    app.add_url_rule('/API/stores/<id>', view_func=storeController.byId , methods=["GET"])

