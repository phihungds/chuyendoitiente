let convert = document.getElementById("convert")
convert.addEventListener('click',trans)
function trans() {
    let sotiencandoi = document.getElementById("sotien").value
    let menhgiabandau = document.getElementById("donvibandau").value
    let menhgiachuyenthanh = document.getElementById("donvichuyenthanh").value
    let dapan = (sotiencandoi / menhgiabandau) * menhgiachuyenthanh
    let fromelement = document.getElementById("donvibandau")
    let from = fromelement.options[fromelement.selectedIndex].innerText
    let toelement = document.getElementById("donvichuyenthanh")
    let to = toelement.options[toelement.selectedIndex].innerText
    let tinnhanhienthi = `${sotiencandoi} ${from} = ${dapan} ${to}`
    document.getElementById("ketqua").innerText = tinnhanhienthi
}