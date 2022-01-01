<?php
include("config.php"); 
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

<body class="d-flex h-100 text-center text-white">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">SMAN 1 Probolinggo</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link" aria-current="page" href="index.php">Home</a>
                    <a class="nav-link active" href="#">List Pendaftaran</a>
                    <a class="nav-link" href="form-daftar.php">Daftar Baru</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h2>Siswa Yang Sudah Mendaftar</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Agama</th>
                            <th scope="col">Asal Sekolah</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $sql = "SELECT * FROM calon_siswa";
                        $query = mysqli_query($db, $sql);

                        while($siswa = mysqli_fetch_array($query)){
                            echo "<tr>";

                            echo "<th scope='row'>".$siswa['id']."</td>";
                            echo "<td>".$siswa['nama']."</td>";
                            echo "<td>".$siswa['alamat']."</td>";
                            echo "<td>".$siswa['jenis_kelamin']."</td>";
                            echo "<td>".$siswa['agama']."</td>";
                            echo "<td>".$siswa['sekolah_asal']."</td>";

                            echo "<td>";
                            echo "<a href='form-edit.php?id=".$siswa['id']."'>Edit</a> | ";
                            echo "<a href='hapus.php?id=".$siswa['id']."'>Hapus</a>";
                            echo "</td>";

                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </main>

        <footer class="mt-auto text-white-50">
            <p>@bagusistighfar</p>
        </footer>
    </div>



</body>

</html>