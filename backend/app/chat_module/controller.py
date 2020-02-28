from flask import Blueprint, request
from app import db, socketio
from app.chat_module.model import Chat


chat_module = Blueprint('chat', __name__, url_prefix='/chat')


@chat_module.route('/example/', methods=['POST'])
def example_endpoint():
    pass


@socketio.on('example')
def example_event():
    pass
