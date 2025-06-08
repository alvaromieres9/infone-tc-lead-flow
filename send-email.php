<?php
// Habilita CORS si llamas desde un frontend como React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Acepta solo solicitudes POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Decodifica el JSON recibido
    $data = json_decode(file_get_contents("php://input"), true);

    // Extrae los datos del formulario
    $name = $data["name"] ?? "";
    $agency = $data["agency"] ?? "";
    $email = $data["email"] ?? "";

    // Dirección de correo a la que quieres recibir los mensajes
    $to = "business@infone.es"; // 👉 REEMPLAZA esto por tu dirección real

    $subject = "Nueva solicitud desde el formulario React (Piloto)";
    $message = "Has recibido una nueva solicitud:\n\n" .
               "Nombre: $name\n" .
               "Inmobiliaria: $agency\n" .
               "Email: $email\n";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envía el correo
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "No se pudo enviar el correo."]);
    }
} else {
    http_response_code(405); // Método no permitido
    echo json_encode(["error" => "Método no permitido"]);
}
?>
