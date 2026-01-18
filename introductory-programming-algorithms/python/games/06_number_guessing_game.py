"""
HOW TO RUN THIS FILE (PowerShell):
--------------------------------
python python\games\06_number_guessing_game.py
"""

"""
Lesson: Number Guessing Game
Level: Beginner (High School)
"""

secret = 7
guess = None

while guess != secret:
    guess = int(input("Guess the number: "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")

print("Correct!")
