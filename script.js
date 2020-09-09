$( ".row_drag" ).sortable({
  delay: 100,
  stop: function() {
    var selectedRow = new Array();
    $('.row_drag>tr').each(function() {
        selectedRow.push($(this.selectedRow).attr("id"));
        });
      // alert(selectedRow);
    }
});
