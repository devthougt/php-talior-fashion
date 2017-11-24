window.onload = function submit() {

    document.getElementById('submit').addEventListener('click', function() {

        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var category = document.getElementById('category').value;
        var name = document.getElementById('name').value;
        var location = document.getElementById('location').value;

        $.ajax({
            url: "./controller/exe.php?do=api&name=" + name + "&email=" + email + "&category=" + category + "&location=" + location + "&phone=" + phone,
            method: "GET",
            dataType: "JSON",
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            }
        });
    });

    document.getElementById('src').addEventListener('click', function() {
        var local = document.getElementById('local').value;

        $.ajax({
            url: "controller/exe.php?do=sl&loc=" + local,
            method: "GET",
            dataType: "JSON",
            success: function(data) {
                console.log(data);
                var arr = data.data;
                var output = document.getElementById('low');
                arr.forEach(function(element) {
                    "<li>" + element.email + "</li>";
                    "<li>" + element.name + "</li>";
                    "<li>" + element.category + "</li>";
                    "<li>" + element.phone + "</li>";

                    $('#low').append("<li>" + element.email + "</li>" +
                        "<li>" + element.name + "</li>" +
                        "<li>" + element.category + "</li>" +
                        "<li>" + element.phone + "</li>"
                    );


                }, this);
            }
        })
    });

}