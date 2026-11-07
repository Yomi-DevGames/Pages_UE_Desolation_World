fetch('./base/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

fetch('./base/navi.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navi').innerHTML = data;
    });

fetch('./base/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });