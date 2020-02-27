class Message:
    def __init__(self, user, data, timestamp, reply=None):
        self.user = user
        self.data = data
        self.timestamp = timestamp
        self.reply = reply
        self.deleted_by = set()

    def __repr__(self):
        return f'<Message by {self.user}>'
