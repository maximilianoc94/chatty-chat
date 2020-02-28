from flask import Blueprint, request
from app import db, socketio
from app.media_module.model import Media


media_module = Blueprint('media', __name__, url_prefix='/media')


@media_module.route('/example/', methods=['POST'])
def example_endpoint():
    pass


@socketio.on('example')
def example_event():
    pass
