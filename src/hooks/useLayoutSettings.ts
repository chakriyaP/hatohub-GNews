import { useDarkMode } from "../context/DarkModeContext";

export const useLayoutSettings = () => {
  const { darkMode } = useDarkMode();

  const layoutStyle = {
    minHeight: "100vh",
    background: darkMode
      ? 'url("https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-3840x2160-1432.jpg")'
      : "#eee",
  };

  const themeConfig = {
    token: {
      colorPrimary: "#5d65d1",
    },
  };

  return { layoutStyle, themeConfig };
};
