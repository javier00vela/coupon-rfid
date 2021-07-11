
from models.DaoManager import DaoManager


class User(DaoManager):

    def __init__(self):
        self.TABLE = "user"
        super(DaoManager,self).__init__()


    def auth(self,email ,password):

        sql = f' SELECT person.* FROM {self.TABLE} INNER JOIN person on person.id = {self.TABLE}.person_id  WHERE email = "{email}" and password = "{password}" '
        print(sql)
        return self.findCustoming(sql)


