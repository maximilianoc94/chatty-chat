class Chat:
    def __init__(self, members, group_name=None, group_pic=None):
        self.members = members
        self.group_name = group_name
        self.group_pic = group_pic
        self.is_group_chat: len(members) > 2
        self.messages_list = set()

    def __repr__(self):
        return f'<Chat>'
