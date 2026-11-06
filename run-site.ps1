param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('chrome', 'edge')]
    [string]$Browser
)

$ErrorActionPreference = 'Stop'
$siteUrl = 'http://127.0.0.1:8000/'
$siteRoot = Join-Path $PSScriptRoot 'public'
$listener = Get-NetTCPConnection -LocalAddress 127.0.0.1 -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

if (-not $listener) {
    $python = Get-Command python.exe -ErrorAction SilentlyContinue
    $pythonArguments = '-m http.server 8000 --bind 127.0.0.1 --directory "{0}"' -f $siteRoot

    if (-not $python) {
        $python = Get-Command py.exe -ErrorAction SilentlyContinue
        $pythonArguments = '-3 -m http.server 8000 --bind 127.0.0.1 --directory "{0}"' -f $siteRoot
    }

    if (-not $python) {
        throw 'Python is required to run this site. Install Python, then run this launcher again.'
    }

    Start-Process -FilePath $python.Source -ArgumentList $pythonArguments -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
}

$serverReady = $false
for ($attempt = 0; $attempt -lt 40 -and -not $serverReady; $attempt++) {
    try {
        $response = Invoke-WebRequest -Uri $siteUrl -TimeoutSec 1 -UseBasicParsing
        $serverReady = $response.StatusCode -eq 200 -and $response.Content.Contains('Student Blog')
    }
    catch {
        Start-Sleep -Milliseconds 250
    }
}

if (-not $serverReady) {
    throw 'The local site did not start at http://127.0.0.1:8000/. Check whether that port is already in use.'
}

if ($Browser -eq 'chrome') {
    $browserPaths = @(
        (Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Google\Chrome\Application\chrome.exe'),
        (Join-Path $env:LOCALAPPDATA 'Google\Chrome\Application\chrome.exe')
    )
}
else {
    $browserPaths = @(
        (Join-Path $env:ProgramFiles 'Microsoft\Edge\Application\msedge.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'),
        (Join-Path $env:LOCALAPPDATA 'Microsoft\Edge\Application\msedge.exe')
    )
}

$browserPath = $browserPaths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browserPath) {
    throw "Could not find $Browser. Install it, then run this launcher again."
}

Start-Process -FilePath $browserPath -ArgumentList $siteUrl
