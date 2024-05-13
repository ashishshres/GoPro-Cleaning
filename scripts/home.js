let homeServiceBtn = document.querySelectorAll(".home-service-btn");
allServiceBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        window.location.href = "./pages/services.html";
    });
});
