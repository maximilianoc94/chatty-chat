from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_socketio import SocketIO
from app.persistence.Persistence import Persistence
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("./shiwib-creds.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
app.config.from_object('config')
CORS(app)
mongo = PyMongo(app)

db = Persistence(mongo)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")

from app.user_module.controller import user_module
from app.chat_module.controller import chat_module
from app.message_module.controller import message_module
from app.media_module.controller import media_module
from app.stream_module.controller import stream_module
app.register_blueprint(user_module)
app.register_blueprint(chat_module)
app.register_blueprint(message_module)
app.register_blueprint(media_module)
app.register_blueprint(stream_module)

