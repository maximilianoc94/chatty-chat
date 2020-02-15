from DTO import UserDTO
from ..app import socketio, app, db


class UserController:
    @socketio.on('login')
    def on_login(self, data):
        print(data)
