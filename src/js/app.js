function setMobileReleaseDisabled(qualifiedName, value) {
    document.getElementById("mobile-release").setAttribute("disabled", "")
    document.getElementById("mobile-beta").setAttribute("disabled", "")
    document.getElementById("mobile-release-pn").textContent = "will be available later"
    document.getElementById("mobile-beta-pn").textContent = "will be available later"
}