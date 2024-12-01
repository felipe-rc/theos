<script>
// @ts-nocheck
    import FaSolidCross from '~icons/fa-solid/cross';
    import FaSolidBible from '~icons/fa-solid/bible';
    import FaSolidStarOfDavid from '~icons/fa-solid/star-of-david'
    import FaSolidDharmachakra from '~icons/fa-solid/dharmachakra'
    import FaSolidStarAndCrescent from '~icons/fa-solid/star-and-crescent'
    const iconClass = 'w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white'
    let { religion } = $props();
  </script>
  
  <style>
  </style>
  
{#if religion === 'Catolicismo'}
    <div>
        <FaSolidCross class={iconClass} />
    </div>
{:else if religion === 'Evangélica'}
    <div>
        <FaSolidBible class={iconClass} />
    </div>
{:else if religion === 'Judaica'}
    <div>
        <FaSolidStarOfDavid class={iconClass} />
    </div>
{:else if religion === 'Budismo'}
    <div>
        <FaSolidDharmachakra class={iconClass} />
    </div>
{:else if religion === 'Islamismo'}
    <div>
        <FaSolidStarAndCrescent class={iconClass} />
    </div>
{/if}