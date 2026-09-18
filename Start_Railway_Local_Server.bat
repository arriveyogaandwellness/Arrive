@echo off
title Arrive Yoga & Wellness - Local Cloud Server
echo ==============================================================
echo    ARRIVE YOGA & WELLNESS - LOCAL CLOUD WEB SERVER
echo    Emulating Railway Production Environment (Port 3000)
echo ==============================================================
echo.
cd /d "%~dp0"
echo Starting Node.js server...
start http://localhost:3000
node server.js
pause
