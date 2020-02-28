class User:
    def __init__(self, email, nickname=None, profile_pic=None):
        self.email = email
        self.nickname = nickname if not None else email
        self.profile_pic = profile_pic
        self.is_online = False
        self.friends = set()
        self.chats_list = set()
        self.pinned_chats = set()
        self.starred_msgs = set()

    def __repr__(self):
        return f'<User {self.nickname}>'

    def json(self):
        return {
            "email": self.email,
            "nickname": self.nickname,
            "profile_pic": self.profile_pic,
            "is_online": self.is_online,
            "friends": list(self.friends),
            "chats_lists": list(self.chats_list),
            "pinned_chats": list(self.pinned_chats),
            "starred_msgs": list(self.starred_msgs)
        }
