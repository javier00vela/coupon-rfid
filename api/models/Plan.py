
from models.DaoManager import DaoManager


class Plan(DaoManager):

    def __init__(self):
        self.TABLE = "cupon_kit"
        super(DaoManager,self).__init__()


    def save(self,plan):
        sql = f' INSERT INTO {self.TABLE} (name , description ,state) VALUES ("{plan["name"]}","{plan["description"]}" , 1 ) '
        return self.execute(sql)

    def save_products(self,product_id,plan_id ,amount):
        sql = f' INSERT INTO coupon_product (product_id , cupon_id , amount ,created_at) VALUES ("{product_id}","{plan_id}" , {amount}, now() ) '
        return self.execute(sql)

    def delete_products(self,plan_id):
        sql = f' DELETE FROM coupon_product WHERE cupon_id = "{plan_id}" '
        return self.execute(sql)
    
    def update(self,plan):
        sql = f' UPDATE {self.TABLE} SET name = "{plan["name"]}" , description="{plan["description"]}" WHERE id = "{plan["id"]}" '
        return self.execute(sql)

    def getAll(self):
        sql = f' SELECT * FROM {self.TABLE}  where state = 1'
        return self.findCustoming(sql)

    def getById(self, store):
        return self.findById(store["id"])

    def remove(self,id):
        sql = f' UPDATE {self.TABLE} SET state = 0  WHERE id = "{id}" '
        return self.execute(sql)