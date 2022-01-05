<template>
  <div class="col-12">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <ul>
                  <li>
                    <img
                      src="@/assets/Oakley.png"
                      class="imgLogo mt-4"
                      alt="Logotipo da Empresa"
                    />
                  </li>
                </ul>
              </div>

              <div class="col-md-5 col-sm-5">
                <ul>
                  <li><a href="#">the landing page conversion course</a></li>
                </ul>
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

<style >
* {
  margin: 0px;
}

body {
  background: url("../assets/img2.png") no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: left;
}

.header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.header ul {
  text-align: center;
}

.header ul li {
  list-style: none;
  display: inline-block;
  text-transform: uppercase;
}

.header ul li a {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  padding: 25px;
}

.imgLogo {
  width: 80px;
  height: 30px;
}
</style>