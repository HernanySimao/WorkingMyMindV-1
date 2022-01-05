<template>
  <div class="col-12 cenario">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row mt-5 txt">
        <div class="col-md-12 col-sm-12 col-12">
          <h3>Free Ebook: The Complete guide to Facebool Ads</h3>
          <div class="tamanho mt-3 mb-5"></div>
        </div>

        <div class="col-md-6 col-sm-12 col-6 txt">
          <h4>
            Want a crush in everything you need to <br />
            know about Facebook Ads?
          </h4>
          <br />

          <h6>
            This 82-page ebook will teach you everything. <br />
            from budgeting and design to advanced targeting, <br />
            strategies to get the most bang for your buck, and much <br />
            more!
          </h6>
          <br />

          <img src="../assets/call.png" class="imgLogo mb-5" />
        </div>

        <div class="col-md-6 col-sm-6 col-12">
          <div class="card text-center">
            <div class="card-body mt-5">
              <h4 class="txt">Download Your Free Guide Today!</h4>

              <div class="row">
                <center>
                  <div class="col-md-7 text-center">
                    <div class="form-control-lg">
                      <input
                        type="text"
                        autocomplete="true"
                        class="form-control mt-5"
                        placeholder="Your First Name"
                      />
                      <input
                        type="email"
                        class="form-control mt-4"
                        placeholder="Your Email"
                      />
                      <input
                        type="text"
                        class="form-control mt-4"
                        placeholder="Your Business Website"
                      />
                    </div>
                  </div>
                </center>
              </div>

              <div>
                <button type="submit" class="btn btn-warning btn-lg mt-5 txt">
                  Get My FREE Ebook
                </button>
              </div>

              <div class="row mt-3 mb-5">
                <div class="col-md-12 col-sm-12">
                  <button class="btn btn-primary txt" type="submit">
                    Like
                  </button>
                  <button class="btn btn-light vermelho" type="submit">
                    Google+
                  </button>
                  <button class="btn btn-info txt" type="submit">Tweet</button>
                </div>

                <div class="mt-5"></div>
              </div>
            </div>
          </div>
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
  background: #28c2ff;
  width: 100%;
  height: 200vh !important;
}

.txt {
  color: #fff;
}

.tamanho {
  border: 1px solid #fff;
  border-radius: 2px;
}

.vermelho {
  color: red;
}

.btn {
  border-radius: 2px;
}

.linha {
  border: 1px solid #fff;
  border-radius: 2px;
}
.orientar {
  padding-left: 100px;
}

.imgLogo {
  width: 100px;
  height: 100px;
}

.card {
  background: rgba(0, 0, 0, 0.3);
}
</style>