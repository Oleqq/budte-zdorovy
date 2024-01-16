// скрипт поведения аккордеона

    // Выбираем все элементы аккордеона
    const accItems = document.querySelectorAll(".accordion__item");

    // Добавляем событие клика для всех элементов
    accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

    function toggleAcc() {
    // Удаляем класс "accordion__item--active" у всех элементов, кроме текущего (this)
    accItems.forEach((item) => {
        // Если элемент не текущий (this), убираем класс "accordion__item--active"
        // В противном случае - оставляем без изменений
        item != this ? item.classList.remove("accordion__item--active") : null;
    });

    // Переключаем класс "accordion__item--active" у текущего элемента
    if (this.classList != "accordion__item--active") {
        this.classList.toggle("accordion__item--active");
    }
    }

// end




// специалист слайдер 
var swiper = new Swiper('.specialist-slider__container', {
    slidesPerView: 'auto', // Количество видимых слайдов по умолчанию
    spaceBetween: 30, // Расстояние между слайдами
    navigation: {
        nextEl: '.specialist-slider-button-next', // Кнопка "следующий слайд"
        prevEl: '.specialist-slider-button-prev', // Кнопка "предыдущий слайд"
    },
    // breakpoints: {
    //     // Для ширины экрана до 991px показывать 1 слайд
    //     991: {
    //         slidesPerView: 1,
    //     },
    //     // Для ширины экрана от 992px до 1199px показывать 2 слайда
    //     992: {
    //         slidesPerView: 2,
    //     },
    //     // Для ширины экрана больше или равной 1200px показывать 3 слайда (как по умолчанию)
    //     1200: {
    //         slidesPerView: 3,
    //     }
    // }
});



// акции слайдер 
var swiper = new Swiper('.special-offer__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        nextEl: '.special-offer-slider-button-next',
        prevEl: '.special-offer-slider-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




// вакансии вакансии 
var swiper = new Swiper('.vacancies-hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        nextEl: '.vacancies-slider-button-next',
        prevEl: '.vacancies-slider-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('header-burger');
    const overlayMenu = document.querySelector('.overlay-menu');
    const body = document.querySelector('body');
    

    // Функция для открытия/закрытия меню
    function toggleMenu() {
        overlayMenu.classList.toggle('active');
        body.classList.toggle('fixed');
        // Изменение иконки в зависимости от состояния меню
        if (overlayMenu.classList.contains('active')) {
            burgerMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="47.207" height="3.14713" rx="1.57357" transform="matrix(0.709067 0.705141 -0.709067 0.705141 2.52734 0)" fill="#232424"/>
                <rect width="47.207" height="3.14713" rx="1.57357" transform="matrix(-0.709067 0.705141 0.709067 0.705141 33.4727 0.492188)" fill="#232424"/>
            </svg>
            `;
        } else {
            burgerMenu.innerHTML = `
            <svg width="61" height="29" viewBox="0 0 61 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.1875" y="0.90625" width="60" height="4" rx="2" fill="#FCFCFC"/>
                <rect x="0.1875" y="12.9062" width="60" height="4" rx="2" fill="#FCFCFC"/>
                <rect x="0.1875" y="24.9062" width="60" height="4" rx="2" fill="#FCFCFC"/>
            </svg>
            `;
        }
    }

    // Обработчик события клика на иконку бургер-меню
    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    

    // Обработчик события клика вне меню (закрытие меню)
    document.addEventListener('click', function(event) {
        if (!overlayMenu.contains(event.target) && overlayMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
// burger

// pop up
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openPopupButtons = document.querySelectorAll('.popup__button');

    // Функция для открытия поп-апа
    function openPopup() {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона при открытом поп-апе
    }

    // Функция для закрытия поп-апа
    function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = ''; // Восстановление прокрутки фона
    }

    // Добавляем обработчик клика на каждую кнопку
    openPopupButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        openPopup();
    });
    });

    // Обработчик события для закрытия поп-апа по клику на крестик
    document.getElementById('closeBtn').addEventListener('click', closePopup);

    // Обработчик события для закрытия поп-апа по клику вне области поп-апа
    window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
    });


});
// pop up
