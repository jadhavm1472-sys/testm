const certificateSelect = document.getElementById("certificateSelect");
const generateQRBtn = document.getElementById("generateQRBtn");
const qrContainer = document.getElementById("qrcode");
const qrUrl = document.getElementById("qrUrl");


// ========================================
// LOAD CERTIFICATES INTO DROPDOWN
// ========================================

Object.keys(certificates).forEach((certificateId) => {

    const certificate = certificates[certificateId];

    const option = document.createElement("option");

    option.value = certificateId;

    option.textContent =
        `${certificate.certificateName} - ${certificate.certificateNumber}`;

    certificateSelect.appendChild(option);

});


// ========================================
// GENERATE QR CODE
// ========================================

generateQRBtn.addEventListener("click", () => {

    const certificateId = certificateSelect.value;


    // ========================================
    // CREATE CORRECT CERTIFICATE URL
    // ========================================

    const certificateURL = new URL(
        "certificate.html",
        window.location.href
    );

    certificateURL.searchParams.set(
        "id",
        certificateId
    );


    // Convert URL object to text

    const finalURL = certificateURL.toString();


    console.log("QR Certificate URL:", finalURL);


    // ========================================
    // REMOVE OLD QR
    // ========================================

    qrContainer.innerHTML = "";


    // ========================================
    // GENERATE NEW QR
    // ========================================

    new QRCode(qrContainer, {

        text: finalURL,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });


    // ========================================
    // SHOW GENERATED URL
    // ========================================

    qrUrl.innerHTML = `

        <p><strong>Certificate Verification URL:</strong></p>

        <div class="url-box">

            <a href="${finalURL}" target="_blank">

                ${finalURL}

            </a>

        </div>

    `;

});
