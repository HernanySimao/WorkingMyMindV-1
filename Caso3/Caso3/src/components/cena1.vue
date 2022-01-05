<template>
  <div class="col-12 ">
     <div class="row mt-3">

        <div class="col-md-5 col-sm-5 col-12">
            <div>
               <img src="../assets/Oakley.png" class="imgLogo">
            </div>
        </div>


        <div class="col-md-7 col-sm-8 col-12 mb-3">
          <a href="#">COMMENT ÇA MARCHE</a>
          <a href="#"> ANDE</a>
          <a href="#">HOTELS</a>
          <a href="# " class="txt"> <img  src="../assets/icon1.png" class="icon"> WAYNAGIFT</a>
          <a href="#" class="txt"> <img  src="../assets/icon3.png" class="icon">  MA RESERVATION</a>
        </div>



     </div>
  </div>
</template>
<script>
export default {
 name: "cena",
}
</script>

<style scoped>
.cenario{
   background: #fff;
   border-block-end: 2px rgba(0, 0, 0, 0.3) solid;
}

  .imgLogo{
     width: 100px;
     height: 35px;
     margin-left: 150px ;
     margin-bottom: 15px ;
  }

  .icon{
      width: 30px;
      height: 30px;
  }
 
 .txt{
    color:#ee305f;
 }

a{
	text-decoration: none;
	padding: 10px 15px;
	color: #5a5656;
}


a:hover{
   color: #5a5656;
   border-block-end: 3px #ee305f solid;
}

 
</style>