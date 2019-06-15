## Functions

<dl>
<dt><a href="#prev">prev([cycleState])</a> ⇒ <code>this</code></dt>
<dd><p>Shows the previous <code>&lt;figure&gt;</code>. If the ovelay is closed, opens it.</p>
</dd>
<dt><a href="#next">next([cycleState])</a> ⇒ <code>this</code></dt>
<dd><p>Shows the next <code>&lt;figure&gt;</code>. If the ovelay is closed, opens it.</p>
</dd>
<dt><a href="#set">set(slide)</a> ⇒ <code>this</code></dt>
<dd><p>Sets the current <code>&lt;slide&gt;</code>.</p>
</dd>
<dt><a href="#updateSlides">updateSlides()</a> ⇒ <code>this</code></dt>
<dd><p>Forces the update of the child list.
Useful when browser doesn&#39;t support MutationObserver.</p>
</dd>
<dt><a href="#getContainer">getContainer()</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Returns the container element.</p>
</dd>
<dt><a href="#getCurrentSlide">getCurrentSlide()</a> ⇒ <code>HTMLElement</code> | <code>null</code></dt>
<dd><p>Returns the current figure element.</p>
</dd>
<dt><a href="#getSwipeHandler">getSwipeHandler()</a> ⇒ <code>SwipeEvent</code> | <code>null</code></dt>
<dd><p>Returns the swipe handler instance, if exists.</p>
</dd>
</dl>

<a name="prev"></a>

## prev([cycleState]) ⇒ <code>this</code>
Shows the previous `<figure>`. If the ovelay is closed, opens it.

**Kind**: global function  
**Emits**: <code>[fig-gallery:prev](#FigureGallery+event_fig-gallery_prev)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="next"></a>

## next([cycleState]) ⇒ <code>this</code>
Shows the next `<figure>`. If the ovelay is closed, opens it.

**Kind**: global function  
**Emits**: <code>[fig-gallery:next](#FigureGallery+event_fig-gallery_next)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="set"></a>

## set(slide) ⇒ <code>this</code>
Sets the current `<slide>`.

**Kind**: global function  
**Throws**:

- Will throw an error if the argument is null.
- Will throw an error if the argument isn't a child of the container.
- Will throw an error if `throwsSlideIndexError` is set to true and if the user tries to go beyond the end-points.
- Will throw an error if the argument isn't a valid element.

**Emits**: <code>[fig-gallery:setted](#FigureGallery+event_fig-gallery_setted)</code>  

| Param | Type | Description |
| --- | --- | --- |
| slide | <code>number</code> &#124; <code>HTMLElement</code> &#124; <code>Node</code> | Index of the element or the                                          element itself to bet setted as                                          current. |

<a name="updateSlides"></a>

## updateSlides() ⇒ <code>this</code>
Forces the update of the child list.Useful when browser doesn't support MutationObserver.

**Kind**: global function  
<a name="getContainer"></a>

## getContainer() ⇒ <code>HTMLElement</code>
Returns the container element.

**Kind**: global function  
<a name="getCurrentSlide"></a>

## getCurrentSlide() ⇒ <code>HTMLElement</code> &#124; <code>null</code>
Returns the current figure element.

**Kind**: global function  
<a name="getSwipeHandler"></a>

## getSwipeHandler() ⇒ <code>SwipeEvent</code> &#124; <code>null</code>
Returns the swipe handler instance, if exists.

**Kind**: global function  
