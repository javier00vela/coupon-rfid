from flask import Flask
from flask.config import Config
from flaskext.mysql import MySQL
from config import config


class Db:
    __CONECTION__ = False

    def __init__(self):
        if not self.__CONECTION__:
            self.__CONECTION__ = MySQL()
            self.__CONECTION__.init_app(config.app)


    def get_connection(self):
        return self.__CONECTION__.connect()