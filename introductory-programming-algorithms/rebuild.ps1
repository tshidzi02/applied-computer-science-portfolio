# rebuild.ps1
Write-Host "Rebuilding Introductory Programming & Algorithms project..."

mkdir python, java, lesson_notes, assessments -ErrorAction SilentlyContinue
mkdir python\basics, python\conditionals_loops, python\functions, python\algorithms, python\games -ErrorAction SilentlyContinue
mkdir java\basics, java\conditionals_loops, java\methods, java\algorithms, java\games -ErrorAction SilentlyContinue

Write-Host "Structure ensured. Content generators should be run step-by-step."
