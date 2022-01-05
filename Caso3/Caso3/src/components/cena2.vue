<template>
  <div class="col-12 col-md-12 col-sm-12 cenario">
    <div class="row mt-3">
      <div class="col-md-12 col-sm-12 col-12 mt-5">
        <center><h1>TRAVEL TO SURPRISE!</h1></center>

        <div class="row mt-3">
          <div class="col-md-12 col-sm-12 col-12 mb-5">
            <center>
              <h5>
                TESTEZ LE WEEKEND SURPRISE ET EXPLQRES UNE DESTINATION QUI VOUS
                SERA DEVOILEE 48H AVANT DE DECOLLER <br />
                VOLS+ 2 NUITS D'HOTEL A PARTIR DE 200KZ PAR PERSONNE
              </h5>
            </center>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-5 centra">
        <div class="col-md-12 col-sm-12">
          <h5>NOUS SOMMES</h5>

          <div class="col-md-7">
            <select class="form-select" name="" id="">
              <option value="">Número de pessoas</option>
              <option value="1">1 voyagerus</option>
              <option value="2" selected>2 voyagerus</option>
              <option value="3">3 voyagerus</option>
              <option value="4">4 voyagerus</option>
              <option value="5">5 voyagerus</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-5">
        <div class="col-md-12 col-sm-12">
          <h5>NOUS PARTIONS DEPOUIS</h5>

          <div class="col-md-7">
            <select class="form-select">
              <option value="">Para onde vai ?</option>
              <option value="1">Angola (des free &euro;)</option>
              <option value="2" selected>Paris (des 200 &euro;)</option>
              <option value="3">França (des 500 &euro;)</option>
              <option value="4">Brasil (des 900 &euro;)</option>
              <option value="5">Portugal (des 200 &euro;)</option>
              <option value="6">Italia (des 3500 &euro;)</option>
              <option value="7">Canada (des 1500 &euro;)</option>
              <option value="8">Gales (des 1200 &euro;)</option>
              <option value="9">Espanha (des 5300 &euro;)</option>
              <option value="10">Barcelona (des 5200 &euro;)</option>
              <option value="11">Madrid (des 10000 &euro;)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-5">
        <div class="col-md-12 col-sm-12">
          <h5>DUREE</h5>

          <div class="col-md-7">
            <select class="form-select">
              <option value="">Horario da Viajem</option>
              <option value="1">1 jours</option>
              <option value="2">2 jours</option>
              <option value="3" selected>3 jours</option>
              <option value="4">4 jours</option>
              <option value="5">5 jours</option>
              <option value="6">6 jours</option>
              <option value="7">7 jours</option>
              <option value="9">9 jours</option>
              <option value="10">10 jours</option>
              <option value="11">11 jours</option>
              <option value="12">12 jours</option>
              <option value="20">20 jours</option>
              <option value="21">21 jours</option>
              <option value="22">22 jours</option>
              <option value="23">23 jours</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-5">
        <div class="col-md-12 col-sm-12">
          <h5>&nbsp;</h5>

          <div class="col-md-7">
            <button class="btn btn-secondary form-control">RESERVER</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cena2",
};
</script>

<style scoped>
.cenario {
  width: 100%;
  height: 110vh;
  position: relative;
  transition: 1s;
}

.cenario::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: url("../assets/chef1.png") no-repeat center center;
  background-size: cover;
  z-index: -1;
}

h5,
h1 {
  color: #fff;
}

.cena {
  background: rgba(0, 0, 0, 0.5);
}

.mb-5 {
  padding-bottom: 300px;
}

.txt {
  text-align: end;
}

.icon {
  width: 30px;
  height: 30px;
}

.btn {
  background: #ee305f;
  border: 1px solid #ee305f;
}

.btn:hover {
  background: transparent;
  color: #ee305f;
}
</style>