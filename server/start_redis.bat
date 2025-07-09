taskkill /f /t /im redis-server.exe 

cd Redis-x64-5.0.10
ping -n 1 127.0>nul
start /min "redis-server" "redis-server.exe" redis.windows.conf