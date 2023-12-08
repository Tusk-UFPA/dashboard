#! /bin/bash

python -m venv venv 
source venv/bin/activate

python pip install --upgrade pip
python pip install -r requirement.txt

flask app server.py run --reload 