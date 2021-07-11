from flask import  jsonify

def  response(json):
    try:
        return jsonify(json)
    except:
        return []