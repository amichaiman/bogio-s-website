function send_request() {
    $.get("http://77.138.96.175/site/request/new-page", {site: "facebook.com"}, function (data) {
        console.log(data);
        alert(data);
    });
}
