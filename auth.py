from flask import Blueprint, render_template, request, flash
from .models import User
from werkzeug.security import generate_password_hash,check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template("login.html")
     

@auth.route('/signup')
def Sign_up():
     return render_template("sign_up.html")

@auth.route('/home')
def home():
    return render_template("intex.html")

@auth.route('/tolist')
def tolist():
    return render_template("tolist.html")

@auth.route('/help')
def help():
    return render_template("help.html")

@auth.route('/noti')
def noti():
    return render_template("noti.html")

@auth.route('/org')
def org():
    return render_template("org.html")

@auth.route('/note')
def note():
    return render_template("notification.html")

@auth.route('/contact')
def contact():
    return render_template("contact.html")