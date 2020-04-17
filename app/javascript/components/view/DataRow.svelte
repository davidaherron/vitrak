<script>

export let nutrientNumber;
export let name;
export let amount;

export let total = 0;
export let newItem;
$: addItem = newItem;

let nutrient;

$: if (addItem !== undefined) {
    nutrient = addItem[0].foodNutrients.filter(function(nutrient){
        return nutrientNumber == nutrient.nutrientNumber
    });
    if(nutrient[0]){
        total = total + nutrient[0].value;
    }
    
} else {
    total = 0;
}

</script>

<!---->

<tr>

    {#if name !== "calories" }
    <td>{name}</td>
    {:else}
    <td>&nbsp;</td>
    {/if}

    <td>{Math.round(total)}</td>

    <td>{amount}</td>

    <td>0%</td>

</tr>

<!---->

<style>

tr {
    font-size: 3em;
}
td {
    background-color: #5c5653;
    border:1px solid #5c5653;
    color: #fff;
    padding: 25px;
    letter-spacing: 5px;
}

</style>