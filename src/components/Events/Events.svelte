<script>
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    import { religionsEventData } from './event.js';

    const titleClass = 'text-red-700'
    const textClass = 'mb-4 text-base font-normal text-gray-400'

    const { religion } = $props();
</script>

<style>
</style>
<div class="grid grid-cols-subgrid col-span-3">
  <Timeline>
      {#each religionsEventData[religion] as eventInfo}
      <TimelineItem title={eventInfo.titulo} date={eventInfo.data} classH3={titleClass}>
        <p class={textClass}>{eventInfo.descricao}</p>
      </TimelineItem>
      {/each}
  </Timeline>
</div>