<!DOCTYPE html>
<html>
    <head>
        <title>Administrasi Perpustakaan</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Administrasi Perpustakaan</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Ketersediaan</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                    for($i = 0; $i < count($data); $i++){
                        $a=$i+1;
                        print "<tr>";
                        print "<td>".$a."</td>";
                        print "<td>".$data[$i]['judul']."</td>";
                        print "<td>".$data[$i]['penulis']."</td>";
                        print "<td>".$data[$i]['stock']."</td>";
                        print "<td>".$data[$i]['kondisi']."</td>";
                        print "</tr>";
                    }
                ?>
            </tbody>
          </table>
    </body>
</html>