class UserDTO:
    def __init__(self, email, nickname=None, profile_pic=None):
        self.email = email
        self.nickname = nickname if not None else email
        self.profile_pic = profile_pic
        self.is_online = False
        self.friends = set()
        self.chats_list = set()
        self.pinned_chats = set()
        self.starred_msgs = set()
