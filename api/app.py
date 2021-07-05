from flask import Flask, jsonify
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['DEBUG'] = True

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'test'
app.config['MYSQL_DATABASE_DB'] = 'coupon_db'
app.config['MYSQL_DATABASE_HOST'] = 'db'


mysql.init_app(app)
 
@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from user''')
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

if __name__ == '__main__':
    app.run(host = '0.0.0.0' , debug = True)