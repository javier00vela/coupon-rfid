from controllers import userController
from flask import Flask


def loader_routes(app):
    app.add_url_rule('/API/', view_func=userController.index)
    app.add_url_rule('/API/authentication', view_func=userController.auth , methods=["POST"])
    app.add_url_rule('/API/validate', view_func=userController.validate , methods=["GET"])
    
