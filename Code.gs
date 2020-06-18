/**
 * แสดงผลการตรวจสอบหมายเลขบัตรประชาชน
 *
 * @param {number} idCardNumber หมายเลขบัตรประชาชน
 * @return ผลการตรวจสอบ "ถูกต้อง" หรือ "ไม่ถูกต้อง"
 * @customfunction
 */

function THAIIDCHECK(idCardNumber) {

  if (typeof(idCardNumber) === "number") {
    idCardNumber = idCardNumber.toString();
  }
  
  const regex = /^[0-9]\d*$/;
  if (idCardNumber.length === 13 && idCardNumber.match(regex) && idCardNumber !== null && idCardNumber !== "undefined") {
    // Check valid id card number
    return idCardCheck(idCardNumber);
  } else {
    return "กรุณากรอกเลขบัตรประชาชนให้ถูกต้องและครบ 13 หลัก";
  }
  
}

function idCardCheck(idCardNumber) {
  var sum = 0;
  for (var i = 0; i < idCardNumber.length - 1; i++) {
    sum += parseInt(idCardNumber[i]) * (13 - i);
  }
  
  var checkDigit = (11 - (sum % 11)) % 10;
  
  if (checkDigit == idCardNumber[12]) {
    return "หมายเลขบัตรถูกต้อง";
  } else {
    return "หมายเลขบัตรไม่ถูกต้อง";
  }
}