<?php
    $v = $_POST["version"];
    $d = $_POST["time"];
    $e = $_POST["errors"];
    $u = $_POST["uid"];
    $y = $_POST["ym_uid"];
    $g = $_POST["goal"];

    file_put_contents("test.csv", "$v, $d, $e, $u, $y, $g\n", FILE_APPEND);
?>