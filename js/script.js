$(function() {
  
  var data = [];
  var $addItem = $('#addItem');
  var $itemForm = $('#itemForm');
  var $myTable = $('#myTable');
  var $itemName = $('#item');
  var $quantity = $('#quantity');
  
  
  // function to show and hide table table and form ------------
  function showTable() {
    $addItem.show();
    $myTable.show();
    $itemForm.hide();
  };
  
  function showForm() {
    $itemForm.show();
    $addItem.hide();
    $myTable.hide();
  };
  
  
  // clears form ----------------------------------------------
  function clearForm() {
    document.getElementById('item').value='';
    document.getElementById('quantity').value='';
  };
  
  
  // shows table and hides form on load ------------------------
  showTable();
  
  
  // shows form and hides table on click -----------------------
  $('#showForm').on('click', function() {
    showForm();
  });
  
  
  // shows table and hides form on cancel ----------------------
  $('#cancel').on('click', function() {
    showTable();
  });
  
  
  // pushes new item to array and displays input on table ------
  $('#itemForm').on('submit', function() {
    data.push({
      'item': $itemName.val(),
      'quantity': $quantity.val()
    });
    console.log(JSON.stringify(data));
    $('#newItem').append('<tr><td>' + $itemName.val() + '<td>' + $quantity.val() + '</td></tr>');
    showTable();
    clearForm();
    return false; 
  });
});