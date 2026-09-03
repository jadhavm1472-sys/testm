function goBack() {

    window.history.back();

}


const urlParams = new URLSearchParams(
    window.location.search
);


const certificateId = urlParams.get("id");


const certificate =
    certificates[certificateId];



if (certificate) {

    /*
    ========================================
    DISPLAY CERTIFICATE INFORMATION
    ========================================
    */


    document.getElementById(
        "certificateNumber"
    ).textContent =
        certificate.certificateNumber;



    document.getElementById(
        "certificateName"
    ).textContent =
        certificate.certificateName;



    document.getElementById(
        "applicantName"
    ).textContent =
        certificate.applicantName;



    document.getElementById(
        "gramsevakName"
    ).textContent =
        certificate.gramsevakName;



    document.getElementById(
        "issueDate"
    ).textContent =
        certificate.issueDate;



    /*
    ========================================
    DISPLAY LOCATION
    ========================================
    */


    document.getElementById(
        "location"
    ).innerHTML =

        `ग्रामपंचायत - ${certificate.gramPanchayat},
        तालुका - ${certificate.taluka},
        जिल्हा - ${certificate.district}`;



    /*
    ========================================
    VERIFICATION MESSAGE
    ========================================
    */


    document.getElementById(
        "verificationMessage"
    ).innerHTML =

        `* वरील दाखला ग्रामपंचायत - 
        ${certificate.gramPanchayat},
        तालुका - ${certificate.taluka},
        जिल्हा - ${certificate.district}
        यांचे वतीने वितरित केला आहे.`;


} else {


    /*
    ========================================
    INVALID CERTIFICATE
    ========================================
    */


    document.getElementById(
        "location"
    ).innerHTML =

        "प्रमाणपत्र सत्यापित होऊ शकले नाही";



    document.getElementById(
        "certificateCard"
    ).innerHTML =

        `
        <div class="invalid-certificate">

            <div class="invalid-icon">
                ⚠
            </div>

            <h2>
                प्रमाणपत्र उपलब्ध नाही
            </h2>

            <p>
                दिलेला प्रमाणपत्र क्रमांक वैध नाही.
            </p>

        </div>
        `;



    document.getElementById(
        "verificationMessage"
    ).innerHTML =

        "कृपया वैध QR Code वापरा.";

}
