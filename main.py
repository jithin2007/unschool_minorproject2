from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods={"GET", "POST"})
def home():
    return "Hello There!"


app.run(debug=True)
