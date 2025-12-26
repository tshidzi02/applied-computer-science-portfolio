"""
HOW TO RUN THIS FILE (PowerShell):
--------------------------------
python python\algorithms\04_linear_search.py
"""

"""
Lesson: Linear Search
Level: Beginner (High School)
"""

numbers = [3, 7, 1, 9, 4]
target = int(input("Enter a number to search for: "))

found = False
for num in numbers:
    if num == target:
        found = True

if found:
    print("Number found.")
else:
    print("Number not found.")
