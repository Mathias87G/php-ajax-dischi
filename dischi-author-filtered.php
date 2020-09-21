<?php include 'dischi-db.php';


$filteredDatabase = [];
foreach ($database as $filterData) {
  if (!in_array($filterData['author'], $filteredDatabase)){
    $filteredDatabase[] = $filterData['author'];
  }
}

header('Content-Type:application/json');
echo json_encode($filteredDatabase);
