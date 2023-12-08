from src import app 
from flask import render_template, url_for
import json

fs = open("src/data/data.json","r")

data=json.load(fs)
print(data['sola']['time'][0])
# url_for('static')
# url_for('static', filename='style.css')
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sola')
def sola():
    return  data