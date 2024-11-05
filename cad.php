<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="forme.css">
</head>
<body>
    <header>
        <h1>cadastro de clientes | Emporio padaria</h1>
    </header>

    <main class="text">
        <?php 
        $nome = $_GET["nome"];
        $sobrenome = $_GET["sobrenome"];
        $telefone = $_GET["telefone"];
        
        echo "<p> É um prazer te conhecer, a Emporio Padaria agradece $nome $sobrenome! Entraremos em contato com você!</p>"
        ?>
 <button class="text-js">
        <a href="javascript:history.go(-1)">Voltar para página anterior</a>
        </button>
    </main>
</body>
</html>