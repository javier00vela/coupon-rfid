
from models.DaoManager import DaoManager


class Person(DaoManager):

    def __init__(self):
        self.TABLE = "person"
        super(DaoManager,self).__init__()

    def save(self,person):
        sql = f' INSERT INTO {self.TABLE} (name , lastname , type_document , document ,  phone , rfid , rol_id , state) VALUES ("{person["name"]}","{person["lastname"]}","{person["type_document"]}","{person["document"]}","{person["phone"]}","{person["rfid"]}","{person["rol"]}" , 1 ) '
   
        return self.execute(sql)

    def set_coupon(self,coupon_person , person_id):
        sql = f' INSERT INTO {self.TABLE} ( person_id , coupon_product_id , amount ) VALUES ("{person_id}" , "{coupon_person["id"]}",  "{coupon_person["amount"]}" ) '
        return self.execute(sql)

    def delete_coupons(self, person_id):
        sql = f' DELETE FROM coupon_person WHERE person_id = "{person_id}" '
        return self.execute(sql)


    def update(self,person):
        sql = f' UPDATE {self.TABLE} SET name = "{person["name"]}" , lastname="{person["lastname"]}" , type_document="{person["type_document"]}" , phone="{person["phone"]}" , rfid="{person["rfid"]}" , rol_id="{person["rol"]}" WHERE id = "{person["id"]}" '
        return self.execute(sql)

    def getCountTarget(self , rfid):
        sql = f' SELECT count(*) as cant FROM {self.TABLE}  where rfid = "{rfid}" and state = 1'
        return self.findCustoming(sql)
    
    def getAll(self):
        sql = f' SELECT * FROM {self.TABLE}  where state = 1 and rol_id = 2'
        return self.findCustoming(sql)

    def getById(self, person):
        return self.findById(person["id"])

    def remove(self,id):
        sql = f' UPDATE {self.TABLE} SET state = 0  WHERE id = "{id}" '
        return self.execute(sql)