    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="vendor/raphael/raphael.min.js"></script>
    <script src="vendor/morrisjs/morris.min.js"></script>
    <script src="data/morris-data.js"></script>
    <script src="js/countUp.js"></script>
    <script src="vendor/flot/excanvas.min.js"></script>
    <script src="vendor/flot/jquery.flot.js"></script>
    <script src="vendor/flot/jquery.flot.pie.js"></script>
    <script src="vendor/flot/jquery.flot.resize.js"></script>
    <script src="vendor/flot/jquery.flot.time.js"></script>
    <script src="vendor/flot-tooltip/jquery.flot.tooltip.min.js"></script>
    <script src="data/flot-data.js"></script>
    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

    <?php if (isset($_SESSION['errors'])):?>
        <div data="<?php echo $_SESSION['errors']; ?>" class="msg"></div>
        <script type="text/javascript">
            var msg = $('div.msg').attr('data')
            swal({
                title : 'An Error Has Occured',
                text  : msg,
                type  : 'error'
            })    
        </script>
        
    <?php unset($_SESSION['errors']); endif; ?>