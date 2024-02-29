var clickCount = 0;
var firstClickTime = null;

function recatchStatus(orderId) {
    clickCount = localStorage.getItem('clickCount') || 0;
    firstClickTime = localStorage.getItem('firstClickTime');

    if (firstClickTime === null) {
        firstClickTime = new Date().getTime();
        localStorage.setItem('firstClickTime', firstClickTime);
    }

    clickCount++;
    localStorage.setItem('clickCount', clickCount);

    var button = $('button[onclick="recatchStatus(' + orderId + ')"]');
    button.text('Loading...');
    button.removeClass('btn-info').addClass('btn-danger');

    $.ajax({
        url: "https://bestsmm.pk/cron/status_check_of_single_api_v_order/" + orderId,
        type: 'GET',
        success: function(response) {
            button.text(response);
            button.removeClass('btn-danger').addClass('btn-success');
        }
    });
}
