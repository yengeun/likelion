document.addEventListener("DOMContentLoaded", function() {
    //슬라이드
    var t = 0;
    var slideInterval = setInterval(slide, 2000);

    function slide() {
        if (t < 2) {
            t++;
        } else {
            t = 0;
        }
        var slideList = document.querySelector(".slide ul");
        slideList.style.top = (t * 350 * -1) + "px";
    }

    // 탭메뉴
    var tabMenuItems = document.querySelectorAll(".tabmenu li");
    tabMenuItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            tabMenuItems.forEach(function(tab) {
                tab.classList.remove("on");
            });
            this.classList.add("on");

            var tabCons = document.querySelectorAll(".tabcon");
            tabCons.forEach(function(tabCon) {
                tabCon.style.display = "none";
            });
            tabCons[index].style.display = "block";
        });
    });



    // 메뉴
    var navItems = document.querySelectorAll("nav>ul>li");
    navItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            var subMenu = this.querySelector(".sub");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });
        item.addEventListener("mouseleave", function() {
            var subMenu = this.querySelector(".sub");
            if (subMenu) {
                subMenu.style.display = "none";
            }
        });
    });

    //팝업
    document.addEventListener("DOMContentLoaded", function() {
        var popupLinks = document.querySelectorAll(".popup");
        var popupOverlay = document.querySelector(".popup-overlay");
        var popupContent = document.querySelector(".popup-content");
        var closePopup = document.querySelector(".close-popup");
    
        // 팝업 열기
        popupLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // 링크의 기본 동작 취소
                popupOverlay.style.display = "block"; // 팝업 오버레이 표시
                popupContent.style.display = "block"; // 팝업 내용 표시
            });
        });
    
        // 팝업 닫기
        closePopup.addEventListener("click", function() {
            popupOverlay.style.display = "none"; // 팝업 오버레이 숨김
            popupContent.style.display = "none"; // 팝업 내용 숨김
        });
    });
    
    
})