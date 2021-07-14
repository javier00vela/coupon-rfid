
from models.DaoManager import DaoManager


class Product(DaoManager):

    def __init__(self):
        self.TABLE = "product"
        super(DaoManager,self).__init__()

    def save(self,product):
        sql = f' INSERT INTO {self.TABLE} (name , description , image , store_id ,  state) VALUES ("{product["name"]}","{product["description"]}","{product["image"]}","{product["store_id"]}" , 1 ) '
        return self.execute(sql)

    def update(self,product):
        with_image = ''
        if product["image"]:
            with_image = f' , image="{product["image"]}" '
        sql = f' UPDATE {self.TABLE} SET name = "{product["name"]}" , description="{product["description"]}" {with_image} , store_id="{product["store_id"]}"  WHERE id = "{product["id"]}" '
        return self.execute(sql)

    def getAllStore(self , idStore):
        sql = f' SELECT name , description , id FROM {self.TABLE} where state = 1 and store_id = "{idStore}"'
        return self.findCustoming(sql)

    def getAll(self ):
        sql = f' SELECT name , description , id FROM {self.TABLE} where state = 1 '
        return self.findCustoming(sql)

    def getById(self, product):
        return self.findById(product["id"])

    def remove(self,id):
        sql = f' UPDATE {self.TABLE} SET state = 0  WHERE id = "{id}" '
        return self.execute(sql)