<?php
 include 'dischi-db.php';

 function jsonEncode($db){
   header('Content-Type:application/json');
   echo json_encode($db);
 }
  if (empty($_GET['author']) || $_GET['author'] == 'All'){
    jsonEncode($database);
  } else {
    $filterDatabase = [];
    foreach ($database as $item) {
      if ($item['author'] == $_GET['author']){
        $filterDatabase[] = $item;
      }
    }
    jsonEncode($filterDatabase);
  }
 ?>
