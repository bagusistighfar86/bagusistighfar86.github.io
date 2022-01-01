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

<body class="d-flex h-100 text-center text-white">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">SMAN 1 Probolinggo</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="list-siswa.php">List Pendaftaran</a>
                    <a class="nav-link" href="form-daftar.php">Daftar Baru</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h1>Selamat Datang</h1>
            <?php if(isset($_GET['status'])): ?>
                <p>
                    <?php
                        if($_GET['status'] == 'sukses'){
                            echo "Pendaftaran siswa baru berhasil!";
                        } else {
                            echo "Pendaftaran gagal!";
                        }
                    ?>
                </p>
            <?php endif; ?>
        </main>

        <footer class="mt-auto text-white-50">
            <p>@bagusistighfar</p>
        </footer>
    </div>



</body>

</html>