
(function () {
  const password = window.atob('QUVST01BTklBMjAyMw==');
  const unlock = document.querySelectorAll('input[type="checkbox"],input[type="range"]');
  const checkPass = document.querySelector('.check-pass');
  const launchBtn = document.querySelector('.button-launch');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const inputRanges = document.querySelectorAll('input[type="range"]');
  const allInputs = document.querySelectorAll('input');
  const rocket = document.querySelector(".rocket");

  const launchRocket = [
      {},
      {transform: 'rotate(45deg)', bottom: '1316px', left: '650px'},
      


  ];

  const animateTime = {
      duration: 5000,
      iterations: 1,
  }


  for (let item of allInputs) {
      item.onchange = function () {
          let error;

          checkboxes.forEach((item) => {
              if (item.checked !== true) {
                  error = 1;
              }
          });
          inputRanges.forEach((item) => {
              if (item.value !== "100") {
                  error = 1;
              }
          });
          if (!error) {
              launchBtn.disabled = false;
              launchBtn.addEventListener('click', () => {
                  rocket.animate(launchRocket, animateTime).onfinish = function () {
                      window.location='https://www.aeromania.in/'
                  };
              });
          }
      }
  }

  unlock.forEach((item) => {
      item.disabled = true;

  });

  checkPass.addEventListener("click", () => {
      let inputPass = document.getElementById('pass');
      if (inputPass.value === password) {
          unlock.forEach((item) => {
              item.disabled = false;
          });
          checkPass.disabled = true;
          inputPass.disabled = true;
      }
  });

}());