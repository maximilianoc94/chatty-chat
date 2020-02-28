from bson.json_util import dumps


class User:
    def __init__(self, mongo):
        self.collection = mongo.db.Users

    def create(self, user):
        new_user = user.json()
        self.collection.insert_one(new_user)
        return dumps(new_user)

    def read(self, email):
        found_user = self.collection.find_one({"email": email})
        return None if found_user is None else dumps(found_user)

    def update(self):
        pass

    def delete(self):
        pass
