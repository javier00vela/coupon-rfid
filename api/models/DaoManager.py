from config.db import Db


class DaoManager(Db):
    TABLE = ''

    def __init__(self ):
        super(Db,self).__init__()

    def findAll(self):
        try:
            cur = self.get_connection().cursor()
            cur.execute(f'select * from {self.TABLE}')
            rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
            return rows
        except:
            return []
    
    def findCustoming(self , sql):
        try:
            cur = self.get_connection().cursor()
            cur.execute(sql)
            rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
            return rows
        except:
            return []

    def findById(self,id):
        try:
            cur = self.get_connection().cursor()
            cur.execute(f'select * from {self.TABLE} WHERE id = {id}')
            rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()][0]
            return rows
        except:
            raise ValueError("Error al procesar la consulta")


    def updateById(self,id , field ,value):
        try:
            cur = self.get_connection().cursor()
            cur.execute(f'DELETE FROM {self.TABLE} WHERE id = {id} and {field} = "{value}"')
            cur.commit()
        except:
            return False

    def deleteById(self,id):
        try:
            cur = self.get_connection().cursor()
            cur.execute(f'DELETE FROM {self.TABLE} WHERE id = {id}')
            cur.commit()
        except:
            return False

    def deleteByField(self,field ,value):
        try:
            cur = self.get_connection().cursor()
            cur.execute(f'DELETE FROM {self.TABLE} WHERE {field} = "{value}"')
            cur.commit()
        except:
            return False

    def execute(self,sql):
        try:
            cur = self.get_connection()
            cursor = cur.cursor()
            cursor.execute(sql)
            cur.commit()
            id = cursor.lastrowid
            cur.close()
            return id
        except:
            return False