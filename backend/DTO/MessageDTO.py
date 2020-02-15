class MessageDTO:
    def __init__(self, user, data, timestamp, reply=None):
        self.user = user
        self.data = data
        self.timestamp = timestamp
        self.reply = reply
        self.deleted_by = set()