// accordion menu

$(document).ready(function(){
    accordionMenu();
    accordionTeam();
});

function accordionMenu() {
    var list = $('.menu__list-item');
    var aClass = "menu__list-item_active";

    list.on('click', function () {
        var self = $(this);
        if (self.hasClass(aClass)) {
            self.removeClass(aClass);
            return;
        }
        list.removeClass(aClass)

        self.addClass(aClass)
    })
}


//accordion team
function accordionTeam () {
    var aClass = 'teamsection__accordeon-item--active';
    var list = $('.teamsection__accordeon-item');

    list.on('click', function () {
        var self = $(this);
        if (self.hasClass(aClass)) {
            self.removeClass(aClass);
            return;
        }
        list.removeClass(aClass)

        self.addClass(aClass)

    })
}