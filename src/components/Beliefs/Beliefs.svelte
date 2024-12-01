<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { religionsBeliefsData } from "./beliefs.js";

    const titleClass = "mb-2 text-2xl font-bold tracking-tight text-red-700"
    const descriptionClass = "font-normal text-gray-400 leading-tight"
    const {religion} = $props()
</script>

<div class="grid grid-cols-subgrid gap-10 col-span-3 border-none">
    {#each religionsBeliefsData[religion] as beliefsInfo}
        <Card>
            <h5 class={titleClass}>{beliefsInfo.nome}</h5>
            <p class={descriptionClass}>{beliefsInfo.descricao}</p>
        </Card>
    {/each}
</div>