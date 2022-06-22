<!DOCTYPE html> 
<html <?php language_attributes(); ?>>
<head>
	<title>Avanti</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="<?php echo get_template_directory_uri(); ?>/style.css" rel="stylesheet">
	<link href="<?php echo get_template_directory_uri(); ?>/css2/font-awesome.css" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="header-block">
	
		<div class="header1">
			<div class="name">
				<div class="vau2">
   					<svg id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" >
     					<a class="svgLinkM" href="#">
							<text class="pmfAqprU_0 fill_animate" >Gusto perfetto</text>
						</a>                                    	 		
					</svg>
				</div>		
			</div>
			<div class="misc">
				<div class="sf">
					<form action="" class="navbar-form navbar-right">
                 		<div class="form-group">
                      		<input type="text" class="form-control"
								placeholder="Рецепты.." 
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = ''"
							>
                 		</div>
                 		<button type="submit" class="btn btn-primary">
							<i class="fa fa-search"></i>Найти
						</button>
         			</form>
				</div>
				<div class="inst">
					<a href="#"><i class="fa fa-instagram fa-3x"></i></a>
				</div>
			</div>
			<p class="shifr">Идеальный вкус</p>
		</div>

		<div class="h-bot" >
			<div class="toglerMenu">
				<div class="toglerMenu2" id="miniM">
					<p class="ay"><i class="fa fa-bars"></i> МЕНЮ</p>
				</div>	
			</div>
			<div class="minik">
				<menu>
					<li><a href='http://#'>Главная</a></li>
					<li><a href='http://#/'>Рецепты</a></li>
					<li><a href='http://#/'>Советы</a></li>
				</menu>
			</div>

			<div class="menublock">
      			<div class="collapse navbar-collapse" id="responsive-menu"> 
                 	<ul class="nav navbar-nav navbar-center myclass">
					 	<?php 
							wp_nav_menu( array(
  							'menu' => 'Меню в header',
							 'theme_location' => 'header_menu',	
	  						'items_wrap' => '%3$s',
 							'depth' => 2,
  							'container' => false,
  							'menu_class' => 'nav navbar-nav',
  							'walker' => new wp_bootstrap_navwalker())
							);
						?>   
                	 </ul>
          		</div>  
			</div>
   		</div>
	</div> 