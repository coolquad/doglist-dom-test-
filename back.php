<?php
// Check if the form is submitted 

if ( isset( $_POST['submit'] ) ) 
{ 
	// retrieve the form data by using the element's name attributes value as key 
	$dogName = $_POST['dogName']; 
	$breedName = $_POST['breedName']; 
	// display the results
	echo '<h3>Form POST Method</h3>'; echo 'Your name is ' . $dogName . ' ' . $breedName; 
	exit; 
} 
?>