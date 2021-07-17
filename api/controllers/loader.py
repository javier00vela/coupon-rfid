from controllers import userController,storeController,planController,productController, personController
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

     #product routes
    app.add_url_rule('/API/products', view_func=productController.saveProduct , methods=["POST"])
    app.add_url_rule('/API/products/store/<idStore>', view_func=productController.allProductStore , methods=["GET"])
    app.add_url_rule('/API/products/plan/<idPlan>', view_func=productController.allProductPlan , methods=["GET"])
    app.add_url_rule('/API/products', view_func=productController.allProduct , methods=["GET"])
    app.add_url_rule('/API/products/<id>', view_func=productController.removeProduct , methods=["DELETE"])
    app.add_url_rule('/API/products/<id>', view_func=productController.putProduct , methods=["PUT"])
    app.add_url_rule('/API/products/<id>', view_func=productController.byIdProduct , methods=["GET"])

    #persons routes
    app.add_url_rule('/API/persons', view_func=personController.savePerson , methods=["POST"])
    app.add_url_rule('/API/persons', view_func=personController.allPerson , methods=["GET"])
    app.add_url_rule('/API/persons/<id>', view_func=personController.removePerson , methods=["DELETE"])
    app.add_url_rule('/API/persons/<id>', view_func=personController.putPerson , methods=["PUT"])
    app.add_url_rule('/API/persons/<id>', view_func=personController.byIdPerson , methods=["GET"])
    app.add_url_rule('/API/persons/rfid', view_func=personController.rfid , methods=["POST"])
    app.add_url_rule('/API/persons/coupons/<id>', view_func=personController.coupon_used , methods=["PUT"])

    
    