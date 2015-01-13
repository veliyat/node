@echo off
for %%a in (.) do set currentfolder=%%~na
set DEBUG=%currentfolder% ./bin/www
nodemon