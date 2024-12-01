<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { religionsPeopleData } from "./people.js";

    const titleClass = "mb-2 text-2xl font-bold tracking-tight text-red-700"
    const descriptionClass = "font-normal text-gray-400 leading-tight"
    const {religion} = $props()
</script>

<div class="grid grid-cols-subgrid gap-10 col-span-3 border-none">
    {#each religionsPeopleData[religion] as peopleInfo}
        <Card>
            <h5 class={titleClass}>{peopleInfo.nome}</h5>
            <p class={descriptionClass}>{peopleInfo.descricao}</p>
        </Card>
    {/each}
</div>