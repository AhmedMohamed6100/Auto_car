let userInfo = document.querySelector("#user_info");
let userD = document.querySelector("#user");
let links = document.querySelector(".header-btn");

// تحقق من إذا كان المستخدم مسجل دخوله
if (localStorage.getItem("username")) {
    // إخفاء روابط الدخول
    if (links) {
        links.remove();
    }
    
    // عرض معلومات المستخدم
    if (userInfo) {
        userInfo.style.display = "flex";
      
    }
    
    // عرض اسم المستخدم في الهيدر
    if (userD) {
        userD.innerHTML = localStorage.getItem("username");
    }
}

// التعامل مع حدث الخروج
let logOutBtn = document.querySelector("#logout");
if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
        // مسح جميع البيانات المخزنة في localStorage
        localStorage.clear();
        
        // يمكن إضافة رسالة مؤقتة أو تنفيذ أي شيء آخر قبل التوجيه
        alert("You have logged out successfully!");
        
        // التوجيه إلى الصفحة الرئيسية بعد فترة قصيرة
        setTimeout(() => {
            window.location = "index.html";
        }, 1500);
    });
}

///////////////////////
function cloneImages() {
  const totalImages = images.length;
  for (let i = 0; i < totalImages; i++) {
    const clone = images[i].cloneNode(true);
    track.appendChild(clone);
  }
}

function autoScroll() {
  setInterval(() => {
    currentPosition -= imageWidth + 15;
    if (Math.abs(currentPosition) >= trackWidth / 2) {
      currentPosition = 0;
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  }, 2000);
}

cloneImages();
autoScroll();
// ////////////////////////////////////////////////////
const products = [
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE",
  "2017 Ford Fusion SE"
];

const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

// الحدث عند الكتابة
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = "";

  if (query) {
      const filteredProducts = products.filter(product =>
          product.toLowerCase().includes(query)
      );

      if (filteredProducts.length > 0) {
          filteredProducts.forEach(product => {
              const div = document.createElement("div");
              div.classList.add("result-item");
              div.textContent = product;
              resultsDiv.appendChild(div);
          });
      } else {
          resultsDiv.innerHTML = "<p>No Result</p>";
      }
  }
});