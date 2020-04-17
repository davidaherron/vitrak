<script>

import SearchBar from './controls/SearchBar.svelte';
import Results from './controls/Results.svelte';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let results = {};
$: searchResults = results;

function handleResults(event){
    results = event.detail.data;
}

function forwardChoice(event) {
    dispatch('forwardChoice', {
        choice: event.detail.choice
    })
}

</script>

<!---->

<div>
    <SearchBar on:searchResults={handleResults}/>
    <Results {searchResults} on:choice={forwardChoice}/>
</div>

<!---->

<style>

div {
    display: flex;
    flex-direction:column;
}

</style>