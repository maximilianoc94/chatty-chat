from flask import Flask, render_template
from flask_pymongo import PyMongo
from flask_socketio import SocketIO

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/chatty-chat-dev"

mongo = PyMongo(app)
socketio = SocketIO(app)

# pass the mongo instance to the persistance layer
# pass the socketio instance to the controllers layer
# define events, models and crud

if __name__ == '__main__':
    socketio.run(app)
