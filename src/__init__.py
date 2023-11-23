from flask import Flask

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config.update(
    TEMPLATES_AUTO_RELOAD=True
)
from src import routes