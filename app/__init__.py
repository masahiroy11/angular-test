from flask import Flask
# from flask.ext.sqlalchemy import SQLAlchemy

# app = Flask(__name__, static_folder='static', static_url_path='')
app = Flask(__name__, static_url_path='')
# app.config.from_object('config')
# db = SQLAlchemy(app)


# from app.models import hoge
from app.routes import index

# from app.routes import hoges
