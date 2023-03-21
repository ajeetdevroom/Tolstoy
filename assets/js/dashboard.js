setTimeout(function () {
    let get3 = document.getElementById('logoimg1');
    get3.style.display = 'none';
    let get = document.getElementById('logoimg2');
    get.style.display = 'block';
  }, 2000);
  setTimeout(function () {
    let get1 = document.getElementById('logoimg1');
    let get2 = document.getElementById('logoimg2');
    let get = document.getElementById('content');
    get1.style.display = 'none';
    get2.style.display = 'none';
    get.style.display = 'block';

  }, 2500);
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".search");
  btn.onclick = function () {
    sidebar.classList.toggle("active");
    searchBtn.style.display=='none'?'block':'none';
  }
  
