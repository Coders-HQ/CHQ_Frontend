from django.db import models
from django.utils.translation import gettext_lazy as _
from codershq.users.models import User
from autoslug import AutoSlugField

class Hackathon(models.Model):
    title = models.CharField(_("Title of Hackathon"), max_length=100)
    slug = AutoSlugField(populate_from='title')
    description = models.TextField(_("Describe the Hackathon"),max_length=5000)
    evaluation = models.TextField(_("Describe how will the hackathon be evaluated"),max_length=5000)
    timeline = models.TextField(_("Describe the Hackathon's timeline"),max_length=5000)
    rules = models.TextField(_("Describe rules for the hackathon"),max_length=5000)
    prizes = models.TextField(_("Describe how the prize money will be distributed"),max_length=5000)
    prize_money = models.PositiveIntegerField(_("Total prize money"), default=0)
    date_start = models.DateField(_("Hackathon start date"))
    date_end = models.DateField(_("Hackathon end date"))
    competitors = models.ManyToManyField(User)