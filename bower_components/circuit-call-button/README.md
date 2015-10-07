# circuit-call-button

An element providing a button to initiate Circuit direct voice/video calls.

The `controls` attribute shows the call controls: video toggle and mute/unmute.

The `create-conversation` attribute indicates whether to create the conversation if it does not exist yet..

The local video can either be shown as overlay (default), or manually defined via a CSS selector.


```html
  <circuit-call-button
    controls
    create-conversation
    peer-video-selector="#videocontainer">Start Call</circuit-call-button>

  <div id="videocontainer"></div>
```

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/circuit-call-button/`, where `circuit-call-button` is the name of the directory containing it.

