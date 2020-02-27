from flask import Blueprint, request
from app import db, socketio
from app.user_module.model import User
from firebase_admin import auth

user_module = Blueprint('user', __name__, url_prefix='/user')


@user_module.route('/authenticate/', methods=['POST'])
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


@socketio.on('example')
def example_event():
    pass

