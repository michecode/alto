Hi future Maddy.

OK so I made some duplicate components kinda. It makes it a little more confusing/harder to maintain(?) but way easier to read.

Stuff to look for below...

`PlantNavigation.svelte` - The desktop simple flex bar hides on mobile. On mobile it will switch to a very similar div that
stays fixed to the top of the site.  
`TargetMenu.svelte` - The desktop popper-esque thing will hide on mobile while a drawer will render.
