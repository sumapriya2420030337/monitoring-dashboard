from flask import Flask, jsonify
from flask_cors import CORS
from simulator import generate_systems   # ✅ correct import

app = Flask(__name__)
CORS(app)

@app.route("/systems")
def systems():
    return jsonify(generate_systems())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)