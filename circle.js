
<!DOCTYPE html>
<html>
<head>
<title>Find the area and circumference of a circle</title>
</head>
<body>
  <script language="JavaScript">
    function CalculateArea()
{
        var radius =document.form1.txtRadius.value;
        document.write("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>");
        document.write("<P>The circumference of the circle is " + (2 * radius * Math.PI) + "</p>");
}
</script>
Enter the radius of circle:
<input type="text" name="txtRadius" size=10><br>
<input type="button" value="Calculate" onClick='CalculateArea();'>  
</script>
</body>
</html>