// البيانات الأولية
let money = 1000;
let companyStocks = 100;
let companyName = "شركة التاجر الناجح";
let lawyers = [
    { name: "محمد", specialization: "قضايا تجارية", successRate: 0.7 },
    { name: "أحمد", specialization: "قضايا مالية", successRate: 0.8 }
];
let employees = [
    { name: "علي", position: "موظف مبيعات", salary: 3000 },
    { name: "فاطمة", position: "مدير قسم", salary: 5000 }
];
let competitors = [
    { name: "شركة المستقبل", budget: 5000, lawyers: 2, rating: 4.5 },
    { name: "شركة النخبة", budget: 7000, lawyers: 3, rating: 4.7 }
];
let wealthyList = [
    { name: "أنت", wealth: 1000000 },
    { name: "شركة المستقبل", wealth: 500000 },
    { name: "شركة النخبة", wealth: 700000 }
];

// تغيير الموسم
function changeSeason(season) {
    // معطيات كل موسم
    let currentEffect = seasonEvents[season];
    document.getElementById("season-description").textContent = currentEffect.description;
    money *= currentEffect.multiplier;
    document.getElementById("money-display").textContent = `الأموال: ${money.toFixed(2)} ريال`;
}

// رفع قضية ضد الشركة
function fileLawsuit() {
    let lawsuitChance = calculateLawsuitChance();
    alert("تم رفع القضية ضد شركتك. احتمال الخسارة: " + lawsuitChance + "%");
}

// حساب فرصة الخسارة في القضية
function calculateLawsuitChance() {
    let totalLawyers = lawyers.length;
    let successRate = lawyers.reduce((sum, lawyer) => sum + lawyer.successRate, 0) / totalLawyers;
    let lawsuitChance = 100 - (successRate * 100);
    return lawsuitChance.toFixed(2);
}

// تقييم العميل
function rateCustomer() {
    let customerRating = prompt("قم بتقييم العميل من 1 إلى 5");
    alert(`تم تقييم العميل بـ: ${customerRating}`);
}

// إضافة الشركات المنافسة
function updateCompetitorList() {
    let competitorListHTML = competitors.map(comp => 
        `<li>${comp.name} - ميزانية: ${comp.budget} ريال - المحاميين: ${comp.lawyers} - التقييم: ${comp.rating}</li>`
    ).join('');
    document.getElementById("competitor-list").innerHTML = competitorListHTML;
}

// ترتيب الأغنياء
function updateWealthyList() {
    wealthyList.sort((a, b) => b.wealth - a.wealth);
    let wealthyListHTML = wealthyList.map(person => 
        `<li>${person.name} - الثروة: ${person.wealth} ريال</li>`
    ).join('');
    document.getElementById("wealthy-list").innerHTML = wealthyListHTML;
}

// إضافة محاميين جدد
function hireLawyer(name, specialization) {
    lawyers.push({ name, specialization, successRate: 0.75 });
    updateLawyerList();
}

// إضافة موظفين جدد
function hireEmployee(name, position, salary) {
    employees.push({ name, position, salary });
    updateEmployeeList();
}

// تحديث قائمة المحاميين
function updateLawyerList() {
    let lawyerListHTML = lawyers.map(lawyer => 
        `<li>${lawyer.name} - تخصص: ${lawyer.specialization} - نسبة النجاح: ${lawyer.successRate * 100}%</li>`
    ).join('');
    document.getElementById("lawyers-list").innerHTML = lawyerListHTML;
}

// تحديث قائمة الموظفين
function updateEmployeeList() {
    let employeeListHTML = employees.map(emp => 
        `<li>${emp.name} - ${emp.position} - راتب: ${emp.salary} ريال</li>`
    ).join('');
    document.getElementById("employee-list").innerHTML = employeeListHTML;
}

// بدء اللعبة
updateCompetitorList();
updateWealthyList();
updateLawyerList();
updateEmployeeList();