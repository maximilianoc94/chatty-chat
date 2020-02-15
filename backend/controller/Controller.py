from DTO import UserDTO, ChatDTO,  MessageDTO, MediaDTO, StreamDTO
from ..app import socketio, app, db

from .UserController import UserController
from .ChatController import ChatController
from .MessageController import MessageController
from .MediaController import MediaController
from .StreamController import StreamController


class Controller:
    def __init__(self):
        UserController()
        ChatController()
        MessageController()
        MediaController()
        StreamController()



