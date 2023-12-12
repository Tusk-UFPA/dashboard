#! /bin/bash

python -m venv venv 
source -m venv/bin/activate

python -m pip install --upgrade pip
python -m pip install -r requirement.txt

python3 server.py