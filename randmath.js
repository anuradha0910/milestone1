<!DOCTYPE html>
<html>
<body>

<h2><u>JAVASCRIPT MATH</u></h2>

<p>it generates numbers from 1 to 10</p>

<p id="demo"></p>

<script>
rand=Math.floor(Math.random() * 10)+1;
 document.write(rand);
input =parseInt(prompt("enter number"));
if(input==rand)
{
  document.write("matched");
}
else{
 document.write("not matched");
 }
</script>

</body>
</html>






