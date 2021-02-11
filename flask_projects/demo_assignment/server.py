# ------------------------------------- #
from flask import Flask, render_template
app = Flask(__name__)
# ------------------------------------- #

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register")
def register():
    return render_template("registration.html")

@app.route("/dashboard")
def dash():
    # 1. REQUEST INFORMATION FROM DB
    name = "Edward"
    # 2. TAKE DB INFORMATION AND FILL HTML WITH INFORMATION
    return render_template("dashboard.html", name = name, age = 30)



@app.route("/m/<stack_id>/<module_id>/<page_id>")
def renderPage(stack_id, module_id, page_id):
    print(f"Stack ID: {stack_id}")
    print(f"Module ID: {module_id}")
    print(f"Page ID: {page_id}")
    return f"You are on {stack_id}, {module_id}, {page_id}"

# @app.route("/login")
# def login():
#     return "WELCOME TO LOGINE PAGE ENTER YOUR INFO"











# ------------------------------------- #
if __name__ == "__main__":
    app.run(debug = True)
# ------------------------------------- #