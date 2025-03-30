import type { Route } from './+types/root';
import appStylesheet from './styles/app.css?url';
import errorCss from "./styles/error.css?url";
import headerCss from "./styles/header.css?url";
import homeCss from "./styles/home.css?url";
import inputCss from "./styles/input.css?url";
import loginCss from "./styles/login.css?url";
import themeToggleCss from "./styles/theme-toggle.css?url";
import variablesCss from "./styles/variables.css?url";

export const links: Route.LinksFunction = () => [
  // Preconnect links
  // Local stylesheet
  { rel: 'stylesheet', href: appStylesheet },
  { rel: 'stylesheet', href: variablesCss },
  { rel: 'stylesheet', href: headerCss },
  { rel: 'stylesheet', href: inputCss },
  { rel: 'stylesheet', href: loginCss },
  { rel: 'stylesheet', href: themeToggleCss },
  { rel: 'stylesheet', href: homeCss },
  { rel: 'stylesheet', href: errorCss },
];