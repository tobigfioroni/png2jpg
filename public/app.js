function convertImage() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    if (file) {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var image = new Image();
        image.onload = function() {
          var canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          
          var convertedImage = canvas.toDataURL(file.type === 'image/png' ? 'image/jpeg' : 'image/png');
          
          var link = document.createElement('a');
          link.href = convertedImage;
          link.download = file.name.replace(/\.[^/.]+$/, '') + (file.type === 'image/png' ? '.jpg' : '.png');
          link.click();
        };
        image.src = e.target.result;
      };
      fileReader.readAsDataURL(file);
    }
  }
  