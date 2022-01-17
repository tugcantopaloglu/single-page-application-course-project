import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"]; //button dinamik ve güzel gözüksün diye dış hatarıyla gözüken ve dolu gözüken 2 halini kullanıyoruz

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  //dışarı aktaracağımız butonun özellikleri
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) //normalde dolu gözüküyor ancak outlinelı hali var ise üstüne gelindiğinde dolu haline geçiyor yazılımcı buradan stil ismi vererek listedekilerden seçebilir default verirse içi dolu primary gözükür
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; //default olarak medium oluyor ancak seçtiğimizde değiştirebiliyoruz

  return (
    /*standart butonları bizim özel butonlarımız ile değiştirdik bu şekilde bizim yaptığımız buton tiplerine göre oluşacaklar*/
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} //buradaki komutlar sayesinde normal buton değerlerini ve tiplerini bizim istediğimiz ile değiştirmiş olduk
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
