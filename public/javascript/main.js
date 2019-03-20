var textEntry = '';
document.addEventListener("keydown", function(e) {
    const targetName = e.target.localName;
    if (targetName !== "input" && isNaN(e.key) == false) {
        textEntry += e.key.toString();
        if (textEntry.length == 12) {
            console.log('scan detected');
            window.location.href = window.location.origin + "/barcode/?barcode=" + textEntry;
            textEntry = "";
        };
    } else textEntry = "";
});

$("#barcodes-display").on("click", function() {
    window.location.href = window.location.origin + "/barcodes/user";
});

$("#camera-barcode").on("click", function() {
    window.location.href = window.location.origin + "/camera";
});

//Modal Initialization
$(document).ready(function() {
    $('.modal').modal();
});