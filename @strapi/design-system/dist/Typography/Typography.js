import r from "styled-components";
import { variantStyle as i, ellipsisStyle as n, handleColor as a } from "./utils.js";
import { extractStyleFromTheme as o } from "../helpers/theme.js";
const s = {
  fontSize: !0,
  fontWeight: !0
}, m = r.span.withConfig({
  shouldForwardProp: (t, e) => !s[t] && e(t)
})`
  ${i}
  ${n}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({ theme: t, fontWeight: e }) => o(t.fontWeights, e, void 0)};
  font-size: ${({ theme: t, fontSize: e }) => o(t.fontSizes, e, void 0)};
  line-height: ${({ theme: t, lineHeight: e }) => o(t.lineHeights, e, e)};
  color: ${a};
  text-align: ${({ textAlign: t }) => t};
  text-decoration: ${({ textDecoration: t }) => t};
  text-transform: ${({ textTransform: t }) => t};
`;
export {
  m as Typography
};
