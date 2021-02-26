# ---------------------------------------------------------------------------------------- #
# FACEBOOK ONE USER CAN CREATE MANY POSTS / POST CAN BE CREATED BY ONE USER
# ONE USER CAN LIKE MANY POSTS / ONE POST CAN BE LIKED BY MANY USERS
class User(models.Model):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # posts = LIST OF ALL POSTS CREATED BY THIS USER
    # liked_posts = LIST OF ALL THE POSTS THIS USER LIKES

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Post(models.Model):
    title = models.CharField(max_length = 255)
    content = models.TextField()

    user = models.ForeignKey('User', related_name = 'posts', on_delete = models.CASCADE)
    user_likes = models.ManyToManyField(User, related_name = "liked_posts")

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

# ---------------------------------------------------------------------------------------- #
# THE WALL ASSIGNMENT
class User(models.Model):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # posts = LIST OF POSTS THIS USER HAS CREATED
    # comments = LIST OF COMMENTS THIS USER HAS CREATED

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Post(models.Model):
    # THE ACTUAL MESSAGE BEING WRITTEN
    content = models.TextField()
    # THE USER WHO CREATED THIS POST
    creator = models.ForeignKey(User, related_name = "posts", on_delete = models.CASCADE)
    # comments = LIST OF ALL COMMENTS LEFT ON THIS MESSAGE

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
    # THE ACTUAL MESSAGE BEING WRITTEN
    content = models.TextField()
    # THE CREATOR OF THIS COMMENT
    creator = models.ForeignKey(User, related_name = "comments", on_delete = models.CASCADE)
    # THE POST THIS COMMENT BELONGS TO
    parent_post = models.ForeignKey(Post, related_name = "comments", on_delete = models.CASCADE)


    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)


# ---------------------------------------------------------------------------------------- #
# FAVORITE BOOKS
class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # books = LIST OF ALL BOOKS THIS USER HAS CREATED
    # faovrite_books = LIST OF ALL BOOKS THIS USER HAS FAVORITED

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Book(models.Model):
    title = models.CharField(max_length = 255)
    description = models.TextField()

    creator = models.ForeignKey(User, related_name = "books", on_delete = models.CASCADE)
    favorited_by = models.ManyToManyField(User, related_name = "favorite_books")

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)



# ---------------------------------------------------------------------------------------- #




# ---------------------------------------------------------------------------------------- #





# ---------------------------------------------------------------------------------------- #