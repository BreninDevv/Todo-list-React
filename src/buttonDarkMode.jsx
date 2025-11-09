const ButtonDarkMode = ({ alternarTema }) => {
  return (
    <div className="btnDarkMode">
      <div className="bolinha" onClick={() => alternarTema()}></div>
    </div>
  );
};

export default ButtonDarkMode;
