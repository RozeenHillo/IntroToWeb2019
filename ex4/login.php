<!DOCTYPE html>
<html>
     <head>
          <title>form</title>
     </head> 
     <body>
          <section>
              welcome
              <?php
                 $un=$_GET["reg_un"];
                 $pw=$_GET["reg_pass"];
                 if($un=="rozeen"&&$pw=="333")
                    echo "<h2>Good morning user" .$un. "</h2>";
                 else
                    echo "<h2>who are you? you cant get in</h2>"
               ?>
            </section>
     </body>
</html>