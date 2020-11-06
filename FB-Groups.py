class User(models.Model):
    # created_groups = LIST OF ALL GROUPS THAT YOU HAVE CREATED
    # groups_joined = LIST OF ALL GROUPS THAT YOU BELONG TO

class Group(models.Model):
    name = models.CharField(max_length = 45)
    creator = models.ForeignKey(User, related_name = "created_groups")
    members = models.ManyToManyField(User, related_name = "groups_joined")