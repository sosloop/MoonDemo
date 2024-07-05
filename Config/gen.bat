set WORKSPACE=..

set LUBAN_DLL=%WORKSPACE%\luban\bin\Luban.dll
set CONF_ROOT=%WORKSPACE%\Config

set CLIENT_PATH=%WORKSPACE%\BallAction
set CLIENT_CODE=%CLIENT_PATH%\Assets\Hotfix\Luban\Gen
set CLIENT_DATA=%CLIENT_PATH%\Assets\Bundles\Config

set SERVER_PATH=%WORKSPACE%\server
set SERVER_CODE=%SERVER_PATH%\tools\schema
set SERVER_DATA=%SERVER_PATH%\static\table

dotnet %LUBAN_DLL% ^
    -t all ^
    -c cs-bin ^
	-c lua-lua ^
    -d lua  ^
    -d bin  ^
    --conf %CONF_ROOT%\luban.conf ^
    -x cs-bin.outputCodeDir=%CLIENT_CODE% ^
    -x bin.outputDataDir=%CLIENT_DATA% ^
	-x lua-lua.outputCodeDir=%SERVER_CODE% ^
    -x lua.outputDataDir=%SERVER_DATA% ^
    -x pathValidator.rootDir=%CLIENT_PATH%

pause