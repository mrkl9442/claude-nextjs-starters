param([string]$EventType)

[Console]::InputEncoding  = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$webhookUrl = $env:SLACK_WEBHOOK_URL
if (-not $webhookUrl) {
    $webhookUrl = [System.Environment]::GetEnvironmentVariable("SLACK_WEBHOOK_URL", "User")
}
if (-not $webhookUrl) { exit 0 }

$stdinContent = [Console]::In.ReadToEnd()
$eventData = $null
if ($stdinContent) {
    try { $eventData = $stdinContent | ConvertFrom-Json } catch {}
}

$cwd = if ($eventData -and $eventData.cwd) { Split-Path $eventData.cwd -Leaf } else { "Unknown" }
$time = Get-Date -Format "HH:mm:ss"
$status = if ($eventData -and $eventData.hook_event_name) { $eventData.hook_event_name } else { $EventType }

if ($EventType -eq "Notification") {
    $msg = if ($eventData -and $eventData.message) { $eventData.message } else { "권한 확인이 필요합니다." }
    $text = ":lock: *권한 요청* ($time)`n프로젝트: $cwd`n상태: $status`n$msg"
} elseif ($EventType -eq "Stop") {
    $msg = if ($eventData -and $eventData.message) { "`n$($eventData.message)" } else { "" }
    $text = ":white_check_mark: *작업 완료* ($time)`n프로젝트: $cwd`n상태: $status`nClaude Code가 응답을 마쳤습니다.$msg"
} else {
    exit 0
}

$body = @{ text = $text } | ConvertTo-Json -Compress
try {
    $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
    Invoke-RestMethod -Uri $webhookUrl -Method POST -ContentType "application/json; charset=utf-8" -Body $bodyBytes | Out-Null
} catch {}
exit 0




