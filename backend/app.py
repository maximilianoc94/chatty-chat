from flask import Flask, request, abort
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_socketio import SocketIO
from persistence.Persistence import Persistence
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("./shiwib-creds.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/chatty-chat-dev"
CORS(app)
mongo = PyMongo(app)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")

# TODO: define events, crud
# TODO: implement client-server socket communications
# @socketio.on('login')  # TODO: Move to a user class namespace
# def on_login(user):
#     print(user)
#     socketio.emit('login response', 'user logged')

db = Persistence(mongo)


@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    if request.method == 'POST':
        data = request.get_json(silent=True)
        token = data.get('token')
        decoded_token = auth.verify_id_token(token)
        # TODO: check if new user and add it to db
        # db.user.read(decoded_token['email'])
        return {
            "email": decoded_token['email'],
            "name": decoded_token['name'],
            "picture": decoded_token['picture']
        }


if __name__ == '__main__':
    socketio.run(app, debug=True)
