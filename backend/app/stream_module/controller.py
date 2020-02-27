from flask import Blueprint, request
from app import db, socketio
from app.stream_module.model import Stream


stream_module = Blueprint('stream', __name__, url_prefix='/stream')


@stream_module.route('/example/', methods=['POST'])
def example_endpoint():
    pass


@socketio.on('example')
def example_event():
    pass
