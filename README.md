# View Transition API

This repository provides a simple UIX setup, to showcase the new [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).


The **View Transitions API** provides a mechanism for easily creating animated transitions between different website views. This includes animating between DOM states in a single-page app (SPA), and animating the navigation between documents in a multi-page app (MPA).

<video src=".github/example.mp4" width="500"/>


## Enable View Transitions for UIX

Since the View Transitions API has limited availability still and does only work on Chromium based browsers, the API is not enabled per default for UIX projects. Make sure to include the `view-transitions` flag to the experimental_features property in your *app.dx* config file.

```json
experimental_features: ["view-transitions"]
```

# Basic usage
There is a JavaScript API to initiate animations and handle transitions context via `document.startViewTransition()`.

For many usecases it might be enough using the pure CSS solution instead. 

You can define a view transition on the element you want to transition from:

```CSS
.home {
	view-transition-name: my-transition;
}
```

The following selectors are then available to target the old and new states of the element:

```CSS
::view-transition-old(my-transition) {
  /* animate out effects */
}

::view-transition-new(my-transition) {
  /* animate in effects */
}
```

---

<sub>&copy; unyt 2024 • [unyt.org](https://unyt.org)</sub>