
from flask import Flask
from controllers.loader import loader_routes
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app , support_credentials=True)

loader_routes(app)

if __name__ == '__main__':
    app.run(host = '0.0.0.0' , debug = True)