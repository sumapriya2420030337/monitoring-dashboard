from flask import Flask, jsonify
from flask_cors import CORS
import random
import time
from datetime import datetime

app = Flask(__name__)
CORS(app)

systems_data = []
history = []

def generate_system():
    return {
        "name": f"Server-{random.randint(1,5)}",
        "cpu": random.randint(10, 100),
        "memory": random.randint(10, 100),
        "disk": random.randint(10, 100),
        "status": "Running"
    }

@app.route("/systems", methods=["GET"])
def get_systems():
    global systems_data, history

    systems_data = [generate_system() for _ in range(5)]

    timestamp = datetime.now().strftime("%H:%M:%S")

    history.append({
        "time": timestamp,
        "data": systems_data
    })

    if len(history) > 10:
        history.pop(0)

    return jsonify(systems_data)


@app.route("/history", methods=["GET"])
def get_history():
    return jsonify(history)


if __name__ == "__main__":
    app.run(debug=True)