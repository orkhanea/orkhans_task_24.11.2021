$(document).ready(function() {




    $('.header-carusel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    })
    $(".f-carusel").owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        items: 4,
        margin: 50,
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    })

    // Sticky Nav
    let stickyNav = $(".full-nav")[0];
    let isNull = $("#background-transparent")[0]
    if (stickyNav != null || stickyNav != undefined) {
        let stickyNavPosition = stickyNav.getBoundingClientRect();
        document.addEventListener("scroll", function(e) {
            if (window.pageYOffset == stickyNavPosition.bottom + 10) {
                document.querySelector(".full-nav").style.height = "0";

            } else if (window.pageYOffset > stickyNavPosition.bottom + 10) {
                $(".full-nav")[0].classList.add("stickyNav")

                if (isNull != null || isNull != undefined) {


                    $("#background-transparent")[0].style.color = "#080A3C";
                    $("#background-transparent")[0].style.borderColor = "#080A3C";
                    $("#background-transparent")[0].addEventListener("mouseover", function(e) {
                        $("#background-transparent")[0].style.color = "white";
                        $("#background-transparent")[0].style.borderColor = "#080A3C";
                    })
                    $("#background-transparent")[0].addEventListener("mouseleave", function(e) {
                        $("#background-transparent")[0].style.color = "#080A3C";
                        $("#background-transparent")[0].style.borderColor = "#080A3C";
                    })



                }
                document.querySelector(".full-nav").style.height = "auto";
            } else if (window.pageYOffset <= stickyNavPosition.bottom) {
                $(".full-nav")[0].classList.remove("stickyNav");

                if (isNull != null || isNull != undefined) {

                    $("#background-transparent")[0].style.color = "white";
                    $("#background-transparent")[0].style.borderColor = "white";
                    $("#background-transparent")[0].addEventListener("mouseover", function(e) {
                        $("#background-transparent")[0].style.color = "white";
                        $("#background-transparent")[0].style.borderColor = "#080A3C";
                    })
                    $("#background-transparent")[0].addEventListener("mouseleave", function(e) {
                        $("#background-transparent")[0].style.color = "white";
                        $("#background-transparent")[0].style.borderColor = "white";
                    })


                }


            }


        });

    }



    let dotsMenuBtn = $(".res-menu-dots")[0];
    let dotsMenu = $(".full-dots-menu")[0];
    let linedMenu = $(".nav-menu-ul")[0];
    let linedMenuBtn = $(".res-menu-bar-lines")[0];
    let xForLinedMenu = $(".innerRes-menu-bar-lines")[0];
    let spansForLined = $(".res-menu-bar-lines span");


    if (dotsMenuBtn != null || dotsMenuBtn != undefined) {
        dotsMenuBtn.addEventListener("click", function(e) {
            dotsMenu.classList.toggle("active-dots-menu");
        });

        linedMenuBtn.addEventListener("click", function(e) {
            linedMenu.classList.toggle("active-nav-menu-ul");
            if (linedMenu.matches(".active-nav-menu-ul")) {
                for (let i = 0; i < spansForLined.length; i++) {

                    spansForLined[i].style.height = "0";
                }
                xForLinedMenu.style.fontSize = "20px";
            } else {
                xForLinedMenu.style.fontSize = "0";
                for (let i = 0; i < spansForLined.length; i++) {

                    spansForLined[i].style.height = "4px";
                }

            }
        })
    }



    let resMenuPlusBtn1 = document.querySelector(".nav-menu-ul .plus");
    let homeUnderMenu = $(".home-under-menu")[0];
    if (resMenuPlusBtn1 != null || resMenuPlusBtn1 != undefined) {
        resMenuPlusBtn1.addEventListener("click", function(e) {
            homeUnderMenu.classList.toggle("active-hum");
            if (homeUnderMenu.matches(".active-hum")) {
                resMenuPlusBtn1.innerText = "-";
            } else {
                resMenuPlusBtn1.innerText = "+";
            }
        });
    }


    let resMenuPlusBtn2 = document.querySelectorAll(".nav-menu-ul .plus")[1];
    let pagesUnderMenu = $(".pages-under-menu")[0];
    if (resMenuPlusBtn2 != null || resMenuPlusBtn2 != undefined) {
        resMenuPlusBtn2.addEventListener("click", function(e) {
            pagesUnderMenu.classList.toggle("active-pum");
            if (pagesUnderMenu.matches(".active-pum")) {
                resMenuPlusBtn2.innerText = "-";
            } else {
                resMenuPlusBtn2.innerText = "+";
            }
        });
    }





    let resMenuPlusBtn3 = document.querySelectorAll(".nav-menu-ul .plus")[2];
    let blogUnderMenu = $(".blog-under-menu")[0];
    if (resMenuPlusBtn3 != null || resMenuPlusBtn3 != undefined) {
        resMenuPlusBtn3.addEventListener("click", function(e) {
            blogUnderMenu.classList.toggle("active-bum");
            if (blogUnderMenu.matches(".active-bum")) {
                resMenuPlusBtn3.innerText = "-";
            } else {
                resMenuPlusBtn3.innerText = "+";
            }
        });
    }






    // Sticky Nav End

    AOS.init({
        duration: 500,
        easing: 'ease-in-out',

    });


    $('.cas-carusel').owlCarousel({
        dotsEach: true,
        dots: true,
        loop: true,
        nav: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: { items: 1, },
            576: { items: 2, },
            768: { items: 2, },
            1200: { items: 2, }
        }
    });

    $('.acas-carusel').owlCarousel({
        dots: true,
        dotsEach: true,
        loop: true,
        nav: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,

            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,

            }
        }
    });



    let odospan = document.querySelectorAll(".odospan");

    for (let i = 0; i < odospan.length; i++) {

        if (i == 0) {
            odospan[i].innerText = "850";
        } else if (i == 1) {
            odospan[i].innerText = "504";
        } else if (i == 2) {
            odospan[i].innerText = "75";
        } else {
            odospan[i].innerText = "58";
        }
    }

    // Video plugin

    $('.video-play-btn').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,



    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    // Video plugin end

    // Price-plan 

    let btnForPrice = $(".change-color");
    for (let i = 0; i < btnForPrice.length; i++) {
        if (i == 1 || i == 4) {
            btnForPrice[i].style.backgroundColor = "#ff612f";
            btnForPrice[i].firstChild.style.color = "#080a3c";

            btnForPrice[i].addEventListener("mouseover", function(e) {
                btnForPrice[i].style.backgroundColor = "#13c4a1";
            })
            btnForPrice[i].addEventListener("mouseleave", function(e) {
                btnForPrice[i].style.backgroundColor = "#ff612f";
            })


        }
        if (i == 2 || i == 5) {
            btnForPrice[i].style.backgroundColor = "#13c4a1";
            btnForPrice[i].addEventListener("mouseover", function(e) {
                btnForPrice[i].style.backgroundColor = "#ff612f";
                btnForPrice[i].children[0].style.color = "white";
            })
            btnForPrice[i].addEventListener("mouseleave", function(e) {
                btnForPrice[i].style.backgroundColor = "#13c4a1";
                btnForPrice[i].children[0].style.color = "#ff612f";
            })
        }
        if (i == 0 || i == 3) {
            btnForPrice[i].addEventListener("mouseover", function(e) {
                btnForPrice[i].style.backgroundColor = "#13c4a1";
            })
            btnForPrice[i].addEventListener("mouseleave", function(e) {
                btnForPrice[i].style.backgroundColor = "#080a3c";
            })
        }

    }

    let subsBtn = document.querySelectorAll(".subsBtn");

    for (let i = 0; i < subsBtn.length; i++) {
        subsBtn[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (let j = 0; j < subsBtn.length; j++) {

                subsBtn[j].classList.remove("activeBtn");
            }
            subsBtn[i].classList.add("activeBtn");
            if (i == 0) {
                let pis = document.querySelector(".plan-item-second");
                let tid = document.querySelector(".transitioned-item-div");
                tid.style.top = "700px";
                let pif = document.querySelector(".plan-item-first");
                pif.style.opacity = "1"
                tid.addEventListener("transitionend", function(e) {
                    if (tid.style.top == "700px") {
                        pis.style.display = "none";
                    }

                })
            } else {
                let pif = document.querySelector(".plan-item-first");

                let pis = document.querySelector(".plan-item-second");
                let tid = document.querySelector(".transitioned-item-div");
                pis.style.display = "block";
                tid.style.top = "0";

                tid.addEventListener("transitionend", function(e) {
                    if (tid.style.top == "0px") {
                        pif.style.opacity = "0";
                    }

                })

            }
        })
    }

    // Price-plan end

    // Experts 
    let expertFull = $(".expert");
    let eBorderColor = $(".expert-img");
    let eSpanColor = $(".colored-span");
    let eSocials = $(".socials");
    let eSocialBtns = eSocials.children().children();
    let eSocialBtnsI = eSocials.children().children().children();
    for (let i = 0; i < eBorderColor.length; i++) {

        if (i == 0 || i == 6) {
            eBorderColor[i].style.borderColor = "#ffdacf";
            eSpanColor[i].style.color = "#ff612f";
            expertFull[i].addEventListener("mouseover", function(e) {
                eBorderColor[i].style.borderColor = "#ff612f";
            });
            expertFull[i].addEventListener("mouseleave", function(e) {
                eBorderColor[i].style.borderColor = "#ffdacf";
            });
        } else if (i == 1 || i == 7) {
            eBorderColor[i].style.borderColor = "#bce9e5";
            eSpanColor[i].style.color = "#13c4a1";
            expertFull[i].addEventListener("mouseover", function(e) {
                eBorderColor[i].style.borderColor = "#13c4a1";
            });
            expertFull[i].addEventListener("mouseleave", function(e) {
                eBorderColor[i].style.borderColor = "#bce9e5";
            });
        } else if (i == 2 || i == 4) {
            eBorderColor[i].style.borderColor = "#b2b3c3";
            eSpanColor[i].style.color = "#080a3c";
            expertFull[i].addEventListener("mouseover", function(e) {
                eBorderColor[i].style.borderColor = "#080a3c";
            });
            expertFull[i].addEventListener("mouseleave", function(e) {
                eBorderColor[i].style.borderColor = "#b2b3c3";
            });
        } else if (i == 3 || i == 5) {
            eBorderColor[i].style.borderColor = "#fed2e1";
            eSpanColor[i].style.color = "#fc4c86";
            expertFull[i].addEventListener("mouseover", function(e) {
                eBorderColor[i].style.borderColor = "#fc4c86";
            });
            expertFull[i].addEventListener("mouseleave", function(e) {
                eBorderColor[i].style.borderColor = "#fed2e1";
            });
        }

    }

    for (let i = 0; i < eSocialBtns.length; i++) {
        if (i <= 3 || (i >= 24 && i <= 27)) {
            eSocialBtns[i].addEventListener("mouseover", function(e) {
                eSocialBtns[i].style.backgroundColor = "#ff612f";
                eSocialBtnsI[i].style.color = "white";
            });
            eSocialBtns[i].addEventListener("mouseleave", function(e) {
                eSocialBtns[i].style.backgroundColor = "#f4f5fe";
                eSocialBtnsI[i].style.color = "#080a3c";
            });
        } else if (i > 3 && i <= 7 || (i >= 28 && i <= 31)) {
            eSocialBtns[i].addEventListener("mouseover", function(e) {
                eSocialBtns[i].style.backgroundColor = "#13c4a1";
                eSocialBtnsI[i].style.color = "white";
            });
            eSocialBtns[i].addEventListener("mouseleave", function(e) {
                eSocialBtns[i].style.backgroundColor = "#f4f5fe";
                eSocialBtnsI[i].style.color = "#080a3c";
            });
        } else if (i > 7 && i <= 11 || (i >= 16 && i <= 19)) {
            eSocialBtns[i].addEventListener("mouseover", function(e) {
                eSocialBtns[i].style.backgroundColor = "#080a3c";
                eSocialBtnsI[i].style.color = "white";
            });
            eSocialBtns[i].addEventListener("mouseleave", function(e) {
                eSocialBtns[i].style.backgroundColor = "#f4f5fe";
                eSocialBtnsI[i].style.color = "#080a3c";
            });
        } else {
            eSocialBtns[i].addEventListener("mouseover", function(e) {
                eSocialBtns[i].style.backgroundColor = "#fc4c86";
                eSocialBtnsI[i].style.color = "white";
            });
            eSocialBtns[i].addEventListener("mouseleave", function(e) {
                eSocialBtns[i].style.backgroundColor = "#f4f5fe";
                eSocialBtnsI[i].style.color = "#080a3c";
            });
        }

    }

    // Experts end

    // Subscribe

    let subsInput = $("#subscribe input");
    let subsInputBtn = $("#subscribe button");
    let subsP = $(".process-info p")[0];
    let rowforer = $(".rowforer")[0];

    if (subsInputBtn[0] != null || subsInputBtn[0] != undefined) {
        subsInputBtn[0].addEventListener("click", function(e) {
            e.preventDefault();
            let userMail = String(subsInput[0].value);
            let mailChecker = looksLikeMail(userMail);
            if (mailChecker == false) {
                $(".process-info")[0].style.display = "block";
                subsP.classList.add("error");
                rowforer.classList.add("error");

                subsP.addEventListener("animationend", function(e) {
                    subsP.classList.remove("error");
                    rowforer.classList.remove("error");
                    $(".process-info")[0].style.display = "none";


                })


            } else {
                subsInput[0].value = "";
                subsInput.prop('disabled', true);
                subsInput.prop('placeholder', "Thank you for subscribing!");
                subsInputBtn[0].disabled = true;
                subsInputBtn[0].style.zIndex = "-1";
            }
        })
    }



    function looksLikeMail(str) {
        var lastAtPos = str.lastIndexOf('@');
        var lastDotPos = str.lastIndexOf('.');
        return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
    }


    // Subscribe end

    // Go-up button

    let goUpbtn = $(".go-up-btn")[0];

    var offset = 400;
    var duration = 300;
    if (goUpbtn != null || goUpbtn != undefined) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.go-up-btn')[0].style.bottom = "15px";
            } else {
                $('.go-up-btn')[0].style.bottom = "-50px";
            }
        });

        $('.go-up-btn').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    }


    // Contact 
    let isNull2 = $(".trialForm input")[0];
    let contactInputs = $(".trialForm input");
    let trialError = $(".trialError");
    if (isNull2 != null || isNull2 != undefined) {



        for (let i = 0; i < contactInputs.length; i++) {
            contactInputs[i].addEventListener("focusout", function(e) {

                if (contactInputs[i].value == "") {
                    trialError[i].style.display = "block";
                }


            })
            contactInputs[i].addEventListener("input", function(e) {
                if (contactInputs[i].value != "") {
                    trialError[i].style.display = "none";
                }
            })


        }

        let trialTextArea = $("#trialTextArea")[0];
        let trialError2 = $(".trialError")[4]

        trialTextArea.addEventListener("focusout", function(e) {
            if (trialTextArea.value == "") {
                trialError2.style.display = "block";
            }
        })

        trialTextArea.addEventListener("input", function(e) {
            if (trialTextArea.value != "") {
                trialError2.style.display = "none";
            }
        })


        let submitBtn = $("#trialBtn");

        submitBtn[0].addEventListener("click", function(e) {
            e.preventDefault();
            if (trialTextArea.value == "" || contactInputs[0].value == "" || contactInputs[1].value == "" || contactInputs[2].value == "" || contactInputs[3].value == "") {
                $(".trialErrorSubmit")[0].style.display = "block"
                for (let i = 0; i < contactInputs.length; i++) {
                    if (contactInputs[i].value == "") {
                        trialError[i].style.display = "block";
                    }

                }
                if (trialTextArea.value == "") {
                    trialError[4].style.display = "block"
                }

                $(".trial-form")[0].classList.add("animatedTrial");
                $(".trial-form")[0].addEventListener("animationend", function(e) {
                    $(".trial-form")[0].classList.remove("animatedTrial");
                })

            } else {
                $(".trialErrorSubmit")[0].style.display = "none"
                for (let i = 0; i < contactInputs.length; i++) {
                    contactInputs[i].value = ""
                    contactInputs[i].disabled = true;

                }
                trialTextArea.value = ""
                trialTextArea.disabled = true;

                $(".submitSuccess")[0].style.display = "block";
                submitBtn[0].disabled = true;
                submitBtn[0].style.cursor = "default"
                $(".submitSuccess")[0].classList.add("submitSuccessAnim");
            }


        })


    }




});