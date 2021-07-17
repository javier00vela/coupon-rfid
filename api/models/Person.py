
from models.DaoManager import DaoManager


class Person(DaoManager):

    def __init__(self):
        self.TABLE = "person"
        super(DaoManager,self).__init__()

    def save(self,person):
        sql = f' INSERT INTO {self.TABLE} (name , lastname , type_document , document ,  phone , rfid , rol_id , state) VALUES ("{person["name"]}","{person["lastname"]}","{person["type_document"]}","{person["document"]}","{person["phone"]}","{person["rfid"]}","{person["rol"]}" , 1 ) '
        return self.execute(sql)

    def set_coupon(self,coupon_person , person_id):
        sql = f' INSERT INTO coupon_person ( person_id , coupon_product_id , amount ) VALUES ("{person_id}" , "{coupon_person["id"]}",  "{coupon_person["amount"]}" ) '
        return self.execute(sql)

    def findRfid(self, data):
        sql = f' SELECT * FROM {self.TABLE}  where state = 1 and rfid = "{data["rfid"]}"'
        return self.findCustoming(sql)

    def findCouponsPerson(self, person):
        sql = f'SELECT 0 as used , coupon_person.id as id_coupon_product,coupon_person.amount as amount_user,coupon_product.amount as amount_avalaible,product.name as product_name,product.image as product_image,store.name as store_name,cupon_kit.name as coupon_store FROM person INNER JOIN coupon_person ON coupon_person.person_id = person.id  INNER JOIN coupon_product ON  coupon_person.coupon_product_id = coupon_product.id INNER JOIN product on product.id = coupon_product.product_id INNER JOIN store ON store.id = product.store_id INNER JOIN cupon_kit ON cupon_kit.id = coupon_product.cupon_id where person.state = 1 and person.id= "{person["id"]}"'
        return self.findCustoming(sql)

    def delete_coupons(self, person_id):
        sql = f' DELETE FROM coupon_person WHERE person_id = "{person_id}" '
        return self.execute(sql)


    def update(self,person):
        sql = f' UPDATE {self.TABLE} SET name = "{person["name"]}" , lastname="{person["lastname"]}" , type_document="{person["type_document"]}" , phone="{person["phone"]}" , rfid="{person["rfid"]}" , rol_id="{person["rol"]}" WHERE id = "{person["id"]}" '
        return self.execute(sql)

    def consumed(self,data):
        if  data["amount_user"] - data["used"] > 0:
            sql = f' UPDATE coupon_person SET amount = "{data["amount_user"] - data["used"]}" WHERE id = "{data["id_coupon_product"]}" '
            print(sql)
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