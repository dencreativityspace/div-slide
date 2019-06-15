<a name="Slideshow"></a>

## Slideshow
**Kind**: global class  
**Version**: 1.0.0  
**Author:** Gennaro Landolfi <gennarolandolfi@codedwork.it>  

* [Slideshow](#Slideshow)
    * [new Slideshow(param)](#new_Slideshow_new)
    * _instance_
        * [.prev([cycleState])](#Slideshow+prev) ⇒ <code>this</code>
        * [.next([cycleState])](#Slideshow+next) ⇒ <code>this</code>
        * [.set(slide)](#Slideshow+set) ⇒ <code>this</code>
        * [.updateSlides()](#Slideshow+updateSlides) ⇒ <code>this</code>
        * [.getContainer()](#Slideshow+getContainer) ⇒ <code>HTMLElement</code>
        * [.getCurrentSlide()](#Slideshow+getCurrentSlide) ⇒ <code>HTMLElement</code> &#124; <code>null</code>
        * [.getSwipeHandler()](#Slideshow+getSwipeHandler) ⇒ <code>SwipeEvent</code> &#124; <code>null</code>
        * [.getInterval()](#Slideshow+getInterval) ⇒ <code>Interval</code> &#124; <code>null</code>
        * ["slideshow:prev"](#Slideshow+slideshow_prev)
        * ["slideshow:next"](#Slideshow+slideshow_next)
        * ["slideshow:setted"](#Slideshow+slideshow_setted)
    * _inner_
        * [~slides](#Slideshow..slides) : <code>NodeList</code> ℗
        * [~current](#Slideshow..current) : <code>HTMLElement</code> ℗
        * [~swipeHandler](#Slideshow..swipeHandler) : <code>SwipeEvent</code> &#124; <code>null</code> ℗
        * [~interval](#Slideshow..interval) : <code>Interval</code> &#124; <code>null</code> ℗
        * [~slideshowClass](#Slideshow..slideshowClass) : <code>string</code> ℗
        * [~slideClass](#Slideshow..slideClass) : <code>string</code> ℗
        * [~currentClass](#Slideshow..currentClass) : <code>string</code> ℗
        * [~navigateSlide([dir], [cycleState])](#Slideshow..navigateSlide) ℗
        * [~keepInBound(index, [cycleState])](#Slideshow..keepInBound) ⇒ <code>number</code> ℗
        * [~getSlideIndex(slide)](#Slideshow..getSlideIndex) ⇒ <code>number</code> ℗
        * [~setCurrentSlide(slide)](#Slideshow..setCurrentSlide) ℗

<a name="new_Slideshow_new"></a>

### new Slideshow(param)
Slideshow that uses pure HTML for each slide element.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>object</code> |  |  |
| [param.container] | <code>HTMLElement</code> &#124; <code>string</code> | <code>&quot;#slideshow&quot;</code> | Container of all the slides. |
| [param.slideshowSelector] | <code>string</code> | <code>&quot;\&quot;.slideshow\&quot;&quot;</code> | Class selector for the slideshow. |
| [param.slideSelector] | <code>string</code> | <code>&quot;\&quot;.slide\&quot;&quot;</code> | Class selector for all the slides. |
| [param.currentSelector] | <code>string</code> | <code>&quot;\&quot;.current\&quot;&quot;</code> | Class selector for the current slide. |
| [param.duration] | <code>number</code> | <code>0</code> |  |
| [param.cycle] | <code>boolean</code> | <code>true</code> |  |
| [param.swipe] | <code>boolean</code> | <code>false</code> |  |
| [param.throwsSlideIndexError] | <code>boolean</code> | <code>false</code> |  |

<a name="Slideshow+prev"></a>

### slideshow.prev([cycleState]) ⇒ <code>this</code>
Shows the previous slide.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Emits**: <code>[slideshow:prev](#Slideshow+slideshow_prev)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="Slideshow+next"></a>

### slideshow.next([cycleState]) ⇒ <code>this</code>
Shows the next slide.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Emits**: <code>[slideshow:next](#Slideshow+slideshow_next)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="Slideshow+set"></a>

### slideshow.set(slide) ⇒ <code>this</code>
Sets the current slide.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Throws**:

- Will throw an error if the argument is null.
- Will throw an error if the argument isn't a child of the container.
- Will throw an error if `throwsSlideIndexError` is set to true and if the user tries to go beyond the end-points.
- Will throw an error if the argument isn't a valid element.

**Emits**: <code>[slideshow:setted](#Slideshow+slideshow_setted)</code>  

| Param | Type | Description |
| --- | --- | --- |
| slide | <code>number</code> &#124; <code>HTMLElement</code> &#124; <code>Node</code> | Index of the element or the                                          element itself to bet setted as                                          current. |

<a name="Slideshow+updateSlides"></a>

### slideshow.updateSlides() ⇒ <code>this</code>
Forces the update of the child list.Useful when browser doesn't support MutationObserver.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
<a name="Slideshow+getContainer"></a>

### slideshow.getContainer() ⇒ <code>HTMLElement</code>
Returns the container element.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
<a name="Slideshow+getCurrentSlide"></a>

### slideshow.getCurrentSlide() ⇒ <code>HTMLElement</code> &#124; <code>null</code>
Returns the current figure element.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
<a name="Slideshow+getSwipeHandler"></a>

### slideshow.getSwipeHandler() ⇒ <code>SwipeEvent</code> &#124; <code>null</code>
Returns the swipe handler instance, if exists.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**See**: [swipe-event](https://github.com/dencreativityspace/swipe-event)  
<a name="Slideshow+getInterval"></a>

### slideshow.getInterval() ⇒ <code>Interval</code> &#124; <code>null</code>
Returns the swipe handler instance, if exists.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**See**: [interval](https://github.com/dencreativityspace/interval)  
<a name="Slideshow+slideshow_prev"></a>

### "slideshow:prev"
Event triggered when the slideshow gets navigated to the previous element.

**Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| current | <code>HTMLElement</code> | Current slide element in container. |
| next | <code>HTMLElement</code> | Old current slide element in container which succeeds the current. |

<a name="Slideshow+slideshow_next"></a>

### "slideshow:next"
Event triggered when the slideshow gets navigated to the next element.

**Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| current | <code>HTMLElement</code> | Current slide element in container. |
| prev | <code>HTMLElement</code> | Old current slide element in container which precedes the current. |

<a name="Slideshow+slideshow_setted"></a>

### "slideshow:setted"
Event triggered when the slideshow gets setted on a specific element.

**Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| current | <code>HTMLElement</code> | Current slide element in container. |
| old | <code>HTMLElement</code> | Old current slide element in container. |

<a name="Slideshow..slides"></a>

### Slideshow~slides : <code>NodeList</code> ℗
Gets all the slides.

**Kind**: inner property of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
<a name="Slideshow..current"></a>

### Slideshow~current : <code>HTMLElement</code> ℗
Represents the current element in container.

**Kind**: inner property of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
<a name="Slideshow..swipeHandler"></a>

### Slideshow~swipeHandler : <code>SwipeEvent</code> &#124; <code>null</code> ℗
Contains the swipe handler if SwipeEvent is present.

**Kind**: inner property of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
**See**: [swipe-event](https://github.com/dencreativityspace/swipe-event)  
<a name="Slideshow..interval"></a>

### Slideshow~interval : <code>Interval</code> &#124; <code>null</code> ℗
Contains the interval handler if Interval is present.

**Kind**: inner property of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
**See**: [interval](https://github.com/dencreativityspace/interval)  
<a name="Slideshow..slideshowClass"></a>

### Slideshow~slideshowClass : <code>string</code> ℗
CSS class of the slideshow. Applies to container.

**Kind**: inner constant of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
<a name="Slideshow..slideClass"></a>

### Slideshow~slideClass : <code>string</code> ℗
CSS class of the slide. Applies to container.

**Kind**: inner constant of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
<a name="Slideshow..currentClass"></a>

### Slideshow~currentClass : <code>string</code> ℗
CSS class for the current slide. Applies to the original selected <div>and the chosen one. Can be applied only to one element at the time.

**Kind**: inner constant of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
<a name="Slideshow..navigateSlide"></a>

### Slideshow~navigateSlide([dir], [cycleState]) ℗
Lets the user navigate through the slideshow.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
**See**

- setCurrentSlide
- getSlideIndex
- KeepInBound


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [dir] | <code>number</code> | <code>1</code> | Number of elements next or before the current. |
| [cycleState] | <code>boolean</code> | <code>cycle</code> | Determines if the counter must cycle. |

<a name="Slideshow..keepInBound"></a>

### Slideshow~keepInBound(index, [cycleState]) ⇒ <code>number</code> ℗
Keeps slides index in bound.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| index | <code>number</code> |  | Index to check if in bound. |
| [cycleState] | <code>boolean</code> | <code>cycle</code> | Determines if function have to keep in bound considering the possibility to cycle through the elements. |

<a name="Slideshow..getSlideIndex"></a>

### Slideshow~getSlideIndex(slide) ⇒ <code>number</code> ℗
Gets the index of the given slide.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  

| Param | Type |
| --- | --- |
| slide | <code>HTMLElement</code> | 

<a name="Slideshow..setCurrentSlide"></a>

### Slideshow~setCurrentSlide(slide) ℗
Sets the given slide as current.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  

| Param | Type |
| --- | --- |
| slide | <code>HTMLElement</code> &#124; <code>Node</code> | 

