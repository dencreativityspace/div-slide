"use strict";

/**
 * Gallery that permits to see images or videos at the maximum of their sizes
 * or, at least the maximum that fits in the window respecting ratio.
 * Removes the controls and caches the overlay.
 *
 * @constructor
 *
 * @param {object} param
 * @param {string|HTMLElement} [param.container='#slideshow'] Container of the gallery.
 * @param {string} [param.slideshowSelector='.slideshow'] Gallery selector.
 * @param {string} [param.currentSelector='.current'] Selector of the current element.
 * @param {number} [param.duration=0]
 * @param {boolean} [param.cycle=true] Determines if the gallery can cycle when reaches the end-points.
 * @param {boolean} [param.swipe=false] Determines if the gallery can be navigated with swipes.
 * @param {boolean} [param.throwsOpenIndexError=false] Determines if the gallery can be navigated with swipes.
 *
 * @throws Will throw an error if the container argument isn't an HTMLElement.
 *
 * @version 1.0.0
 *
 * @author Gennaro Landolfi <gennarolandolfi@codedwork.it>
 */
function Slideshow(_ref) {
  var _this = this;

  var _ref$container = _ref.container,
      container = _ref$container === void 0 ? '#slideshow' : _ref$container,
      _ref$slideshowSelecto = _ref.slideshowSelector,
      slideshowSelector = _ref$slideshowSelecto === void 0 ? '.slideshow' : _ref$slideshowSelecto,
      _ref$slideSelector = _ref.slideSelector,
      slideSelector = _ref$slideSelector === void 0 ? '.slide' : _ref$slideSelector,
      _ref$currentSelector = _ref.currentSelector,
      currentSelector = _ref$currentSelector === void 0 ? '.current' : _ref$currentSelector,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$cycle = _ref.cycle,
      cycle = _ref$cycle === void 0 ? true : _ref$cycle,
      _ref$swipe = _ref.swipe,
      swipe = _ref$swipe === void 0 ? false : _ref$swipe,
      _ref$throwsOpenIndexE = _ref.throwsOpenIndexError,
      throwsSlideIndexError = _ref$throwsOpenIndexE === void 0 ? false : _ref$throwsOpenIndexE;

  // Type-checks
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }

  if (!(container instanceof HTMLElement)) {
    throw new Error('The slideshow container must be a valid DOM element.');
  } // Shorthand to easily reach `this`.


  var that = this; // Class mapping:

  /**
   * CSS class of the slideshow. Applies to container.
   *
   * @constant
   * @type {string}
   *
   * @private
   */

  var slideshowClass = slideshowSelector.substr(1);
  /**
   * CSS class of the slide. Applies to container.
   *
   * @constant
   * @type {string}
   *
   * @private
   */

  var slideClass = slideSelector.substr(1);
  /**
   * CSS class for the current slide. Applies to the original selected <div>
   * and the chosen one. Can be applied only to one element at the time.
   *
   * @constant
   * @type {string}
   *
   * @private
   */

  var currentClass = currentSelector.substr(1); // Sets the slideshow class.

  if (!container.classList.contains(slideshowClass)) {
    container.classList.add(slideshowClass);
  }
  /**
   * Gets all the slides.
   *
   * @type {NodeList}
   *
   * @private
   */


  var slides = container.querySelectorAll(slideSelector);
  /**
  * Represents the current element in container.
  *
  * @type {HTMLElement}
  *
  * @private
  */

  var current = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var slide = _step.value;

        if (slide.classList.contains(currentClass)) {
          return slide;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return slides[0] || null;
  }();
  /**
  * Contains the swipe handler if SwipeEvent is present.
  *
  * @type {SwipeEvent|null}
  *
  * @private
  *
  * @see {@link https://github.com/dencreativityspace/swipe-event|swipe-event}
  */


  var swipeHandler = function () {
    if (swipe && typeof SwipeEvent === 'function') {
      return new SwipeEvent({
        element: container,
        itemSelector: slideSelector,
        activeSelector: currentSelector
      });
    }

    return null;
  }();
  /**
  * Stores the callbacks for the events.
  *
  * @type {object}
  *
  * @private
  */


  var eventCallbacks = {
    keyboardNavigation: function keyboardNavigation(e) {
      if (that.isOpen()) {
        var key = e.key || e.which || e.keyCode || 0;

        switch (key) {
          case 37:
            // Left arrow
            that.prev();
            break;

          case 39:
            // Right arrow
            that.next();
            break;

          case 36:
            // Home
            that.set(0);
            break;

          case 35:
            // End
            that.set(-1);
            break;
        }
      }
    },
    swipeNavigation: function swipeNavigation(e) {
      var direction = e.detail.direction || e.direction || null;

      if (direction === 'left') {
        that.prev();
      } else if (direction === 'right') {
        that.next();
      }
    },
    buttons: createButtonsCallbacks()
  }; // Private methods

  /**
   * Lets the user navigate through the slideshow.
   *
   * @param {number} [dir=1] Number of elements next or before the current.
   * @param {boolean} [cycleState=cycle] Determines if the counter must cycle.
   *
   * @see setCurrentSlide
   * @see getSlideIndex
   * @see KeepInBound
   *
   * @private
   */

  function navigateSlide() {
    var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var cycleState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cycle;
    setCurrentSlide(slides[keepInBound(getSlideIndex(current) + dir, cycleState)]);
  }
  /**
   * Keeps slides index in bound.
   *
   * @param {number} index Index to check if in bound.
   * @param {boolean} [cycleState=cycle] Determines if function have to keep
   * in bound considering the possibility to cycle through the elements.
   *
   * @return {number}
   * @private
   */


  function keepInBound(index) {
    var cycleState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cycle;
    return (cycleState && index < 0 ? slides.length + index + slides.length : index) % slides.length;
  }
  /**
   * Gets the index of the given slide.
   *
   * @param {HTMLElement} slide
   *
   * @return {number}
   *
   * @private
   */


  function getSlideIndex(slide) {
    return Array.prototype.indexOf.call(slides, slide);
  }
  /**
   * Sets the given slide as current.
   *
   * @param {HTMLElement|Node} slide
   *
   * @private
   */


  function setCurrentSlide(slide) {
    if (current != null) {
      current.classList.remove(currentClass);
    }

    slide.classList.add(currentClass);
    current = slide;
  }
  /**
   * Creates the object that will containt the button callbacks.
   * Returns `null` if `overlay` doesn't exists.
   * Useful for caching.
   *
   * @return {object|null}
   *
   * @see overlay
   *
   * @private
   */


  function createButtonsCallbacks() {
    /*if (overlay) {
        let callbacks = {};
          for (const type of Object.keys(overlay.buttons)) {
            callbacks[type] = (e) => {
                e.stopImmediatePropagation();
                  that[type]();
            };
        }
          return callbacks;
    }*/
    return null;
  } // Event Listeners

  /**
   * Adds or removes all the event listeners to container.
   * Uses `createButtonsCallbacks()` to create the button callbacks and
   * appends them to `eventCallbacks`.
   *
   * @function
   *
   * @param {boolean} [forceFigures=false] Determines if the update must be forced.
   * Useful when MutationObserver isn't supported.
   *
   * @see createButtonsCallbacks
   * @see eventCallbacks
   *
   * @private
   */


  var setListeners = function setListenersFn() {
    var forceFigures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    // Keyboard navigation
    container.addEventListener('keydown', eventCallbacks.keyboardNavigation); // Swipe navigation - since 1.1.0

    if (swipeHandler) {
      swipeHandler.attach();
      /**
       * @listens SwipeEvent#swipe
       * @see {@link https://github.com/dencreativityspace/swipe-event|SwipeEvent}
       */

      container.addEventListener('swipe', eventCallbacks.swipeNavigation);
    }

    return setListenersFn;
  }(true);
  /**
   * Will contain MutationObserver instance if supported.
   *
   * @constant
   * @type {MutationObserver|null}
   *
   * @private
   */


  var mutation = function () {
    if ('MutationObserver' in window) {
      var m = new MutationObserver(function (mutations) {
        mutations.forEach(function (mut) {
          if (mut.type === 'childList') {
            slides = container.querySelectorAll(slideSelector);

            if (mut.removedNodes && current in mut.removedNodes.values()) {
              current = slides[0] || null;
            }
          }
        });
      });
      m.observe(container, {
        childList: true
      });
      return m;
    }

    return null;
  }(); // Public methods

  /**
   * Shows the previous `<figure>`. If the ovelay is closed, opens it.
   *
   * @param   {boolean}   [cycleState]   Determines if the counter must cycle.
   *
   * @emits FigureGallery#fig-gallery:prev
   *
   * @return  {this}
  */


  this.prev = function () {
    var cycleState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cycle;
    var oldCurrent = current;
    navigateSlide(-1, cycleState);
    var prevEvent = null;

    if (typeof window.CustomEvent !== 'function') {
      prevEvent = document.createEvent('slideshow:prev');
      prevEvent.initCustomEvent('slideshow:prev', false, false, {
        current: current,
        next: oldCurrent,
        active: that.getCurrentSlide()
      });
    } else {
      prevEvent = new CustomEvent('slideshow:prev', {
        detail: {
          current: current,
          next: oldCurrent,
          active: that.getCurrentSlide()
        }
      });
    }
    /**
     * Event triggered when the gallery gets navigated to the previous element.
     *
     * @event FigureGallery#fig-gallery:prev
     * @type {object}
     * @property {HTMLElement} current - Current active <figure> element in container.
     * @property {HTMLElement} next - Old active <figure> element in container which succeeds the current.
     * @property {HTMLElement} active - Active <figure> element in overlay.
     */


    container.dispatchEvent(prevEvent);
    return _this;
  };
  /**
   * Shows the next `<figure>`. If the ovelay is closed, opens it.
   *
   * @param   {boolean}   [cycleState]   Determines if the counter must cycle.
   *
   * @emits FigureGallery#fig-gallery:next
   *
   * @return  {this}
  */


  this.next = function () {
    var cycleState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cycle;
    var oldCurrent = current;
    navigateSlide(1, cycleState);
    var nextEvent = null;

    if (typeof window.CustomEvent !== 'function') {
      nextEvent = document.createEvent('slideshow:next');
      nextEvent.initCustomEvent('slideshow:next', false, false, {
        current: current,
        prev: oldCurrent,
        active: that.getCurrentSlide()
      });
    } else {
      nextEvent = new CustomEvent('slideshow:next', {
        detail: {
          current: current,
          prev: oldCurrent,
          active: that.getCurrentSlide()
        }
      });
    }
    /**
     * Event triggered when the gallery gets navigated to the next element.
     *
     * @event FigureGallery#fig-gallery:next
     * @type {object}
     * @property {HTMLElement} current - Current active <figure> element in container.
     * @property {HTMLElement} prev - Old active <figure> element in container which precedes the current.
     * @property {HTMLElement} active - Active <figure> element in overlay.
     */


    container.dispatchEvent(nextEvent);
    return _this;
  };
  /**
   * Sets the current `<slide>`.
   *
   * @param   {number|HTMLElement|Node}   slide   Index of the element or the
   *                                          element itself to bet setted as
   *                                          current.
   *
   * @emits FigureGallery#fig-gallery:setted
   *
   * @return  {this}
   *
   * @throws Will throw an error if the argument is null.
   * @throws Will throw an error if the argument isn't a child of the container.
   * @throws Will throw an error if `throwsSlideIndexError` is set to true and if the user tries to go beyond the end-points.
   * @throws Will throw an error if the argument isn't a valid element.
  */


  this.set = function (slide) {
    if (!slide) {
      throw new Error('The given element is not a valid value. Please, insert an integer or a DOM element.');
    }

    if (typeof slide === 'number') {
      if (throwsSlideIndexError) {
        if (slide > slides.length - 1 || Math.abs(slide) > slides.length - 1) {
          throw new Error("The element #".concat(slide, " cannot be found."));
        }
      } else {
        slide = keepInBound(slide);
      }

      slide = slides[slide];
    } else if (slide instanceof HTMLElement) {
      if (getSlideIndex(slide) < 0) {
        throw new Error('The given element is not in this gallery.');
      }
    } else {
      throw new Error('The given element is not a valid value. Please, insert an integer or a DOM element.');
    }

    var oldCurrent = current;
    setCurrentSlide(slide);
    var settedEvent = null;

    if (typeof window.CustomEvent !== 'function') {
      settedEvent = document.createEvent('slideshow:setted');
      settedEvent.initCustomEvent('slideshow:setted', false, false, {
        current: current,
        old: oldCurrent,
        active: that.getCurrentSlide()
      });
    } else {
      settedEvent = new CustomEvent('slideshow:setted', {
        detail: {
          current: current,
          old: oldCurrent,
          active: that.getCurrentSlide()
        }
      });
    }
    /**
     * Event triggered when the gallery gets setted on a specific element.
     *
     * @event FigureGallery#fig-gallery:setted
     * @type {object}
     * @property {HTMLElement} current - Current active <slide> element in container.
     * @property {HTMLElement} old - Old active <slide> element in container.
     * @property {HTMLElement} active - Active <slide> element in overlay.
     */


    container.dispatchEvent(settedEvent);
    return _this;
  };
  /**
   * Forces the update of the child list.
   * Useful when browser doesn't support MutationObserver.
   *
   * @return  {this}
  */


  this.updateSlides = function () {
    slides = container.querySelectorAll(slideSelector);

    if (!(current in slides)) {
      current = slides[0] || null;
    }

    return _this;
  };
  /**
   * Returns the container element.
   *
   * @return  {HTMLElement}
  */


  this.getContainer = function () {
    return container;
  };
  /**
   * Returns the current figure element.
   *
   * @return  {HTMLElement|null}
  */


  this.getCurrentSlide = function () {
    return current;
  };
  /**
   * Returns the swipe handler instance, if exists.
   *
   * @return  {SwipeEvent|null}
   */


  this.getSwipeHandler = function () {
    return swipeHandler;
  };
}