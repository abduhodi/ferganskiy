<template>
  <Header />
  <section class="help">
    <div class="container">
      <div class="help-items">
        <h1
          class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
            >Better Data</span
          >
          Scalable AI.
        </h1>
        <div class="help-cards-container">
          <div class="help-card-image">
            <img src="../assets/hero-img.jpg" alt="hero" />
          </div>
          <div class="help-card-items">
            <div class="help-card-item">
              <div class="help-card-item-icon">
                <img src="../assets/help-img1.png" alt="help-img1" />
              </div>
              <div class="help-card-item-content">
                <h3>IT Consultancy</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
            <div class="help-card-item">
              <div class="help-card-item-icon">
                <img src="../assets/help-img2.png" alt="help-img2" />
              </div>
              <div class="help-card-item-content">
                <h3>Cyber Security</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
            <div class="help-card-item">
              <div class="help-card-item-icon">
                <img src="../assets/help-img3.png" alt="help-img3" />
              </div>
              <div class="help-card-item-content">
                <h3>Development</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
            <div class="help-card-item">
              <div class="help-card-item-icon">
                <img src="../assets/help-img4.png" alt="help-img4" />
              </div>
              <div class="help-card-item-content">
                <h3>UX/UI Strategy</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
            <div class="row">
              <p>
                Sed perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style lang="scss" scoped>
.help {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.help-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.help-cards-container {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.help-card-image {
  width: 30%;
  max-height: 430px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
.help-card-items {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.help-card-item {
  width: calc((100% - 20px) / 2);
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
  &:hover {
    .help-card-item-content h3 {
      color: #086ad7;
    }
  }
}
.help-card-item-icon {
  width: 20%;
  margin-right: 10px;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.help-card-item-content {
  h3 {
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 600;
    transition: all 0.2s linear;
  }
  p {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 600;
    opacity: 0.4;
  }
}
.row {
  width: 100%;
  padding: 25px;
  padding-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #086ad7;
  border-radius: 5px;
  color: #fff;
  opacity: 1;
  p {
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
  }
}
@media (max-width: 1024px) {
  .help-card-image {
    display: none;
  }
  .help-card-items {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .help-card-item {
    width: 100%;
  }
}
</style>
