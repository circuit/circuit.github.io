# circuit-chat

`circuit-chat` is a simple chat module that uses Circuit PaaS. Send an receive messages of a Circuit direct or group conversation.

## Usage

```html
<link rel="import" href="components/circuit-chat/circuit-chat.html">

<circuit-chat
  auto-logon 
  conversation="ef675fc5-dcb1-4fe2-bcd1-83f32be5466f">
</circuit-chat>
```

## Prerequisites

To use any Circuit Polymer elements you need to get free developer account. Get yours today at the [developer portal](https://developers.circuit.com).

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing with the element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/circuit-chat/`, where `circuit-chat` is the name of the directory containing it.
