'use strict';

const dayTime = document.querySelector('.daytime'),
    weekDay = document.querySelector('.weekday'),
    time = document.querySelector('.time'),
    days = document.querySelector('.days');

    let date = new Date(),
        daySmall = date.toLocaleString('ru', {weekday: 'long'}),
        day = daySmall.charAt(0).toUpperCase() + daySmall.slice(1),
        helloDay,
        hour = date.getHours(); 
        
        if (hour>=5 && hour<12){
            helloDay = "Доброе утро";
        } else if (hour>=12 && hour<18) {
            helloDay = "Добрый день"; 
        } else if (hour>=18 && hour<24) {
            helloDay = "Добрый вечер"; 
        }

    function typeTime() { 
        let date = new Date(),
        pmAm = date.toLocaleTimeString('en');
        time.innerHTML = pmAm;
    }
    typeTime();
    setInterval(typeTime, 1000);
    function typeDays() {
        let today = new Date();
        let newYear = new Date('31 december 2020');
        let deadline = (newYear.getDate() - today.getDate());
        
        days.innerHTML = deadline + ' дней';
    }
    typeDays();
    setInterval(typeTime, 40000);
    weekDay.innerHTML = day;
    dayTime.innerHTML = helloDay;