<template>
    <fragment>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
<nav class="navigation">


    <div class="navbar-nav">
        <div class="nav-items">
        <img src="../assets/igad4.png"  class="image-responsive" style="height:70px width:50px" alt=""> 
        </div>
        <div class="nav-items2">TroFMIS</div>
       
        <div class="nav-items3"> Tropical Forest Surveillance Monitoring and <br> 
        Assessment in the IGAD Region</div>
        
        <div class="nav-items">
            <img src="../assets/gmess.png"  class="img-responsive"  alt="">
            <img src="../assets/au.png"  class="img-responsive"  alt="">
                <img src="../assets/eu.jpg"  class="img-responsive"  alt="">
        </div>
        
        <br>
    
    <div class="icons">
        <a href="">
        <i class="material-icons-outlined">home</i>
        </a>
        <a href="">
        <i class="material-icons-outlined">language</i>
        </a>
        <a href="">
        <i class="material-icons-outlined">person</i>
        </a>
        <a href="">
        <i class="material-icons-outlined">email</i>
        </a>
        <a href="">
        <i class="material-icons-outlined">info</i>
        </a>
        <a href="">
        <i class="material-icons-outlined">notifications</i>
        </a>
        
        
    </div>
        

    </div>
    



</nav>
    </fragment>




</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-nav {
display: flex;
align-items: center;
justify-content: space-around;
margin: 0px;
border: 0px;
/* background-color: #d0f3ba; */
height: 70px;
}

.navigation{
  margin:0px;
  border: 0px;
  max-height: 120vh;
}
.nav-items{
   display: inline-block;
    margin-right: -150px;
     margin-left: -70px;

}

.nav-items2{
  color: #24862cec;
  font-weight: bolder;
  font-size: 35px;
    display: inline-block; 
    font-family: Arial, Helvetica, sans-serif;
}
.nav-items3{
  color: #030804;
  font-weight: bolder;
  font-size: 15px;
font-family: Arial, Helvetica, sans-serif;
  justify-content: left;
     margin-left: -120px;
}


.nav-link{
  flex: 0.5;
  text-align: center;

}

.icons{
  color: #226d27;;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;

}
.material-icons-outlined {
   display:inline-block;
   vertical-align:top;
   margin-right: 0.3em;
   padding-left: 5%;
}

 .img-responsive {
   background-image: none; 
    vertical-align: middle;
    height: 30px;
    align-items: center;
}  
 .image-responsive {
   background-image: none; 
    vertical-align: middle;
    height: 70px;
    width: 65px;
    margin-left: 0px;
    align-items: center;
} 

a {
  color: #087711;
}
</style>
