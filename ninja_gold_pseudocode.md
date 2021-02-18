# HTML FILES
 - ONLY NEED ONE HTML FILE
    - 4 Forms (EACH FORM IS GOING TO HAVE A HIDDEN INPUT)
        <input type="hidden" name="which_form" value="farm">
        <input type="hidden" name="which_form" value="cave">
        <input type="hidden" name="which_form" value="house">
        <input type="hidden" name="which_form" value="casino">
    - Gold Amount Display {{request.session.gold}}
    - Activity Log (USE A FOR LOOP {% for something in request.session.activities %})

# URLS.PY
1. path("", views.index) -> RENDER THE HTML PAGE 
2. path("process_money", views.process) -> DETERMINE THE AMOUNT OF GOLD AND ADD TO TOTAL GOLD

# VIEWS.PY
def index(request):
    INITIALIZE GOLD TO 0 IN SESSION IF THIS IS YOUR FIRST TIME VISITING NINJA GOLD
     - request.session['gold'] = 0
    INITIALIZE ACTIVITIES TO [] IN SESSION IF THIS IS YOUR FIRST TIME VISITING NINJA GOLD
     - request.session['activities'] = []

    return render(request, "index.html")


def process(request):
    if request.POST['which_form'] == "farm":
        CHOOSE RANDOM AMOUNT BETWEEN 10 ~ 20 AND ADD TO GOLD IN SESSION
        CREATE A LOG STRING AND APPEND TO ACTIVITIES IN SESSION
        string = f"Earned {} gold from Farm!!"
    elif request.POST['which_form'] == "cave":
        CHOOSE RANDOM AMOUNT BETWEEN 5 ~ 10 AND ADD TO GOLD IN SESSION
        CREATE A LOG STRING AND APPEND TO ACTIVITIES IN SESSION
        string = f"Earned {} gold from Cave!!"
    elif request.POST['which_form'] == "house":
        CHOOSE RANDOM AMOUNT BETWEEN 2 ~ 5 AND ADD TO GOLD IN SESSION
        CREATE A LOG STRING AND APPEND TO ACTIVITIES IN SESSION
        string = f"Earned {} gold from House!!"

    elif request.POST['which_form'] == "casino":
        CHOOSE RANDOM AMOUNT BETWEEN -50 ~ 50 AND ADD TO GOLD IN SESSION
        CREATE A LOG STRING AND APPEND TO ACTIVITIES IN SESSION

    return redirect("/")