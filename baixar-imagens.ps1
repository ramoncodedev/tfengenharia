$base='https://firebasestorage.googleapis.com/v0/b/tp-monitor-solar.firebasestorage.app/o/'
$dir=Join-Path $PSScriptRoot 'img'
$html=Join-Path $PSScriptRoot 'index.html'
$c=Get-Content $html -Raw -Encoding UTF8
foreach($n in 'BONI','PORTONAPOLIS','MICHELE','PAULO'){
  $m=[regex]::Match($c,[regex]::Escape($base+$n+'.jpg')+'\?alt=media&token=[\w-]+')
  if($m.Success){ Invoke-WebRequest $m.Value -OutFile (Join-Path $dir ($n.ToLower()+'.jpg')); $c=$c.Replace($m.Value,'img/'+$n.ToLower()+'.jpg') }
}
Set-Content $html $c -Encoding UTF8
Write-Host 'Pronto: imagens salvas em img/ e index.html atualizado.'
