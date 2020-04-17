<script>

import Controls from './components/Controls.svelte';
import View from './components/View.svelte';

let items = [];
$: updatedItems = items;

function addToItems(event){
    items = [...items, event.detail.choice];
}

</script>

<!---->

<Controls on:forwardChoice={addToItems}/>
<View {updatedItems}/>

<!---->