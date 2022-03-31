<template>
  <div class="content">
    <div class="content_link">
      <div class="game_name">
        <h2>Поймай меня</h2>
      </div>
      <div class="choice">
        <h2>Выберите сложность</h2>
      </div>
      <router-link to="/" class="a_btn">Назад</router-link>
      <router-link to="/level" class="a_btn">Нормальный</router-link>
      <router-link to="/middle" class="a_btn">Средний</router-link>
      <router-link to="/complex" class="a_btn">Сложный</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.game_name h2{
    color: #42b983cc;
}
.content {
  display: flex;
  justify-content: center;
}
.content_link {
  display: flex;
  flex-direction: column;
}

</style>
