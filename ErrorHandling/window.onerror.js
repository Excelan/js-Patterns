  <script>
    'use strict';
    "use strict"
    
      window.onerror = function(message, url, lineNumber) {
      var ert = document.createElement("h3")
      ert.innerHTML = (
        "Поймана ошибка, выпавшая в глобальную область!\n" +
        "Сообщение: <br>" + message + "<br>(" + url + ")" + "<br> lineNumber:" +lineNumber);
      document.body.appendChild(ert);
  };
  ...
