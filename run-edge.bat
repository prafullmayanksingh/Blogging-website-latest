@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0run-site.ps1" edge
if errorlevel 1 pause
