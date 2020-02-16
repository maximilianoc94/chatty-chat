from flask import Flask
from flask_pymongo import PyMongo
from flask_socketio import SocketIO
from persistence.Persistence import Persistence

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/chatty-chat-dev"

mongo = PyMongo(app)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")


@socketio.on('login')  # TODO: Move to a user class namespace
def on_login(user):
    print(user)
    socketio.emit('login response', 'user logged')


db = Persistence(mongo)

# TODO: define events, crud
# TODO: implement client-server socket communications

if __name__ == '__main__':
    socketio.run(app, debug=True)
