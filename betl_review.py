class User(models.Model):
    # hosted_events = LIST OF ALL EVENTS THAT USER IS HOSTING
    # attended_events =LSIT OF ALL EVENTS THAT USER IS ATTENDING

    # event_messages = LIST OF ALL MESSAGES YOU HAVE POSTED

class Event(models.Model):
    host = models.ForeignKey(User, related_name = "hosted_events")
    attendees = models.ManyToManyField(User, related_name = "attended_events")

    # messages = LIST OF ALL MESSAGES THAT BELONG TO THIS EVENT

class Message(models.Model):
    writer = models.ForeignKey(User, related_name = "event_messages")
    event = models.ForeignKey(Event, related_name = "messages")