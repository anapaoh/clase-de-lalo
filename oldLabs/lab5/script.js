</*button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

document.getElementById("password").type = "text";*/



document.addEventListener('DOMContentLoaded', function () {

    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();

    
    var saveChangesButton = document.getElementById('saveChanges');
    

    saveChangesButton.addEventListener('click', function () {
        modal.hide();
        

        var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasDark'));
        offcanvas.show();
    });
});
