<!-- Modified version of https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/utils/Popper.svelte -->
<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { createPopper, type Rect } from '@popperjs/core';
  import type { Placement, Instance } from '@popperjs/core';

  export let tooltip: boolean = true; // tooltip mode. changes role to "tooltip" and includes an arrow
  export let offset: number = 8;
  export let placement: Placement = 'top';
  export let triggeredBy: string; // id of trigger element
  export let strategy: 'absolute' | 'fixed' = 'absolute';
  export let open: boolean = false;
  export let yOnly: boolean = false;

  const dispatch = createEventDispatcher();

  $: dispatch('show', open);

  let anchorEl: HTMLElement;
  let triggerEls: HTMLElement[] = [];
  let popper: Instance;

  const showHandler = (ev: Event) => {
    if (anchorEl === undefined) console.error('anchor undefined');
    if (triggerEls.includes(ev.target as HTMLElement) && anchorEl !== ev.target) {
      anchorEl = ev.target as HTMLElement;
    }
    open = ev.type === 'click' ? !open : true;
  };

  // reactivity
  $: popper && popper.setOptions({ placement });

  // typescript typeguards - poper.state.element.reference: Element|HTMLElement|VirtualElement
  const hasHover = (el: object) => (el as Element).matches && (el as Element).matches(':hover');
  const hasFocus = (el: object) =>
    (el as Element).contains && (el as Element).contains(document.activeElement);

  const hideHandler = (ev: Event) => {
    setTimeout(() => {
      const elements = Object.values(popper?.state.elements ?? {});
      if (ev.type === 'mouseleave' && elements.some(hasHover)) return;
      if (ev.type === 'focusout' && elements.some(hasFocus)) return;
      open = false;
    }, 50);
  };

  function init(node: HTMLElement, _anchorEl: HTMLElement) {
    popper = createPopper(_anchorEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: ({ reference, popper }: { reference: Rect; popper: Rect }) => {
              // for full screen mega menu
              return [yOnly ? popper.width / 2 - reference.width / 2 - reference.x : 0, offset];
            }
          }
        },
        { name: 'eventListeners', enabled: open },
        { name: 'flip', enabled: false }
      ]
    });
    return {
      update(_anchorEl: HTMLElement) {
        popper.state.elements.reference = _anchorEl;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }

  onMount(() => {
    const events: [string, any][] = [
      ['focusin', showHandler],
      ['focusout', hideHandler],
      ['mouseenter', showHandler],
      ['mouseleave', hideHandler]
    ];

    triggerEls = [...document.querySelectorAll<HTMLElement>(triggeredBy)];

    if (!triggerEls.length) {
      console.error('No triggers found.');
    }

    triggerEls.forEach((element: HTMLElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler] of events) element.addEventListener(name, handler);
    });

    anchorEl = triggerEls[0];

    return () => {
      triggerEls.forEach((element: HTMLElement) => {
        if (element) {
          for (const [name, handler] of events) element.removeEventListener(name, handler);
        }
      });
    };
  });
</script>

{#if open && anchorEl}
  <div
    role={tooltip ? 'tooltip' : 'navigation'}
    use:init={anchorEl}
    on:focusin={showHandler}
    on:focusout={hideHandler}
    on:mouseenter={showHandler}
    on:mouseleave={hideHandler}
  >
    {#if tooltip}<div class=""/>{/if}
    <slot/>
  </div>
{/if}
