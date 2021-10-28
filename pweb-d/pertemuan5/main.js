function submitForm(){
    if (validateForm()) {
        if(confirm("Apakah anda sudah yakin?")){
            window.location.href = "index.html";
        }
    }
}

function validateForm() {
    if (document.forms["formMHS"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formMHS"]["nama"].focus();
        return false;
    }

    if (document.forms["formMHS"]["nrp"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formMHS"]["nrp"].focus();
        return false;
    }   
    else if (isNaN(document.forms["formMHS"]["nrp"].value)) {
        alert("NRP Harus Berupa Angka");
        document.forms["formMHS"]["nrp"].focus();
        return false;
    }

    if (document.forms["formMHS"]["alamat"].value == "") {
        alert("Alamat Tidak Boleh Kosong");
        document.forms["formMHS"]["alamat"].focus();
        return false;
    }

    if (document.forms["formMHS"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formMHS"]["email"].focus();
        return false;
    }
    if(document.forms["formMHS"]["email"].value.indexOf("@") == -1){
        alert("Pastikan format email yang dimasukkan sudah benar.");
        document.forms["formMHS"]["email"].focus();
        return false;
    }
    if(document.forms["formMHS"]["email"].value.indexOf(".") == -1){
        alert("Pastikan format email yang dimasukkan sudah benar.");
        document.forms["formMHS"]["email"].focus();
        return false;
    }

    if (document.forms["formMHS"]["jurusan"].selectedIndex < 1) {
        alert("Anda Belum Memilih Jurusan.");
        document.forms["formMHS"]["jurusan"].focus();
        return false;
    }

    if (document.forms["formMHS"]["statusVaksin"].value < 1) {
        alert("Anda Belum Memilih Status Vaksinasi.");
        document.forms["formMHS"]["statusVaksin"].focus();
        return false;
    }

    return true;
}