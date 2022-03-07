import pandas as pd;
import numpy as np;
from flask import Flask, request, jsonify;
from final_stars import data;

app = Flask("PlanetDataSearch");

@app.route('/')
def get_data():
    name = request.args.get("planet_name");
    for i in data:
        if name == i['name']:
            return jsonify({
                "data" : i,
                "message" : 'success',
            }), 200
    
    
app.run(debug = True);
