$(document).ready(function () {
    let counter = 0;

    $("#addrow").on("click", function () {
        const newRow = $("<tr>");
        let cols = "";

        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="initiative' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="speed' + counter + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });
});