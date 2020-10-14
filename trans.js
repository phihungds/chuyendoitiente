let convert = document.getElementById("convert")
convert.addEventListener('click',trans)
function trans() {
    let m0 = document.getElementById("sotien").value
    let m1 = document.getElementById("money1").value
    let m2 = document.getElementById("money2").value
    let dapan = (m0 / m1) * m2
    let ketqua = "Giá trị chuyển đổi = " + dapan
    document.getElementById("ketqua").innerText = ketqua
}