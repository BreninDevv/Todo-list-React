const ButtonDarkMode = ({ alternarTema }) => {
  return (
    <div
      id="btnDarkMode"
      className="btnDarkMode"
      onClick={() => alternarTema()}
    >
      <div id="bolinha" className="bolinha"></div>
    </div>
  );
};

export default ButtonDarkMode;
