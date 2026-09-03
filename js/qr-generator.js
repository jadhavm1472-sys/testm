const certificateSelect =
    document.getElementById(
        "certificateSelect"
    );


const generateQRBtn =
    document.getElementById(
        "generateQRBtn"
    );


const qrContainer =
    document.getElementById(
        "qrcode"
    );


const qrUrl =
    document.getElementById(
        "qrUrl"
    );



/*
========================================
LOAD CERTIFICATES INTO DROPDOWN
========================================
*/


Object.keys(certificates).forEach(
    function (certificateId) {


        const certificate =
            certificates[certificateId];


        const option =
            document.createElement("option");


        option.value =
            certificateId;


        option.textContent =
            certificate.certificateName
            + " - "
            + certificate.certificateNumber;


        certificateSelect.appendChild(
            option
        );


    }
);



/*
========================================
GENERATE QR CODE
========================================
*/


generateQRBtn.addEventListener(
    "click",
    function () {


        const certificateId =
            certificateSelect.value;



        /*
        Website URL
        */


        const certificateURL =

            window.location.origin
            +
            window.location.pathname.replace(
                "qr-generator.html",
                "certificate.html"
            )
            +
            "?id="
            +
            certificateId;



        /*
        Remove old QR
        */


        qrContainer.innerHTML =
            "";



        /*
        Generate QR
        */


        new QRCode(
            qrContainer,
            {
                text: certificateURL,

                width: 250,

                height: 250
            }
        );



        /*
        Display URL
        */


        qrUrl.innerHTML =

            `
            <p>
                Certificate Verification URL:
            </p>

            <div class="url-box">
                ${certificateURL}
            </div>
            `;


    }
);
