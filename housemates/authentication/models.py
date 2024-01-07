from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser



class Households(models.Model):
    household_id = models.AutoField(primary_key=True)
    household_name = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)


class Memberships(models.Model):
    membership_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    household = models.ForeignKey(Households, on_delete=models.CASCADE)


class Items(models.Model):
    item_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()


class Receipts(models.Model):
    receipt_id = models.AutoField(primary_key=True)
    household = models.ForeignKey(Households, on_delete=models.CASCADE)
    receipt_date = models.DateField()


class Purchases(models.Model):
    purchase_id = models.AutoField(primary_key=True)
    receipt = models.ForeignKey(Receipts, on_delete=models.CASCADE)
    item = models.ForeignKey(Items, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)


class Bills(models.Model):
    bill_id = models.AutoField(primary_key=True)
    household = models.ForeignKey(Households, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    is_split = models.BooleanField()


class BillShares(models.Model):
    bill_share_id = models.AutoField(primary_key=True)
    bill = models.ForeignKey(Bills, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    share_amount = models.DecimalField(max_digits=10, decimal_places=2)


class Notifications(models.Model):
    notification_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField()


class Polls(models.Model):
    poll_id = models.AutoField(primary_key=True)
    household = models.ForeignKey(Households, on_delete=models.CASCADE)
    question = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField()


class PollResponses(models.Model):
    response_id = models.AutoField(primary_key=True)
    poll = models.ForeignKey(Polls, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    response = models.TextField()


class CalendarEvents(models.Model):
    event_id = models.AutoField(primary_key=True)
    household = models.ForeignKey(Households, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()