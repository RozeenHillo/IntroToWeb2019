<!DOCTYPE html>
<html>
    <head>
        <title>form</title>
    </head>
         <body>
             <h2>
             welcome <?php echo $_GET["fullname"]; ?> </h2>
             <h3>
                 your password is :<?php echo $_GET["pass"]; ?><br>
                 your email address is :<?php echo $_GET["email"]; ?><br>
                 your website is : <?php echo $_GET ["web"]; ?><br>
                 your phone is:<?php echo $_GET["phone"]; ?><br>
                 amount of coffee you drink a day:<?php echo $_GET["coffee"]; ?><br>
                 the temperature now is:<?php echo $_GET["temper"]; ?><br>
                 your address is:<?php echo $_GET["address"]; ?><br>
                 your Hobbies are :<br>
                    <?php echo $_GET["interests[]"];?><br>
                 your gender is: <?php echo $_GET["gender"]; ?><br>
                 your age is: <?php echo $_GET["age"]; ?><br>
                </h3>
         </body>
</html>
