from flask import Flask

app = Flask(__name__)

#config general parameters 
app.config['DEBUG'] = True
app.config['TOKEN'] = "RFID_CARD_PROJECT"

#config batabase parameters
app.config['MYSQL_DATABASE_USER'] = 'test'
app.config['MYSQL_DATABASE_PASSWORD'] = 'test2'
app.config['MYSQL_DATABASE_DB'] = 'coupon_db'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'


#cors
app.config['CORS_HEADERS'] = 'Content-Type'

#jwt
app.config["JWT_ROUTER_API_NAME"] = "/api"
app.config["WHITE_LIST_ROUTES"] = [
    ("POST", "/authentication"),
]