<script>

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const API_KEY = 'mRxkKTHegAJZAQrg0Fc4enp5Ye5TyYqGMGzSzJQi'
const API= `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=`;

let searchInput;
let results;

function search() {
  fetch(`${API}description:+${searchInput}*+raw&dataType=SR Legacy&requireAllWords=true`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dispatch('searchResults', {
          data: data.foods
        });
    });
}

</script>

<!---->

<div>
    <input bind:value={searchInput} type='text' placeholder='enter a food item' />
    <button on:click={search}>Search</button>
</div>

<!---->

<style>

div {
  align-self: center;
  justify-content: center;
}
input {
    color:#5c5653;
    font-size: 4em;
    width: 600px;
}
button {
    background-color: #5c5653;
    color: #fff;
    font-size: 36px;
    padding: 25px;
}

</style>

<!--
    <div class="holster">
    <div class="container x mandatory-scroll-snapping" dir="ltr">
        <div>
            <input value="Whole Food" disabled/>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>
</div>
<input type='text' placeholder='enter a food item' />


 /* setup */
.holster {
  height: 100%;
}
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

/* coloration */
.container > div:nth-child(even) {
  background-color: #87EA87;
}

.container > div:nth-child(odd) {
  background-color: #87CCEA;
} 
-->