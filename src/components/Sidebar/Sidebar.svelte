<script lang='ts'>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { browser } from '$app/environment';
    import { HomeSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';
	  import IconPicker from '../IconPicker/IconPicker.svelte';
    const titleClass = 'transition duration-75 text-gray-400 hover:bg-red-700'
    const iconClass = 'w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white'
    const mainLabelObject = {
        catholicism: {name: 'Catolicismo', route: 'catolicismo'},
        protestant: {name: 'Evangélica', route: 'evangelica'},
        judaism: {name: 'Judaica', route: 'judaica'},
        budism: {name: 'Budismo', route: 'budismo'},
        islam: {name: 'Islamismo', route: 'islamismo'}
    }
    const secondaryLabelObject = {
        people: {label: 'Pessoas de Interesse', route: 'pessoas'},
        events: {label: 'Eventos', route: 'eventos'},
        rituals: {label: 'Rituais', route: 'rituais'},
        beliefs: {label: 'Crenças', route: 'crencas'},
        places: {label: 'Lugares', route: 'lugares'},
    }
    const handleReligionClick = (religion: string, section: string) => {
      if (browser) {
          window.location.href = `/religions/${religion}/${section}`;
      }
      // goto();
    }
    const handleClick = (path: string) => {
      if (browser) {
          window.location.href = `/${path}`;
      }
    }
  </script>
  
  <style>
  </style>
<div class = "grid grid-cols-subgrid gap-10 col-span-1">
  <Sidebar>
    <SidebarWrapper class="bg-gray-900">
      <SidebarGroup>
        <SidebarItem class={titleClass} label="Página Principal" on:click={() => handleClick('')}>
          <svelte:fragment slot="icon">
            <HomeSolid class={iconClass} />
          </svelte:fragment>
        </SidebarItem>
        {#each Object.values(mainLabelObject) as mainLabel}
        <SidebarDropdownWrapper class={titleClass} label={mainLabel.name}>
          <svelte:fragment slot="icon">
            <IconPicker religion={mainLabel.name} />
          </svelte:fragment>
          {#each Object.values(secondaryLabelObject) as secondaryLabel}
            <SidebarDropdownItem class={titleClass} label={secondaryLabel.label} on:click={() => handleReligionClick(mainLabel.route, secondaryLabel.route)} />
          {/each}
        </SidebarDropdownWrapper>
        {/each}
        <SidebarItem class={titleClass} label="Quiz" on:click={() => handleClick('quiz')}>
          <svelte:fragment slot="icon">
            <QuestionCircleSolid class={iconClass} />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</div>
  