<template>
  <div class="board-wrapper">
    <h1 class="h1">Начнём игру</h1>
    <p>Запомни и открой все зеленые клетки</p>
    <div class="board">
      <BoardItem
        :game-status="gameStatus"
        v-for="field in fields"
        :field="field"
        :key="'item-' + field.id"
        @selectField="selectField($event)"
      />
    </div>

    <p class="difficult">
      Сложность: <strong>{{ difficult }}</strong>
    </p>
    <p class="win" v-if="isWin">Поздравляем! Продолжаем играть!</p>
    <p class="fail" v-if="isFail">Вы проиграли. Попробуйте еще раз!</p>
    <router-link to="/" class="a_btn">Назад</router-link>
    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
import BoardItem from "./BoardItem";
import useGameInit from "@/components/composables/useGameInit";
import useGameStart from "@/components/composables/useGameStart3";
import useGameProcess from "@/components/composables/useGameProcess";
import { GAME_STATUS } from "@/constants";
import { ref } from "vue";

export default {
  name: "Board2",
  props: {},
  components: {
    BoardItem,
  },
  setup() {
    const number = 25;
    const gameStatus = ref(GAME_STATUS.NONE);

    const { difficult, fields, init } = useGameInit(number);

    const { start, canStartGame } = useGameStart(
      init,
      fields,
      difficult,
      number,
      gameStatus
    );

    const { selectField, isWin, isFail } = useGameProcess(
      fields,
      gameStatus,
      difficult,
      start
    );

    return {
      number,
      difficult,
      fields,
      init,
      start,
      gameStatus,
      canStartGame,
      selectField,
      isWin,
      isFail,
    };
  },
};
</script>

<style scoped>
.board-wrapper {
  margin-bottom: 100px;
}

.board {
  width: 300px;
  background: #eee;
  margin: 0 auto;
}

.btn {
  background: #42b983cc;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  outline: none;
}

button:hover {
  background: #42b983;
}

button:disabled {
  opacity: 0.5;
}

.win {
  color: #42b983;
}

.fail {
  color: #ff000055;
}
</style>
