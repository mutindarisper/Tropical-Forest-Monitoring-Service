<template>
  <fragment>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">

    <home msg="Tropical Forest Surveillance Monitoring and Assessment in the IGAD Region"/>
    <div id="app">

    <div style="height: 100vh; width: 100%">
    
    <l-map ref="map" 
      :zoom="zoom"
     
      :center="center"     
      style="height: 90%">


      <l-control position="topleft" >
        <div>
          <button class="download">
          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"
           fill="rgb(60, 148, 79)"  >
           <path d="M0 0h24v24H0z" fill="none"/>
           <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
          </svg>
          </button>
        </div>
          
        </l-control>


  

    <l-control position="topleft">

  <div class="simon-container">
  <div class="simon">
    <button id="first" class="panel" type="button">Region (IGAD)</button>
    <button id="second" class="panel" type="button">National</button>
    <button id="third" class="panel" type="button">Forest</button>
   
  </div>
</div>

</l-control>

    <l-draw-toolbar position="topleft"/>
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

     

      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div >
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div >
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
      <l-draw-toolbar position="topleft"/>
      
       

        

        <l-control class="main-container" position="bottomleft" >

          <div class="container">
            
            <button class="button">
              <div class="button1">
                 <svg class="svg-style" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                </svg>
                <br>
                <span> Legend </span>
              </div>
               
            </button>
           
            <button class="button">
              <div class="button2">
                <svg class="svg-style" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"/>
                </svg>
                <br>
                <span> Layers </span>
              </div>
            </button>
            <button class="button">
              <div class="button3">
                <svg class="svg-style" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><rect height="5" width="2" x="7" y="12"/><rect height="10" width="2" x="15" y="7"/>
                <rect height="3" width="2" x="11" y="14"/>
                <rect height="2" width="2" x="11" y="10"/></g></g>
                </svg>
                <br>
                <span> Analysis </span>
              </div>
            </button>
            <button class="button">
              <div class="button4">
                <svg class="svg-style" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" color= "green" viewBox="0 0 24 24" width="24px" fill="#000000"><g>
                  <rect fill="none" height="24" width="24"/><g>
                    <path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"/></g>
                    <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"/></g>
                </svg>
                <br>
                <span> Docs </span>
              </div>
            </button>
          </div>
          
        </l-control>


        <!-- <l-control class="container2" position="auto" >
          <div class="panel">
             <button class="regional">
               <div class="div1">
                 <span>Regional(IGAD)</span>
               </div>
             </button>
              <button class="national">
                <div class="div2">
                 <span>National</span>
               </div>
              </button>
              <button class="forest">
                <div class="div3">
                 <span>Forest</span>
               </div>
              </button>
          </div>
          
        </l-control> -->



        <!-- <l-control position="topright" >
          <ul class="buttons">
            <li class="legend">
              <button class="legend" @click="clickHandler">
                
                <span> Regional(IGAD) </span>
              </button>
            </li>
            <li class="layers">
              <button class="layers" @click="clickHandler">
                
                <span> National </span>
              </button>
            </li>
           
            <li class="analysis">
              <button class="analysis" @click="clickHandler">
                
                <span> Forest </span>
              </button>
            </li>
            
          </ul>
          
        </l-control> -->
        
        
    </l-map>
  </div>


    
  </div>
  </fragment>
    
  
</template>

<script>
 import home from './components/home.vue'
import { latLng } from "leaflet";
import { LMap, LTileLayer, LPopup, LControl } from "vue2-leaflet";



// delete Icon.Default.prototype._getIconUrl;
// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

export default {
  name: 'App',
   components: {
    home,
    LMap,
    LTileLayer,
    
    LPopup,
   
    LControl,
 
   
  },
  data() {
    return {
      zoom: 12,
      center: latLng(-1.3, 36.8),
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      withPopup: latLng(-1.3, 36.8),
      withTooltip: latLng(-1.3, 36.8),
      currentZoom: 11.5,
      currentCenter: latLng(-1.3, 36.8),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    clickHandler () {
      window.alert('and mischievous')
    }
  }


 
}
</script>

<style>
@import './../node_modules/leaflet-draw/dist/leaflet.draw.css';
@import './../node_modules/leaflet-toolbar/dist/leaflet.toolbar.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.simon-container {
  margin-left: 80px;
  border: 2px;
}
.simon {
  margin: 0 auto;
  border:none;
  display: flex;
  width: 20vw;
  height: 5vh;
  border-radius: 20px;
  overflow: hidden;
}


.panel {

  width: 20vw;
  height: 5vh;
  font-size: 10px;
  font-weight: bolder;
  align-content: center;
  color: black;
  padding: 0;
  border: none;
 background-color: #dbeaca;
  
}


#first {
  border-right: 2px solid #7e9c8b;
  color: #24862cec;

padding: 10px;
 
}

#second {
 border-right: 2px solid #7e9c8b;
margin-bottom: 5px;
margin-bottom: 5px;

padding: 10px;
}




/* .container2 {
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  width: 380px;
  margin-left: auto;
  margin-right: auto;
} */

/* .container3 {
  width: 190px;
  border: 1px solid red;
  border-radius: 10px;
} */
 /* .buttons{
  padding: 0;
  margin: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex; 
  /* background-color: rgba(162, 228, 142, 0.911); */
 
 /* } 
 .wrap    { 
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
 
}   */ */

/* .layers,.analysis,.legend, .docs {
  background-color: #d0f3ba;
  font-weight: bold;
  
}  */

.main-container{
   background-color: #dbeaca;
  
}

/* .container2{
   background-color: #dbeaca;
  
} */

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dbeaca;
   /* border-radius: 10px; */

    
}

.download{
  background-color: #dbeaca;
}




/* .panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dbeaca;
   border-radius: 10px;

    
} */

.button {
  display:block;
  width:75px;
  height:75px;
  background-color: #dbeaca;
  font-weight: bolder;
  font-size: 10px;
  padding: 0;
  border: none;
  background: none;
  
 
}


/* .regional, .national, .forest {
  display:inline-flex;
  width:75px;
  height:75px;
  background-color: #dbeaca;
  font-weight: bolder;
  font-size: 10px;
  padding: 0;
  border: none;
  background: none;
  
 
} */
.button1{
  border-bottom: 1px solid #0da514;
 padding-right: 10px;
 padding-bottom: 10px;
  
  margin-left : 25px;
  margin-top : 20px;
  
  
}

.button2{
  border-bottom: 1px solid #0da514;
  padding-left: 10px;
 padding-bottom: 10px;
   border-left: 1px solid #0da514;
  margin-right : 25px;
  margin-top : 20px;
  
}
.button3{
  padding-right: 10px;
  padding-top: 10px;
 
  margin-left : 25px;
  margin-bottom : 30px;
  margin-right: 25px;
  
}
.button4{
  
  padding-left: 10px;
  padding-top: 10px;
  border-left: 1px solid #0da514;
  margin-right : 25px;
  margin-bottom : 30px;
  
}
.svg-style{
  fill: rgb(60, 148, 79);
}

/* .container2{
 display: list-item;
   border-radius: 4px;
} */




/* .border{
  border-bottom: 1px solid #d12e05;
  margin-left: px;

} */

/* .aoi{
  border-radius: 3px;
  background-color: #d0f3ba;
} */



</style>
