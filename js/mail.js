
$('#orderForm').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            $.fancybox.open($("#hiddenOrder"), {
                "smallBtn" : false,
                "toolbar" : false
                })
        } else{
            $.fancybox.open($("#hiddenOrder2"), {
                "smallBtn" : false,
                "toolbar" : false
                })
    }}).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};
