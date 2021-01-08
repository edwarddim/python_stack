from flask import Flask, render_template
app = Flask(__name__)

@app.route("/play")
def index():
    color="blue"
    return render_template("index.html", num=3, tempColor=color)

@app.route("/play/<jambalaya>")
def two(jambalaya):
    # num = int(jambalaya)
    return render_template("index.html", num=int(jambalaya), tempColor="blue")

@app.route("/play/<x>/<color>")
def color(x,color):
    return render_template("index.html", num = int(x), tempColor=color)

if __name__ == "__main__":
    app.run(debug=True)