fetch('./base/spe_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('spe_footer').innerHTML = data;
    });