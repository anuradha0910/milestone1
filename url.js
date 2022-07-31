


<!DOCTYPE html>
<html>
<head>
<h1>TO GET CURRENT URL</h1>
<style>
body {
	text-align: center;
}
</style>
</head>
<body>
<p><b>Click on Below Button To Get Current URL</b></p>
<button onclick="GetURL()"> Get URL </button>
<p id="url"></p>
<script>
function GetURL()
{
var gfg = document.URL;
document.getElementById("url").innerHTML = gfg;
}
</script>
</body>
</html>


