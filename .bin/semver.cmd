@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@nicolo-ribaudo\semver-v6\bin\semver.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@nicolo-ribaudo\semver-v6\bin\semver.js" %*
)
