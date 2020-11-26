var check_phone = /^\d{2,4}\d{3}\d{3}$/;
var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,12}$/;

function checknull(txt){
    if(txt.value.length==0)
        return true;
    else return false;
}


function checkgender(radio){        // kiem tra gioi tinh
    var check = true;
    var i;
    for(i=0;i<radio.length;i++)
        if(radio[i].checked)
            check=false;
    return check;
}

function StringMatch(txt,reg){       //kiem tra du lieu co phu hop voi bieu thuc chinh quy hay khong
    return reg.test(txt.value);
}


function validateForm(f){
    var ok = 1;
    if(checknull(f.name))
    {
        document.getElementById('spname').innerHTML="*Mời nhập họ tên.";
        f.name.focus();
        ok = 0;
    }
    else document.getElementById('spname').innerHTML="";

    if(checkgender(f.gender))
    {
        document.getElementById('spgender').innerHTML="*Mời chọn giới tính. <br>"
        ok = 0;
    }
    else document.getElementById('spgender').innerHTML="";

    if(){
        document.getElementById('spcar').innerHTML="*Mời chọn xe. <br>"
        ok = 0;
    }
    else document.getElementById('spcar').innerHTML="";

    if(checknull(f.address))
    {
        document.getElementById('spadd').innerHTML="*Mời nhập địa chỉ.";
        f.address.focus();
        ok = 0;
    }
    else document.getElementById('spname').innerHTML="";

    if(!StringMatch(f.phone,check_phone))
    {
        document.getElementById('spphone').innerHTML="*Vui lòng nhập đúng số điện thoại.";
        f.phone.value="";
        f.phone.focus();
        ok = 0;
    }
    else document.getElementById('spphone').innerHTML="";

    if(!StringMatch(f.email,check_email))
    {
        document.getElementById('spemail').innerHTML="*Vui lòng nhập đúng email.";
        f.email.value="";
        f.email.focus();
        ok = 0;
    }
    else document.getElementById('spemail').innerHTML="";
    if(ok == 1)
        alert("Đăng ký lái thử thành công!");

}