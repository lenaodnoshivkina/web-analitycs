<?php
    $v = $_POST["version"];
    $d = $_POST["duration"];
    $e = $_POST["errors"];

    file_put_contents("test.csv", "$v, $d, $e\n", FILE_APPEND);
?>