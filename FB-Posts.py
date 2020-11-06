class User(models.Model):
    # posts = LIST OF ALL POSTS CREATED BY USER
    # comments = LIST OF ALL COMMENTS CREATED BY USER

class Post(models.Model):
    author = models.ForeignKey(User,related_name = "posts", on_delete = models.CASCADE)
    # comments = LIST OF ALL COMMENTS BELONGING TO THIS POST

class Comment(models.Model):
    article = models.ForeignKey(Post, related_name = "comments", on_delete = models.CASCADE)
    commentor = models.ForeignKey(User, related_name = "comments", on_delete = models.CASCADE)
