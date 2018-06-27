<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
    <?php
    echo '당신의 관심사는'.$_REQUEST['interest'].'이시군요!';
    ?>
    당신의 관심사는? <?=$_POST['interest']?>
</body>
</html>