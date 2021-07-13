
from models.DaoManager import DaoManager


class Store(DaoManager):

    def __init__(self):
        self.TABLE = "store"
        super(DaoManager,self).__init__()


    def save(self,store):
        sql = f' INSERT INTO {self.TABLE} (name , address , phone , state) VALUES ("{store["name"]}","{store["address"]}","{store["phone"]}" , 1 ) '
        return self.execute(sql)

    
    def update(self,store):
        sql = f' UPDATE {self.TABLE} SET name = "{store["name"]}" , address="{store["address"]}" , phone="{store["phone"]}" WHERE id = "{store["id"]}" '
        return self.execute(sql)

    def getAll(self):
        sql = f' SELECT * FROM {self.TABLE}  where state = 1'
        return self.findCustoming(sql)

    def getById(self, store):
        return self.findById(store["id"])

    def remove(self,id):
        sql = f' UPDATE {self.TABLE} SET state = 0  WHERE id = "{id}" '
        return self.execute(sql)