<script>

import DataHeading from './view/DataHeading.svelte';
import DataRow from './view/DataRow.svelte';

export let currentValues;
export let updatedItems;

$: newItem = updatedItems.slice(-1)[0];

let promise = getUserChart();
async function getUserChart() {
    const response = await fetch(`rda.json`);
    currentValues = await response.json();
    if (response.ok) {        
        return currentValues;
    } else {
        throw new Error(currentValues);
    }
}

</script>

<!---->

<table>
    <tbody>
        {#await promise}
            <p>...waiting</p>
        {:then data}
            {#each currentValues.nutrientCategories as category}
                <DataHeading {...category}/>
                {#each category.nutrients as nutrient (nutrient.nutrientNumber)}
                    <DataRow {...nutrient}{newItem}/>
                {/each}
            {/each}
        {:catch error}
            <p>An error occurred!</p>
        {/await}
    </tbody>
</table>

<!---->

<style>

table {
	width: 100%;
}

</style>