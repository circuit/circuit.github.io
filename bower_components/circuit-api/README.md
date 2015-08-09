# circuit-api

`circuit-api` provides access the Circuit JS SDK, including the logon functionality.
It internally uses `circuit-login-dialog` to prompt for credentials if needed.

The `circuit-api` is usually used internally by other circuit elements to access the 
JS SDK. 

Example:

```html
<circuit-api auto-logon domain="circuitsandbox.net"></circuit-api>
```

## Prerequisites

To use any Circuit Polymer elements you need to get free developer account. Get yours today at the [developer portal](https://developers.circuit.com).

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install

## Playing with the element

If you wish to work on this or any other element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/circuit-api/`, where `circuit-api` is the name of the directory containing it.

