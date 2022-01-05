<template>
  <div class="col-12 cenario">
    <div class="row mt-4">
      <div class="col-md-12 col-sm-12">
        <center><img src="../assets/Oakley.png" class="imgLogo" /></center>
      </div>

      <div class="col-md-6 col-sm-6 col-6 mt-5">
        <img src="../assets/U1.png" alt="" class="imgC" />
      </div>

      <div class="col-md-6 col-sm-6 col-6 texto">
        <h1>
          Take the Guesswork Out of Your <br />
          Content Marketing Strategy.
        </h1>

        <small>Quickly audit, measure, and discover engaging content.</small>

        <div class="botao">
          <button class="btn btn-warning btn-lg">Try it Now!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cena",
};
</script>

<style scoped>
.cenario {
  background: #524884;
  width: 100%;
  height: 80vh !important;
}

.imgLogo {
  width: 100px;
  height: 90px;
}

.imgC {
  width: 100%;
  height: 100%;
  padding-left: 70px;
  border-radius: 10px;
}

h1,
small {
  color: #fff;
  padding-left: 20px;
  padding-top: 100px;
}

.btn {
  color: rgb(68, 64, 64);
  margin-top: 50px;
  margin-left: 30px;
}
</style>