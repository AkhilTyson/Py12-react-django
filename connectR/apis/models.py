from django.db import models

# Create your models here.
class Data(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()
    gender = models.BooleanField(default=False)  # True: male, False: female    

    def __str__(self) -> str:
        return self.name 