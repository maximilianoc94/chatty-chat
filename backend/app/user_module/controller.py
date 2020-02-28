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
        user_response = db.user.read(decoded_token['email'])
        if user_response is None:
            new_user = User(decoded_token['email'], decoded_token['name'], decoded_token['picture'])
            user_response = db.user.create(new_user)
            return user_response
        return user_response


@socketio.on('example')
def example_event():
    pass

