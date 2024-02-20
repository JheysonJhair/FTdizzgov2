export const getGradientColors = (sabor) => {
  switch (sabor) {
    case "blue":
    case "Blue Label":
    case "Chivas 18 años":
      return ["#0635a3", "#0686a0"];
    case "red":
      return ["#FF1493", "#FF4500"];
    case "neutral":
    case "Whitse Rabbit Saloon":
    case "Gold Label":
      return ["#FFFACD", "#D3D3D3"];
    case "Apple":
      return ["#468949", "#97b2a2"];
    case "Chivas 13 años":
      return ["#8e1c87", "#dbb3b3"];
    case "Red label":
    case "Swing":
      return ["#e03535", "#dbb3b3"];
    case "mezcla":
      return ["#212834", "#31abf7"];
    default:
      return ["#a04e38", "#968485"];
  }
};
