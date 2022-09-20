//revisi
function hitung(htg){
    //tangkap id form
    let frm = document.getElementById('calcForm');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    switch (htg) {
        case '+':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case '-':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
            case '*':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("Harap masukkan angka!!");
                }    
                else {
                    total = a1 * a2; //rumus
                    frm.hasil.value = total; //penempatan hasil 
                } 
                break;
            case '/':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                total = a1 / a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
            case '^':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("Harap masukkan angka!!");
                }    
                else {
                    total = Math.pow(a1,a2); //rumus
                    frm.hasil.value = total; //penempatan hasil 
                } 
                break;
        default:
        break;    
    }

    frm.hasil.value = total;
}