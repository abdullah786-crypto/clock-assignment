<script setup>

import { ref, onMounted, computed } from 'vue';

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

const marginX_Axis = ref();
const marginY_Axis = ref();

const time = ref(new Date())
const hoursDeg = ref()
const secondsDeg = ref()
const minutesDeg = ref()


const getNumberPosition = (number) => {
  const angle = (number - 3) * 30 * (Math.PI / 180);
  marginX_Axis.value = 145 + 125 * Math.cos(angle);
  marginY_Axis.value = 140 + 125 * Math.sin(angle);
  console.log('margin on y is', marginY_Axis.value)
  console.log('margin on x is', marginX_Axis.value)

  return { left: `${marginX_Axis.value}px`, top: `${marginY_Axis.value}px`, position: 'absolute', };
};

const updateClock = () => {
  time.value = new Date();
  
  const hour = time.value.getHours() % 12;
  const min = time.value.getMinutes();
  const seconds = time.value.getSeconds();

  hoursDeg.value = hour * 30 + min * 0.5;
  minutesDeg.value = min * 6 + seconds * 0.1;
  secondsDeg.value = seconds * 6;

  console.log('hoursDeg is', hoursDeg.value)
  console.log('seconds Deg is', secondsDeg.value)
  console.log('minutes Deg is', minutesDeg.value)
}

onMounted(() => {
  updateClock();
  setInterval(() => {
    updateClock();
  }, 1000);
})

</script>

<template>
  <div class="mainDiv">
    <div class="clockDiv">
      <div v-for="number in numbers" :key="number" class="number" :style="getNumberPosition(number)">
        {{ number }}
      </div>
      <div class="hourNeedleStyle" :style="{ transform: 'rotate(' + hoursDeg + 'deg)' }"></div>
      <div class="minutesNeedleStyle" :style="{ transform: 'rotate(' + minutesDeg + 'deg)' }"></div>
      <div class="secondsNeedleStyle" :style="{ transform: 'rotate(' + secondsDeg + 'deg)' }"></div>
      <div class="dotStyle"></div>

    </div>
  </div>
</template>

<style scoped>
.mainDiv {
  height: 100vh;
  background-color: grey;
  margin: 0;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.clockDiv {
  height: 300px;
  width: 300px;
  align-self: center;
  background-color: rgb(248, 238, 238);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px double black;
  position: relative;
}

.numberStyle {
  color: 'rgb(17, 17, 17)';
  font-size: '30px';
  font-weight: '800';
  text-align: 'center';
  position: absolute;
}

.dotStyle {
  background-color: rgb(0, 0, 0);
  height: 10px;
  width: 10px;
  border-radius: 50%;
  font-weight: 800;
  z-index: 10;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}

.hourNeedleStyle {
  width: 5px;
  height: 70px;
  background-color: rgb(0, 0, 0);
  margin-top: -70px;
  /* transform: rotate(180deg); */
  transform-origin: 50% 100%;
  margin-left: -1px;
}

.minutesNeedleStyle {
  width: 4.5px;
  height: 100px;
  background-color: rgb(0, 0, 0);
  margin-top: -100px;
  /* transform: rotate(10deg); */
  transform-origin: 50% 100%;
  margin-left: -1px;
}

.secondsNeedleStyle {
  width: 2.5px;
  height: 100px;
  background-color: rgb(255, 5, 5);
  margin-top: -100px;
  /* transform: rotate(140deg); */
  transform-origin: 50% 100%;
  margin-left: -1px;
}
</style>
