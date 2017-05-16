$(function() {
   
  var $addItem = $('#addItem');
  var $itemForm = $('#itemForm');
  var $myTable = $('#myTable');
  var $itemName = $('#item');
  var $quantity = $('#quantity');
  
  $myTable.show();
  $itemForm.hide();
  
  
  $('#showForm').on('click', function() {
    $itemForm.show();
    $addItem.hide();
    $myTable.hide();
  });




});