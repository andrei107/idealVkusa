<?php
/*
Template Name: все рецепты
*/
?>

<?php get_header(); ?>

<?php if ( is_active_sidebar( 'true_side' ) ) : ?>
	<div id="true_side" class="sidebar">
		<?php dynamic_sidebar( 'true_side' ); ?>
	</div>
<?php endif; ?>

<?php get_footer(); ?>