<?php
// include autoloader
require_once 'dompdf/autoload.inc.php';

use Dompdf\dompdf;

$tabla= new Dompdf();

$html = file_get_contents("../../html/htmls-admin/historial-reservas-admin.html");
$tabla->loadHtml($html);

// (Optional) Setup the paper size and orientation
$tabla->setPaper('A4', 'landscape');

// Render the HTML as PDF
$tabla->render();

// Output the generated PDF to Browser
$tabla->stream();


?>