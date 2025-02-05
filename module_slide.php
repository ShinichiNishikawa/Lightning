<?php
$lightning_theme_options = get_option('lightning_theme_options');

// count top slide
$top_slide_count = 0;
for ( $i = 1; $i <= 5; ) {
    if ( $i <= 2 && !isset( $lightning_theme_options['top_slide_image_'.$i] ) ){
        $top_slide_count ++;
    } else if ( isset( $lightning_theme_options['top_slide_image_'.$i] ) && $lightning_theme_options['top_slide_image_'.$i] ) {
        $top_slide_count ++;
    }
    $i++;
}

if ($top_slide_count) : ?>
<div id="top__fullcarousel" data-interval="false" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">

    <?php if ($top_slide_count >= 2 ) :?>
        <!-- Indicators -->
        <ol class="carousel-indicators">
        <?php for ( $i = 0; $i <= $top_slide_count - 1; ) { ?>
        <li data-target="#top__fullcarousel" data-slide-to="<?php echo $i; ?>"></li>
        <?php
        $i++;
        } ?>
        </ol>
    <?php endif; ?>

    <?php
    for ( $i = 1; $i <= $top_slide_count; ) {

            // Reset $top_slide_image_src
            $top_slide_image_src = '';
            $top_slide_url = '';

            // If 1st slide no set, set default image.
            if ( $i <= 2 ){
                if ( isset( $lightning_theme_options['top_slide_image_'.$i] )) {
                    $top_slide_image_src = $lightning_theme_options['top_slide_image_'.$i];
                } else {
                    $top_slide_image_src = get_template_directory_uri().'/images/top_image_'.$i.'.jpg';
                }
            } else {
                if ( isset( $lightning_theme_options['top_slide_image_'.$i] ))
                    $top_slide_image_src = $lightning_theme_options['top_slide_image_'.$i];
            }
            $top_slide_title = '';
            $top_slide_title = ( isset($lightning_theme_options['top_slide_title_'.$i])) ? $lightning_theme_options['top_slide_title_'.$i] : '';
            if ( $top_slide_image_src ) { ?>
            <div class="item<?php if ($i == 1) echo ' active';?>">

            <?php
            if ( isset( $lightning_theme_options['top_slide_url_'.$i] ) && $lightning_theme_options['top_slide_url_'.$i] ): ?>
                <a href="<?php echo esc_url( $lightning_theme_options['top_slide_url_'.$i] ); ?>">
            <?php endif; ?>

            <img src="<?php echo esc_attr($top_slide_image_src); ?>" alt="<?php echo esc_attr($top_slide_title); ?>">

            <?php
            if ( isset( $lightning_theme_options['top_slide_url_'.$i] ) && $lightning_theme_options['top_slide_url_'.$i] ): ?></a><?php endif; 
            ?>

            </div><!-- [ /.item ] -->
            <?php } ?>
        <?php $i++;
    } ?>
</div><!-- [ /.carousel-inner ] -->

<?php if ($top_slide_count >= 2 ) :?>
    <a class="left carousel-control" href="#top__fullcarousel" data-slide="prev"><i class="icon-prev fa fa-angle-left"></i></a>
    <a class="right carousel-control" href="#top__fullcarousel" data-slide="next"><i class="icon-next fa fa-angle-right"></i></a>
<?php endif; ?>

</div><!-- [ /#top__fullcarousel ] -->
<?php endif; ?>