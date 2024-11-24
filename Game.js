let userBalance = 1000; // الرصيد
let userStocks = 100; // الأسهم
let userEmployees = 0; // عدد الموظفين
let cases = []; // القضايا المرفوعة

// دالة لرفع قضية
function fileCase() {
    alert("قضية مرفوعة ضد شركتك!");
}

// دالة لعرض المحاميين
function viewLawyers() {
    alert("عرض المحاميين لديك: المحامي الأول, المحامي الثاني.");
}

// دالة لعرض الشركات المنافسة
function viewCompetitors() {
    alert("شركات منافسة: شركة X, شركة Y, شركة Z.");
}

// دالة لتقييم العملاء
function rateCustomer() {
    let rating = prompt("أعطِ العميل تقييمًا من 1 إلى 5");
    alert("تم تقييم العميل بـ: " + rating + " نجوم");
}

// دالة لعرض قائمة الأغنياء
function viewRichList() {
    alert("قائمة الأغنياء: 1. شخص A, 2. شخص B, 3. شخص C");
}

// دالة لبدء اللعبة بناءً على السنة المختارة
function startGame() {
    let selectedYear = document.getElementById('year-selection').value;
    alert("تم بدء اللعبة لعام: " + selectedYear);
}

// دالة لرفع قضية ضد الشركة من قبل العملاء أو شركات أخرى
function fileCaseAgainstCompany() {
    let caseDescription = prompt("وصف القضية ضد شركتك:");
    cases.push(caseDescription);
    alert("تم رفع القضية بنجاح!");
}

// دالة لعرض القضايا المرفوعة ضد الشركة
function viewCases() {
    if (cases.length === 0) {
        alert("لا توجد قضايا مرفوعة ضد شركتك.");
    } else {
        alert("القضايا المرفوعة: " + cases.join(", "));
    }
}
