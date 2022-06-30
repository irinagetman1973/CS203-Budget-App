from email import header
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User

#Initialising the application
app = Flask(__name__)
app.config.from_object(ApplicationConfig)
db.init_app(app)
bcrypt = Bcrypt(app)
cors = CORS(app, supports_credentials=True)
server_session = Session(app)

with app.app_context():
    db.create_all()

@app.route("/home")

def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    #Getting user by email
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 

@app.route("/signup", methods=["POST"])

def register_user():
    email = request.json["email"]
    password = request.json["password"]

    #Getting user by email
    user_exists = User.query.filter_by(email=email).first() 

    #Validate if the user has already registered
    if user_exists is not None:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "Message":"Successful"
    })

@app.route("/login", methods=["POST"])

def login_user():
    email = request.json["email"]
    password = request.json["password"]

    #Getting user by email
    user = User.query.filter_by(email=email).first()

    #Error message for if user is already registered
    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email,
        "Message":"Log in successful"
    })

@app.route("/logout", methods=["POST"])

def logout_user():
    session.pop("user_id")
    return "200"

if __name__ == "__main__":
    app.run(debug=True) 