<?php
// submit_feedback.php

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

// Ambil data dari request POST
$name = $_POST['name'] ?? 'Anonymous';
$rating = (int)$_POST['rating'];
$feedback = $_POST['feedback'] ?? '';

// Persiapkan dan bind
$stmt = $conn->prepare("INSERT INTO feedback (name, rating, feedback) VALUES (?, ?, ?)");
$stmt->bind_param("sis", $name, $rating, $feedback);

// Eksekusi statement
if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Feedback berhasil disimpan!"]);
} else {
    echo json_encode(["success" => false, "message" => "Gagal menyimpan feedback!"]);
}

// Tutup koneksi
$stmt->close();
$conn->close();