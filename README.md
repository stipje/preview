## Synopsis

preview.js is a 'small' jQuery library that previews the value of an element on hover. Currently there are no extra options of functions.

## Code Example

```javascript
element.on('mouseover' + namespace, opts.eventSelector, function(e) {
            $("#plaatje").attr("src",$(this).data(opts.dataKey));
        });
}
```

## Motivation

I made this small library to practice my JavaScript skills. It's also one of the school assignments I had to work out.

This short piece of code is written to improve my jQuery skills. It’s an assignment for Fontys Hogescholen ICT & Media Design.

## Installation

Add jQuery and the prieview.js file to your HTML page
```html
<head>
	<script type="text/javascript" src=“preview.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
</head>
```


Make an image element and call it the id “plaatje”. Give a your image a placeholder in the img src. 
```html
<body>
    <img id="plaatje" style="height:100px;" src="img/klein.png"/>
</body>
```

Make an html list and give them a data tag with the image you want to preview.
```html
<body>
    <ul>
        <li data-preview-image="img/stuart.jpg">Stuart</li>
        <li data-preview-image="img/kevin.jpg">Kevin</li>
        <li data-preview-image="img/bob.jpg">Bob</li>
    </ul>
</body>
```

Call the preview function just below your closing body tag.
```javascript
<script>
        var previewImage = new previewImage();
        previewImage.init();
</script>
```

## Tests

[Demo](http://school.irisvanstiphout.nl/preview/)

## Contributors

Iris van Stiphout

## License

N/A