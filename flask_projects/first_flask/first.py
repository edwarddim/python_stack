#----------------------------------------#
# TOP CONFIG
from flask import Flask, render_template #importing Flask
app = Flask(__name__) #creating a new instance of a server
#----------------------------------------#

@app.route("/") # listening for request on "localhost:5000"
def index():
    # GO RETRIEVE SOME DATA FROM MY DB
    name = "Edward"
    age = 30
    address = "123 Something Street"

    return render_template("index.html", 
    templateName=name, templateAge = age,templateAddress = address,times=10
    )

@app.route("/hello") # listening for requets on "localhost:5000/hello"
def hello():
    return render_template("hello.html")

@app.route("/m/<stack_id>/<module_id>/<page_id>")
def page(stack_id,module_id,page_id):
    print(stack_id)
    print(module_id)
    print(page_id)
    # USE THE IDS TO RETRIEVE INFORMATION FROM DB
    return f"{stack_id} {module_id} {page_id}"  

@app.route("/m/1/1/1")

@app.route("/shows/<show_id>")
def show(show_id):
    # =GRAB THE SHOW INFORMATION USING SHOW_ID
    return f"{show_id}"


#----------------------------------------#
# BOTTOM CONFIG
if __name__ == "__main__":
    app.run(debug=True) # starting the Flask server with debug mode on
#----------------------------------------#