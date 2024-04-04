# Animation
## HTML element animation library

Methods:
* fadeIn
* fadeOut
* flyIn
* flyOut

Use:
> No need to call any constructor.

Just call these methods over any HTMLElement type. 
Example
```js
  import { flyIn } from '...';
  const elem = document.getElementById('myElem');
  flyIn(elem, {x: 0, y: 500}, 1000, true);
```

import the library via esmodule or add via script tag. To use the smalled file, use the minified version.
Thanks
