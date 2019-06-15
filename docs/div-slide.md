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
    * _inner_
        * [~slides](#Slideshow..slides) : <code>NodeList</code> ℗
        * [~current](#Slideshow..current) : <code>HTMLElement</code> ℗
        * [~swipeHandler](#Slideshow..swipeHandler) : <code>SwipeEvent</code> &#124; <code>null</code> ℗
        * [~eventCallbacks](#Slideshow..eventCallbacks) : <code>object</code> ℗
        * [~slideshowClass](#Slideshow..slideshowClass) : <code>string</code> ℗
        * [~slideClass](#Slideshow..slideClass) : <code>string</code> ℗
        * [~currentClass](#Slideshow..currentClass) : <code>string</code> ℗
        * [~mutation](#Slideshow..mutation) : <code>MutationObserver</code> &#124; <code>null</code> ℗
        * [~navigateSlide([dir], [cycleState])](#Slideshow..navigateSlide) ℗
        * [~keepInBound(index, [cycleState])](#Slideshow..keepInBound) ⇒ <code>number</code> ℗
        * [~getSlideIndex(slide)](#Slideshow..getSlideIndex) ⇒ <code>number</code> ℗
        * [~setCurrentSlide(slide)](#Slideshow..setCurrentSlide) ℗
        * [~createButtonsCallbacks()](#Slideshow..createButtonsCallbacks) ⇒ <code>object</code> &#124; <code>null</code> ℗
        * [~setListeners([forceFigures])](#Slideshow..setListeners) ℗

<a name="new_Slideshow_new"></a>

### new Slideshow(param)
Gallery that permits to see images or videos at the maximum of their sizesor, at least the maximum that fits in the window respecting ratio.Removes the controls and caches the overlay.

**Throws**:

- Will throw an error if the container argument isn't an HTMLElement.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>object</code> |  |  |
| [param.container] | <code>string</code> &#124; <code>HTMLElement</code> | <code>&quot;&#x27;#slideshow&#x27;&quot;</code> | Container of the gallery. |
| [param.slideshowSelector] | <code>string</code> | <code>&quot;&#x27;.slideshow&#x27;&quot;</code> | Gallery selector. |
| [param.currentSelector] | <code>string</code> | <code>&quot;&#x27;.current&#x27;&quot;</code> | Selector of the current element. |
| [param.duration] | <code>number</code> | <code>0</code> |  |
| [param.cycle] | <code>boolean</code> | <code>true</code> | Determines if the gallery can cycle when reaches the end-points. |
| [param.swipe] | <code>boolean</code> | <code>false</code> | Determines if the gallery can be navigated with swipes. |
| [param.throwsOpenIndexError] | <code>boolean</code> | <code>false</code> | Determines if the gallery can be navigated with swipes. |

<a name="Slideshow+prev"></a>

### slideshow.prev([cycleState]) ⇒ <code>this</code>
Shows the previous `<figure>`. If the ovelay is closed, opens it.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Emits**: <code>[fig-gallery:prev](#FigureGallery+event_fig-gallery_prev)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="Slideshow+next"></a>

### slideshow.next([cycleState]) ⇒ <code>this</code>
Shows the next `<figure>`. If the ovelay is closed, opens it.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Emits**: <code>[fig-gallery:next](#FigureGallery+event_fig-gallery_next)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [cycleState] | <code>boolean</code> | Determines if the counter must cycle. |

<a name="Slideshow+set"></a>

### slideshow.set(slide) ⇒ <code>this</code>
Sets the current `<slide>`.

**Kind**: instance method of <code>[Slideshow](#Slideshow)</code>  
**Throws**:

- Will throw an error if the argument is null.
- Will throw an error if the argument isn't a child of the container.
- Will throw an error if `throwsSlideIndexError` is set to true and if the user tries to go beyond the end-points.
- Will throw an error if the argument isn't a valid element.

**Emits**: <code>[fig-gallery:setted](#FigureGallery+event_fig-gallery_setted)</code>  

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
<a name="Slideshow..eventCallbacks"></a>

### Slideshow~eventCallbacks : <code>object</code> ℗
Stores the callbacks for the events.

**Kind**: inner property of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
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
<a name="Slideshow..mutation"></a>

### Slideshow~mutation : <code>MutationObserver</code> &#124; <code>null</code> ℗
Will contain MutationObserver instance if supported.

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

<a name="Slideshow..createButtonsCallbacks"></a>

### Slideshow~createButtonsCallbacks() ⇒ <code>object</code> &#124; <code>null</code> ℗
Creates the object that will containt the button callbacks.Returns `null` if `overlay` doesn't exists.Useful for caching.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
**See**: overlay  
<a name="Slideshow..setListeners"></a>

### Slideshow~setListeners([forceFigures]) ℗
Adds or removes all the event listeners to container.Uses `createButtonsCallbacks()` to create the button callbacks andappends them to `eventCallbacks`.

**Kind**: inner method of <code>[Slideshow](#Slideshow)</code>  
**Access:** private  
**See**

- createButtonsCallbacks
- eventCallbacks


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [forceFigures] | <code>boolean</code> | <code>false</code> | Determines if the update must be forced. Useful when MutationObserver isn't supported. |

