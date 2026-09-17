@echo off
title Arrive Yoga & Wellness - GitHub Sync (v0.0.1)
echo ==============================================================
echo    ARRIVE YOGA & WELLNESS - GITHUB REPOSITORY SYNC
echo    Target: https://github.com/arriveyogaandwellness/Arrive-Corporate-Dashboard-.git
echo    Version: 0.0.1 (v0.0.1)
echo ==============================================================
echo.

cd /d "C:\Users\bekin\OneDrive\Desktop\Arrive Yoga Corporate"

echo Checking Git status...
git status --short
echo.

echo Pushing main branch to origin...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo --------------------------------------------------------------
    echo [NOTICE] If you received "Repository not found":
    echo 1. Ensure the repo is created at:
    echo    https://github.com/new (Name: Arrive-Corporate-Dashboard-)
    echo 2. If the repository is Private, add Add-Interactive as a collaborator
    echo    OR authenticate with your arriveyogaandwellness GitHub token.
    echo --------------------------------------------------------------
) else (
    echo.
    echo Pushing release tags (0.0.1, v0.0.1)...
    git push origin --tags
    echo.
    echo ==============================================================
    echo [SUCCESS] Arrive Corporate Dashboard v0.0.1 pushed to GitHub!
    echo ==============================================================
)

echo.
pause
