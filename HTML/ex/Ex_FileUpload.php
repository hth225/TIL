<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
    <?php
    $uploadir = '';
    $uploadfile = $uploadir.basename($_FILES['image']['name']);
    move_uploaded_file($_FILES['image']['tmp_name'].$uploadfile);
    ?>
    <img src="<?=$_FILES['image']['name']?>" />
</body>
</html>