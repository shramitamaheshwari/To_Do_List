from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

tasks = []  # Store tasks in memory

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    tasks.append({"text": data["text"], "completed": False})
    return jsonify({"message": "Task added", "tasks": tasks})

@app.route('/tasks/<int:index>', methods=['PUT'])
def update_task(index):
    if 0 <= index < len(tasks):
        tasks[index]["completed"] = not tasks[index]["completed"]
        return jsonify({"message": "Task updated", "tasks": tasks})
    return jsonify({"error": "Invalid index"}), 400

@app.route('/tasks/<int:index>', methods=['DELETE'])
def delete_task(index):
    if 0 <= index < len(tasks):
        tasks.pop(index)
        return jsonify({"message": "Task deleted", "tasks": tasks})
    return jsonify({"error": "Invalid index"}), 400

if __name__ == '__main__':
    app.run(debug=True)
