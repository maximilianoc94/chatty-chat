from flask import Blueprint, request
from app import db, socketio
from app.message_module.model import Message


message_module = Blueprint('message', __name__, url_prefix='/message')


@message_module.route('/example/', methods=['POST'])
def example_endpoint():
    pass


@socketio.on('example')
def example_event():
    pass
