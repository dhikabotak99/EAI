<!DOCTYPE html>
<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    <body>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "perpustakaan";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM buku";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table class='table'>
                    <tr>
                        <th>#</th>
                        <th>Judul</th>
                        <th>Penulis</th>
                        <th>Stock</th>
                        <th>Ketersediaan</th>
                    </tr>";
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $a=$a+1;
                echo "<tr>
                        <td>" . $a. "</td>
                        <td>" . $row["judul"]. "</td>
                        <td>" . $row["penulis"]. "</td>
                        <td>" . $row["stock"]. "</td>
                        <td>" . $row["ketersediaan"]. "</td>
                    </tr>";
            }
            echo "</table>";
        } else {
            echo "0 results";
        }

        $conn->close();
        ?>
    </body>
</html>