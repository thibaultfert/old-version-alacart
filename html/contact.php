<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
		<meta name="description" content="N'hésitez pas à nous contacter pour plus d'informations !">
		<link rel="stylesheet" href="../css/style.css"/>
		<title>Alacart - Contact</title>
	</head> 

	<body>
		<?php include("header.php"); ?>

		<div id="bloc_corps_page_accueil">
			<div id="bloc_info_contact">
				<div class="case_info_contact" id="bloc_info_contact_titre"><strong>Contactez-nous&nbsp:</strong><br></div>

				<div class="case_info_contact">
					<?php
					if(isset($_POST['mailform'])) {
					   if(!empty($_POST['nom']) AND !empty($_POST['mail']) AND !empty($_POST['message'])) {
					      $header='From:"nom_d\'expediteur"<thibaultfert@gmail.com>'."\n";
					      $header.='Content-Type:text/html; charset="uft-8"'."\n";
					      $header.='Content-Transfer-Encoding: 8bit';
					      $message='
					      <html>
					         <body>
					            <div align="center">
					               <u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
					               <u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
					               <br />
					               '.nl2br($_POST['message']).'
					            </div>
					         </body>
					      </html>
					      ';
					      mail("thibaultfert@gmail.com", "Sujet du message", $message, $header);
					      $msg="Votre message a bien été envoyé !";
					   } else {
					      $msg="Tous les champs doivent être complétés !";
					   }
					}
					?>
					<form method="POST" action="" id="formulaire_contact">
						<input type="text" name="nom" placeholder="Votre nom" value="<?php if(isset($_POST['nom'])) { echo $_POST['nom']; } ?>" />
						<input type="email" name="mail" placeholder="Votre email" value="<?php if(isset($_POST['mail'])) { echo $_POST['mail']; } ?>" />
						<textarea name="message" placeholder="Votre message" rows="8" cols="50"><?php if(isset($_POST['message'])) { echo $_POST['message']; } ?></textarea>
						<input type="submit" value="Envoyer !" name="mailform"/>
					</form>
					<?php if(isset($msg)) {
					 echo '<script type="text/javascript">window.alert("'.$msg.'");</script>';
					}
					?>
                </div>
				
				<div class="case_info_contact">
					<a href="tel:+33782666390">
						<img 	class="logos_contact" 
								src="../images/logos/appeler.png"
     							alt="logo_email">
     				</a>
     				<a href="mailto:alacart.distribution@gmail.com">
						<img  	class="logos_contact" 
								src="../images/logos/email.png"
     							alt="logo_email">
     				</a>
     			</div>
			</div>
		</div>

		<!---------------BLOC 3--------------->	
		<?php include("footer.php"); ?>
		
	</body>


</html>