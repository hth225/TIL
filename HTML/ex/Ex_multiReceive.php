<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    
</head>
<body>
    당신의 관심사는? <br>
    <ul>
        <?php
        foreach($_POST['interest']as $entry){
            echo <li>$entry</li>
        }
        ?>
    </ul>
</body>
</html>