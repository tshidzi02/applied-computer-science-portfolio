"""
HOW TO RUN THIS FILE (PowerShell):
--------------------------------
python python\algorithms\05_bubble_sort.py
"""

"""
Lesson: Bubble Sort
Level: Beginner (High School)
"""

numbers = [5, 2, 8, 1, 3]
print("Original:", numbers)

for i in range(len(numbers)):
    for j in range(len(numbers) - 1):
        if numbers[j] > numbers[j + 1]:
            numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

print("Sorted:", numbers)
