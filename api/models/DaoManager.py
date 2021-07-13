from config.db import Db


class DaoManager(Db):
    TABLE = ''

    def __init__(self ):
        super(Db,self).__init__()

    def findAll(self):
        cur = self.get_connection().cursor()
        cur.execute(f'select * from {self.TABLE}')
        rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
        return rows
    
    def findCustoming(self , sql):
        cur = self.get_connection().cursor()
        cur.execute(sql)
        rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
        return rows

    def findById(self,id):
        cur = self.get_connection().cursor()
        cur.execute(f'select * from {self.TABLE} WHERE id = {id}')
        rows = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()][0]
        return rows


    def updateById(self,id , field ,value):
        cur = self.get_connection().cursor()
        cur.execute(f'DELETE FROM {self.TABLE} WHERE id = {id} and {field} = "{value}"')
        cur.commit()

    def deleteById(self,id):
        cur = self.get_connection().cursor()
        cur.execute(f'DELETE FROM {self.TABLE} WHERE id = {id}')
        cur.commit()

    def deleteByField(self,field ,value):
        cur = self.get_connection().cursor()
        cur.execute(f'DELETE FROM {self.TABLE} WHERE {field} = "{value}"')
        cur.commit()


    def execute(self,sql):
        cur = self.get_connection()
        cursor = cur.cursor()
        cursor.execute(sql)
        cur.commit()
        cur.close()
    