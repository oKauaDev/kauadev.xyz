<?php
$erros = [];
if (!empty($_POST)) {
    $mail = $_POST["email"];
    $name = $_POST["name"];
    $msg = $_POST["mensagem"];
    if (strlen($mail) < 15 or strlen($mail) > 200) {
        $erros[] = "Digite um email correto.";
    }

    if (strlen($name) > 100) {
        $erros[] = "Digite um nome de usuário menor.";
    }

    if (strlen($name) < 8) {
        $erros[] = "Digite um nome de usuário maior.";
    }

    if (strlen($msg) < 50 or strlen($msg) > 1000) {
        $erros[] = "Sua mensagem deve ter de 50 a 1000 caracteres.";
    }
    if (count($erros) == 0) {
        $mensagem = "Usuário: " . $name . PHP_EOL . "Enviado de: " . $mail . PHP_EOL . PHP_EOL . "Mensagem: " . $msg;
        mail("kauacomtil021@gmail.com", "Novo Contato!", $mensagem);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/responsive.css">
  <title>Ladino | Portifolio</title>
</head>

<body>
  <header>
    <div class="navbar">
      <div>
        <img src="assets/svg/LADINO.svg" />
      </div>
      <div>
        <label id="hamburger"></label>
      </div>
      <ul>
        <li><a class="font-sans-pro" href="#experiencia">Experiência</a></li>
        <li><a class="font-sans-pro" href="certificados">Certificados</a></li>
        <li><a class="font-sans-pro" href="contato">Contato</a></li>
      </ul>
    </div>
  </header>
  <section class="apresentacao" id="apresentacao">
    <dir>
      <img src="assets/gif/ezgif.com-gif-maker_3.gif" />
    </dir>
    <div>
      <h1 class="font-sans-pro">Desenvolvedor Front end <span class="contrast-cian">&</span> Web Designer<span class="contrast-cian">.</span></h1>
      <p class="font-sans-code">Sou desenvolvedor e <span class="contrast-cian">Web Designer</span> júnior, com experiência no mercado da programação, trabalhando já a <span class="contrast-cian">3 anos</span> nesse mercado enorme.</p>
    </div>
  </section>
  <section class="experiencia" id="experiencia">
    <div>
      <h1 class="font-roboto">EXP<br>ERI<br>ÊN<br>CIA</h1>
    </div>
    <div>
      <div class="experience-item">
        <div>
          <h3>HTML</h3>
          <p class=".font-sans-pro">Cursado em HTML 5 e ainda em aprendizado.</p>
          <h2>2021 - 2022</h2>
        </div>
        <img src="assets/svg/Grafico container 1html-grafico.svg">
      </div>
      <div class="experience-item">
        <div>
          <h3>CSS</h3>
          <p class=".font-sans-pro">Cursado em CSS3 no nível intermediario</p>
          <h2>2021 - 2022</h2>
        </div>
        <img src="assets/svg/css-grafico.svg">
      </div>
      <div class="experience-item">
        <div>
          <h3>JavaScript</h3>
          <p class=".font-sans-pro">Cursado em JavaScript e estu no nível básico.</p>
          <h2>2022</h2>
        </div>
        <img src="assets/svg/js grafico.svg">
      </div>
      <div class="experience-item">
        <div>
          <h3>WEB DESIGN</h3>
          <p class=".font-sans-pro">Cursado em Web Design intermediario & indo ao avançado.</p>
          <h2>2022</h2>
        </div>
        <img src="assets/svg/web design grafico.svg">
      </div>
    </div>
  </section>
  <section class="certificados" id="certificados">
    <h1 class="font-sans-pro">Certificados <span class="contrast-cian">.</span></h1>
    <div class="certificates">
      <div class="all-certificados">
        <div class="certificate-item" certificate="assets/png/webdesign-certificado.apng">
          <div>
            <p class="date font-roboto">2022</p>
            <div class="description">
              <h1 class="font-sans-pro">JS - Iniciante</h1>
              <p class="font-sans-code">Curso grátis de JS onde aprendemos o básico da linguagem.</p>
            </div>
          </div>
        </div>

        <div class="certificate-item" certificate="assets/png/webdesign-certificado.png">
          <div>
            <p class="date font-roboto">2022</p>
            <div class="description">
              <h1 class="font-sans-pro">WEB DESIGN - Iniciante</h1>
              <p class="font-sans-code">Um curso pago onde aprendi muito sobre web design, o nível básico.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="certificado-selecionado">
        <h1 class="font-sans-pro">Certificado</h1>
        <img src="assets/png/webdesign-certificado.png" id="certificado0">
      </div>
    </div>
  </section>
  <section class="contato" id="contato">
    <div>
      <form action="" method="post">
        <h1 class="font-sans-pro">Contato <span class="contrast-cian">.</span></h1>
        <div class="input-item">
          <label class="font-sans-pro" for="name">Nome</label> <br>
          <input type="text" name="name" id="name" autocomplete="off">
        </div>
        <div class="input-item">
          <label class="font-sans-pro" for="email">Email</label> <br>
          <input type="email" name="email" id="email" autocomplete="off">
        </div>
        <div class="input-item">
          <label class="font-sans-pro" for="mensagem">Mensagem</label> <br>
          <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
        </div>
        <input class="submit font-roboto" type="submit" value="ENVIAR">
      </form>
      <?php
        if (count($erros) > 0) {
            foreach($erros as $error) {
                echo "<p class='error-item'>" . $error . "</p>";
            }
        }
      ?>
    </div>
    <div class="sociais">
      <h1 class="font-sans-pro">Redes sociais<span class="contrast-cian">.</span></h1>
      <p class="font-sans-code">Veja aqui algumas das minhas “Redes sociais” abaixo.</p>
      <div class="redessociais">
        <a href=""><img src="assets/svg/discord.svg"></a>
        <a href=""><img src="assets/svg/github.svg"></a>
        <a href=""><img src="assets/svg/twitter.svg"></a>
        <a href=""><img src="assets/svg/youtube.svg"></a>
      </div>
  </section>
  <hr class="espacamento">
  <footer>
    <p>Ladino. Quase todos os direitos reservados.</p>
  </footer>
  <script src="js/main.js"></script>
</body>

</html>