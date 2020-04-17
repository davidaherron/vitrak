<script>

import ResultsItem from "./results/ResultsItem.svelte";

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let searchResults;

$: displayResults = searchResults;

let choice;

function addItem(fdcId) {

    choice = displayResults.filter((result) => result.fdcId === fdcId);
    dispatch('choice', {
        choice: choice
    });
}

</script>

<!---->

<div>
    {#each displayResults as result (result.fdcId)}
        <ResultsItem {...result} on:click={() => addItem(result.fdcId)} />
    {:else}
        <p>Start searching!</p>
    {/each}
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