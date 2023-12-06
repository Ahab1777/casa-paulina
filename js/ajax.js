// Dynamic Page Load

$(document).ready(function(){
    const trigger = $('#nav ul li .shortcut'),
    container = $('#content');


    trigger.on('click', function(){
    
        const $this = $(this),
        target = $this.data('target');

        container.load(target + '.html');

        return false;
    });
});


$(document).ready(function(){
    const trigger = $('.gallery-link'),
    container = $('#content');


    trigger.on('click', function(){
    
        const $this = $(this),
        target = $this.data('target');

        container.load(target + '.html');

        return false;
    });
});


//"more pictures" link

$(document).ready(function(){
    const trigger = $('.gallery-title-mobile .shortcut'),
    container = $('#content');


    trigger.on('click', function(){
    
        const $this = $(this),
        target = $this.data('target');

        container.load(target + '.html');

        return false;
    });
});