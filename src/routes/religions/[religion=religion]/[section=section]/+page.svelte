<script lang='ts'>
  import Events from "../../../../components/Events/Events.svelte";
  import Sidebar from "../../../../components/Sidebar/Sidebar.svelte";
  import { browser } from '$app/environment';
	import Topper from "../../../../components/Topper/Topper.svelte";
	import People from "../../../../components/People/People.svelte";
	import Rituals from "../../../../components/Rituals/Rituals.svelte";
	import Beliefs from "../../../../components/Beliefs/Beliefs.svelte";

  let section: string | undefined = $state('');
  let religion: string | undefined = $state('');
  if (browser) {
    const url = window.location.href
    section = url.split('/').pop()
    religion = url.split('/')[4]
  }
</script>

<style lang="css">

</style>

<Topper />
<div class="grid grid-cols-4 divide-x grid-template-columns: repeat(3, minmax(0, 1fr))">
  <Sidebar />
    {#if section === 'pessoas'}
      <People religion = {religion} />
    {/if}
    {#if section === 'eventos'}
      <Events religion = {religion} />
    {/if}
    {#if section === 'rituais'}
      <Rituals religion = {religion} />
    {/if}
    {#if section === 'crencas'}
      <Beliefs religion = {religion} />
    {/if}
</div>
