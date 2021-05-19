// Put your x javascript here

if (document.getElementById('sort_by') != null) {
    document.querySelector('#sort_by').addEventListener('change', function (e) {
        var url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value);
    
        window.location = url.href;
    });
}
if (document.getElementById('AddressCountryNew') != null) {
    document.getElementById('AddressCountryNew').addEventListener('change', function(e) {
        var provinces = this.options[this.selectedIndex].getAttribute('data-provinces');
        var provinceSelector = document.getElementById('AddressProvinceNew');
        var provinceArray = JSON.parse(provinces);

        if (provinceArray.length < 1) {
            provinceSelector.setAttribute('disabled', 'disabled');
        } else {
            provinceSelector.removeAttribute('disabled');
        }
        provinceSelector.innerHTML = '';
        var options = '';
        for(var i = 0; i < provinceArray.length; i++) {
            options += '<option value="' + provinceArray[i][0] + '">' + provinceArray[i][0] + '</option>'
        }

        provinceSelector.innerHTML = options;
    })
}

if (document.getElementById("forgotPassword") != null) {
    document.getElementById("forgotPassword").addEventListener("click", function(e) {
        const element = document.querySelector("#forgot_password_form");
        if (element.classList.contains("d-none")) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    });
} 

var productInfoAnchors = document.querySelectorAll("#productInfoAnchor");

var productModal = new bootstrap.Modal(document.getElementById("productInfoModal"), {});

if (productInfoAnchors.length > 0) {
    productInfoAnchors.forEach(item => {
        item.addEventListener("click", event => {
            var url = '/products/' + item.getAttribute('product-handle') + '.js'
            fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                document.getElementById("productInfoImg").src = data.images[0];
                document.getElementById("productInfoTitle").innerHTML = data.title;
                document.getElementById("productInfoPrice").innerHTML = data.compare_at_price;
                document.getElementById("productInfoDescription").innerHTML = data.description;
                productModal.show();
            })
        });
    });
}