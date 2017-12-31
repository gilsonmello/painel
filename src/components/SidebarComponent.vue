<template>
	<div class="col-md-3 left_col">
        <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
                <router-link class="site_title" style="padding: 0; height: auto;" :to=" {name: 'home'} ">
                    <img src="../assets/logo.jpg" width="70" height="70"> <span>Máxima Saúde</span>
                </router-link>
            </div>
            <div class="clearfix"></div>
            <!-- menu profile quick info -->
            <div class="profile clearfix" style="margin-top: 10px">
                <div class="profile_pic">
                    <img src="../assets/images/img.jpg" alt="..." class="img-circle profile_img">
                </div>
                <div class="profile_info">
                    <span>Welcome,</span>
                    <h2>John Doe</h2>
                </div>
            </div>
            <!-- /menu profile quick info -->

            <br>

        <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                <h3>General</h3>
                    <ul class="nav side-menu">
                        <li class="active" id="home">
                            <router-link :to=" {name: 'home'} ">
                                <i class="fa fa-home"></i> Dashboard
                            </router-link>
                        </li>
                        <li>
                            <a>
                                <i class="fa fa-edit"></i> Relatórios <span class="fa fa-chevron-down"></span>
                            </a>
                            <ul class="nav child_menu" style="">
                                <li>
                                    <router-link :to=" {name: 'anthropometries'} ">Antropometria</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        <!-- /sidebar menu -->

        <!-- /menu footer buttons -->
        <div class="sidebar-footer hidden-small">
          <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Settings">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
            <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="" href="login.html" data-original-title="Logout">
            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
          </a>
        </div>
        <!-- /menu footer buttons -->
      </div>
    </div>
    
</template>

<script>
    export default{
        
    }
</script>
