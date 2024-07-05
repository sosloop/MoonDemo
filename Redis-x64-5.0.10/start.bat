taskkill /f /t /im redis-server.exe 

ping -n 1 127.0>nul
start /min "redis-server" "redis-server.exe" redis.windows.conf
