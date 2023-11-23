from src import app 
from flask import render_template, url_for

# url_for('static')
# url_for('static', filename='style.css')
@app.route('/')
def home():
    return render_template('index.html')