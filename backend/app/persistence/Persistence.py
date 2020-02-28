from .User import User
from .Chat import Chat
from .Message import Message
from .Media import Media
from .Stream import Stream


class Persistence:
    def __init__(self, mongo):
        self._mongo = mongo
        self.user = User(mongo)
        self.chat = Chat(mongo)
        self.message = Message(mongo)
        self.media = Media(mongo)
        self.stream = Stream(mongo)