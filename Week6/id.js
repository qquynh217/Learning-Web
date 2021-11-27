var a = prompt('Nhap vao a')
var b = prompt('Nhap vao b')
var c = prompt('Nhap vao c')
var n
document.write("Phương trình " + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0 : ")
if (a == 0) {
    if (b == 0 && c == 0)
        n = "Vô số nghiệm"
    else if (b == 0 && c != 0) n = "Vô nghiệm"
    else
        n = -c / b
    document.write(n)
}
else {
    var denta = b * b - 4 * a * c
    if (denta < 0) document.write("Vô nghiệm ")
    if (denta == 0) {
        document.write("có nghiệm kép ")
        n = -b / (2 * a)
        document.write(n)
    }
    if (denta > 0) {
        var x1 = (-b + Math.sqrt(denta)) / (2 * a)
        var x2 = (-b - Math.sqrt(denta)) / (2 * a)
        document.write("có 2 nghiệm phân biệt " + x1 + " va " + x2)
    }
}

