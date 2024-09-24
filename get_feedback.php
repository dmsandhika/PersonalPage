<?php
// get_feedback.php
$servername = "0-u.h.filess.io"; // Ganti dengan nama server Anda
$username = "personalpage_hecrackuse"; // Ganti dengan username database Anda
$password = "ff872c306e5292a9884bddd00ac11e3d4397cee6"; // Ganti dengan password database Anda
$dbname = "personalpage_hecrackuse"; // Ganti dengan nama database Anda
$port = 3306; // Ganti dengan port yang sesuai jika diperlukan

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data feedback
$sql = "SELECT name, rating, feedback FROM feedback ORDER BY created_at DESC";
$result = $conn->query($sql);

$feedbacks = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $feedbacks[] = $row;
    }
}

echo json_encode($feedbacks);

// Tutup koneksi
$conn->close();