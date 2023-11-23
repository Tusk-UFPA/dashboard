from src import app 
from flask import render_template, url_for
import json

fs = open("src/data/data.json","r")

data=json.load(fs)

# url_for('static')
# url_for('static', filename='style.css')
@app.route('/')
def home():
    return render_template('index.html', data=data)