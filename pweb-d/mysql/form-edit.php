<?php

include("config.php");

// kalau tidak ada id di query string
if( !isset($_GET['id']) ){
    header('Location: list-siswa.php');
}

//ambil id dari query string
$id = $_GET['id'];

// buat query untuk ambil data dari database
$sql = "SELECT * FROM calon_siswa WHERE id=$id";
$query = mysqli_query($db, $sql);
$siswa = mysqli_fetch_assoc($query);

// jika data yang di-edit tidak ditemukan
if( mysqli_num_rows($query) < 1 ){
    die("data tidak ditemukan...");
}

?>

<!doctype html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>SMAN 1 Probolinggo</title>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">
</head>

<body class="d-flex h-100 text-white bg-dark">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">SMAN 1 Probolinggo</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link" aria-current="page" href="index.php">Home</a>
                    <a class="nav-link" href="list-siswa.php">List Pendaftaran</a>
                    <a class="nav-link" href="#">Daftar Baru</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <div class="col-md col-lg px-3">
                <h4 class="mb-3 text-center ">Formulir Edit Siswa</h4>
                <form action="proses-edit.php" method="POST" class="needs-validation" novalidate>
                    <fieldset>
                        <input type="hidden" name="id" value="<?php echo $siswa['id'] ?>" />
                        
                        <div class="row g-3">
                            <div class="col-sm-12">
                                <label for="nama" class="form-label">Nama Lengkap</label>
                                <input type="text" name="nama" class="form-control" id="nama" placeholder="" value="<?php echo $siswa['nama'] ?>" required>
                                <div class="invalid-feedback">
                                    Nama tidak valid.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="alamat" class="form-label">Alamat</label>
                                <input type="text" name="alamat" class="form-control" id="alamat" placeholder="" value="<?php echo $siswa['alamat'] ?>" required>
                                <div class="invalid-feedback">
                                    Alamat tidak valid.
                                </div>
                            </div>

                            <div class="col-md-6 my-3">
                                <label for="jenis_kelamin" class="form-label">Jenis Kelamin: </label>
                                <?php $jk = $siswa['jenis_kelamin']; ?>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="jenis_kelamin" id="laki-laki" value="Laki-laki" <?php echo ($jk == 'Laki-laki') ? "checked": "" ?>>
                                    <label class="form-check-label" for="laki-laki">
                                        Laki-laki
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="jenis_kelamin" id="perempuan" value="Perempuan" <?php echo ($jk == 'Perempuan') ? "checked": "" ?>>
                                    <label class="form-check-label" for="perempuan">
                                        Perempuan
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="agama" class="form-label">Agama</label>
                                <?php $agama = $siswa['agama']; ?>
                                <select class="form-select" id="agama" name="agama" required>
                                    <option value="">Pilihan...</option>
                                    <option value="Islam" <?php echo ($agama == 'Islam') ? "selected": "" ?>>Islam</option>
                                    <option value="Protestan" <?php echo ($agama == 'Protestan') ? "selected": "" ?>>Protestan</option>
                                    <option value="Katolik" <?php echo ($agama == 'Katolik') ? "selected": "" ?>>Katolik</option>
                                    <option value="Hindu" <?php echo ($agama == 'Hindu') ? "selected": "" ?>>Hindu</option>
                                    <option value="Budha" <?php echo ($agama == 'Budha') ? "selected": "" ?>>Budha</option>
                                    <option value="Khonghucu" <?php echo ($agama == 'Khonghucu') ? "selected": "" ?>>Khonghucu</option>
                                </select>
                                <div class="invalid-feedback">
                                    Agama tidak valid.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="sekolah_asal" class="form-label">Sekolah Asal</label>
                                <input type="text" name="sekolah_asal" class="form-control" id="sekolah_asal" placeholder="" value="<?php echo $siswa['sekolah_asal'] ?>" required>
                                <div class="invalid-feedback">
                                    Sekolah asal tidak valid.
                                </div>
                            </div>
                        </div>
                        <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" type="submit" name="simpan" value="simpan">Edit</button>
                    </fieldset>
                </form>
            </div>
        </main>

        <footer class="mt-auto text-center text-white-50">
            <p>@bagusistighfar</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>

</html>