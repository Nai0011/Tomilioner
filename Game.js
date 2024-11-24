// الخصائص الأساسية
let player = {
  name: "Player",
  money: 1000,
  shares: 100,
  employees: 0,
  lawyers: 0,
  company: {
    name: "My Company",
    products: ["Furniture", "Electronics"],
    competitors: [],
    issues: [],
  },
  carsOwned: [],
  serverProtection: false,
};

// دالة بدء اللعبة
function startGame() {
  let userName = prompt("أدخل اسم شركتك:");
  player.company.name = userName;
  document.getElementById("playerName").innerText = "الاسم: " + player.name;
  document.getElementById("gameControls").style.display = "block";
  document.getElementById("welcomeMessage").style.display = "none";
  alert("مرحباً بك في لعبة التاجر!");
}

// توظيف موظف
function hireEmployee() {
  player.employees++;
  player.money -= 200;
  document.getElementById("employeeCount").innerText = player.employees;
  alert("تم توظيف موظف جديد!");
}

// تقييم الشركة
function evaluateCompany() {
  player.company.rating = (player.company.rating || 5) + 1;
  alert("تم تقييم شركتك بـ " + player.company.rating + " نجوم.");
}

// إضافة منافس
function addCompetitor() {
  let competitorName = prompt("أدخل اسم الشركة المنافسة:");
  player.company.competitors.push(competitorName);
  alert(competitorName + " أصبحت منافسك الجديد.");
}

// رفع قضية
function raiseIssue() {
  let issue = prompt("أدخل تفاصيل القضية:");
  player.company.issues.push(issue);
  alert("تم رفع قضية: " + issue);
}

// استيراد منتج
function importProduct() {
  let product = prompt("أدخل اسم المنتج لاستيراده:");
  player.company.products.push(product);
  player.money -= 300;
  alert(product + " تم استيراده بنجاح!");
}

// بيع منتج
function sellProduct() {
  let product = prompt("أدخل اسم المنتج للبيع:");
  if (player.company.products.includes(product)) {
    player.money += 100;
    alert("تم بيع " + product + " بنجاح!");
  } else {
    alert("هذا المنتج غير متوفر للبيع.");
  }
}

// فتح مصنع سيارات
function startCarFactory() {
  player.company.assets += 500;
  alert("تم فتح مصنع السيارات بنجاح!");
}

// عرض السيارات
function displayCars() {
  alert("السيارات المتاحة للبيع: " + player.carsOwned.join(", "));
}

// شراء سيارة
function buyCar() {
  let carModel = prompt("أدخل نوع السيارة (مثل: Toyota, BMW, Audi):");
  player.carsOwned.push(carModel);
  player.money -= 500;
  alert("تم شراء سيارة " + carModel);
}

// اختراق شركة منافسة
function hackCompetitor() {
  if (player.serverProtection) {
    alert("السيرفر محمي، لا يمكن اختراقه.");
  } else {
    alert("تم اختراق الشركة المنافسة!");
  }
}

// حماية السيرفر
function protectServer() {
  player.serverProtection = true;
  alert("تم حماية السيرفر!");
}
