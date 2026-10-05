$(".submit").click(function() {

    let nama = $("#nama").val();
    let email = $("#email").val();
    let noHp = $("#hp").val();
    let sesi = $("#sesi").val();

    let adaError = false;

    if (nama === "") {
        $("#peringatanNama").text("Nama wajib diisi");
        adaError = true;
    } 
    else if (/\d/.test(nama)) {
        $("#peringatanNama").text("Nama tidak boleh mengandung angka");
        adaError = true;
    }

    if (noHp === "") {
        $("#peringatanNo").text("No HP wajib diisi");
        adaError = true;
    } 
    else if (/[^0-9]/.test(noHp)) {
        $("#peringatanNo").text("No HP hanya boleh berisi angka");
        adaError = true;
    }

    if (email === "") {
        $("#peringatanEmail").text("Email wajib diisi");
        adaError = true;
    }

    if (sesi === "") {
        alert("Silakan pilih sesi");
        adaError = true;
    }

    if (adaError) {
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("email", email);
    localStorage.setItem("hp", noHp);
    localStorage.setItem("sesi", sesi);

    let kode = "WWP-" + Math.floor(Math.random() * 90000 + 10000);
    localStorage.setItem("kode", kode);

    window.location.href = "valid.html";
});


if ($("#kartu").length) {

    $("#hasil-nama").text(localStorage.getItem("nama"));
    $("#hasil-email").text(localStorage.getItem("email"));
    $("#hasil-hp").text(localStorage.getItem("hp"));
    $("#hasil-sesi").text(localStorage.getItem("sesi"));
    $("#hasil-kode").text(localStorage.getItem("kode"));

    $("#kartu").show();
}