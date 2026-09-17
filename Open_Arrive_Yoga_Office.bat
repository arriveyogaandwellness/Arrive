@echo off
title Arrive Yoga & Wellness - Corporate Hub
echo ==============================================================
echo    ARRIVE YOGA & WELLNESS - CORPORATE OFFICE HUB
echo    Founder & CEO: Carly Anne Kasinpila
echo ==============================================================
echo.
echo [1] Opening Corporate Office in Windows Explorer...
start "" "%~dp0"
echo.
echo [2] Opening Executive Dashboard (Web UI)...
start "" "%~dp0Arrive_Yoga_Executive_Dashboard.html"
echo.
echo [3] Opening Master Operations Manual (Web UI)...
start "" "%~dp0START_HERE_OFFICE_OPERATIONS_MANUAL.html"
echo.
echo Setup complete. Have an inspired, grounded session!
timeout /t 3 >nul
