<template>
  <div class="container">
    <header class="top-banner">
      <div class="top-banner-inner">
        <p>Find out what's going on at Wombat Coffee each
          month. Sign up for our newsletter:
          <button @click="openModal">Sign up</button>
        </p>
      </div>
    </header>
    <div class="modal" v-if="showModal">
      <div class="modal-backdrop"></div>
      <div class="modal-body">
        <button class="modal-close" @click="closeModal">close</button>
        <h2>Wombat Newsletter</h2>
        <p>Sign up for our monthly newsletter. No spam.
          We promise!</p>
        <form>
          <p>
            <label for="email">Email address:</label>
            <input type="text" name="email"/>
          </p>
          <p><button type="submit">Submit</button></p>
        </form>
      </div>
    </div>

    <div class="dropdown-container">
      <main class="col-main">
        <nav>
          <div class="dropdown">
            <div class="dropdown-label">Main Menu</div>
            <div class="dropdown-menu">
              <ul class="submenu">
                <li><a href="/">Home</a></li>
                <li><a href="/coffees">Coffees</a></li>
                <li><a href="/brewers">Brewers</a></li>
                <li><a href="/specials">Specials</a></li>
                <li><a href="/about">About us</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Wombat Coffee Roasters</h1>
      </main>

      <aside class="col-sidebar">
        <div class="affix">
          <ul class="submenu">
            <li><a href="/">Home</a></li>
            <li><a href="/coffees">Coffees</a></li>
            <li><a href="/brewers">Brewers</a></li>
            <li><a href="/specials">Specials</a></li>
            <li><a href="/about">About us</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position",

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.container {
  font-family: Helvetica, Arial, sans-serif;
  min-height: 200vh;  /* 设置网页高度，让页面出现滚动条（只是为了展示） */
  margin: 0;
}

button {
  padding: 0.5em 0.7em;
  border: 1px solid #8d8d8d;
  background-color: white;
  font-size: 1em;
}

.top-banner {
  padding: 1em 0;
  background-color: #ffd698;
}

.top-banner-inner {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}

.modal-backdrop {  /* 半透明的背景层 */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal-body {
  position: fixed;  /* 固定定位的参考对象为视口 */
  top: 3em;
  bottom: 3em;
  right: 20%;
  left: 20%;
  padding: 2em 3em;
  background-color: white;
  overflow: auto;  /* 允许模态框主体在允许时滚动 */
  z-index: 2;
}

.modal-close {
  position: absolute;  /* 绝对定位的参考对象是最近的祖先定位元素 */
  top: 0.3em;
  right: 0.3em;
  padding: 0.3em;
  cursor: pointer;
  font-size: 2em;
  height: 1em;
  width: 1em;
  text-indent: 10em; /* 缩进 */
  overflow: hidden;  /* 隐藏溢出文本 */
  border: 0;
}

.modal-close::after {
  position: absolute;
  line-height: 0.5;
  top: 0.2em;
  left: 0.1em;
  text-indent: 0;
  content: "\00D7";
}

.dropdown-container {
  display: flex;
  width: 80%;
  max-width: 1000px;
  margin: 1em auto;
  min-height: 100vh;
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown-label {
  padding: 0.5em 2em 0.5em 1.5em;
  border: 1px solid #ccc;
  background-color: #eee;
}

.dropdown-label::after {
  content: " ";
  position: absolute;
  right: 1em;
  top: 1em;
  border: 0.3em solid;
  border-color: black transparent transparent;  /* 用上边框做一个向下的箭头 */
}

.dropdown:hover .dropdown-label::after {
  top: 0.7em;
  border-color: transparent transparent black;  /* 鼠标悬停时，让箭头向上 */
}

.dropdown-menu {
  display: none;    /* 最初隐藏菜单 */
  position: absolute;
  left: 0;
  top: 2.1em;
  min-width: 100%;
  background-color: #eee;
}

.dropdown:hover .dropdown-menu {
  display: block;  /* 鼠标悬停时显示菜单 */
}

.submenu {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #999;
}

.submenu > li + li {
  border-top: 1px solid #999;
}

.submenu > li > a {
  display: block;
  padding: 0.5em 1.5em;
  background-color: #eee;
  color: #369;
  text-decoration: none;
}

.submenu > li > a:hover {
  background-color: #fff;
}

.col-main {
  flex: 1 80%;
}

.col-sidebar {
  flex: 20%;
}

.affix {
  position: sticky;
  top: 1em;
}
</style>
