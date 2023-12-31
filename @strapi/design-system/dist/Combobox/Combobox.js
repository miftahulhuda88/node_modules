import { jsx as r, jsxs as d } from "react/jsx-runtime";
import * as m from "react";
import { Cross as me, CarretDown as ge } from "@strapi/icons";
import { Combobox as n } from "@strapi/ui-primitives";
import l from "styled-components";
import { stripReactIdOfColon as be } from "../helpers/strings.js";
import { useControllableState as I } from "../hooks/useControllableState.js";
import { useId as w } from "../hooks/useId.js";
import { useIntersection as $e } from "../hooks/useIntersection.js";
import { getThemeSize as Ce, inputFocusStyle as xe } from "../themes/utils.js";
import { Loader as Ie } from "../Loader/Loader.js";
import { Box as R } from "../Box/Box.js";
import { Typography as h } from "../Typography/Typography.js";
import { Flex as g } from "../Flex/Flex.js";
import { Field as we } from "../Field/Field.js";
import { FieldLabel as Re } from "../Field/FieldLabel.js";
import { FieldHint as ve } from "../Field/FieldHint.js";
import { FieldError as ye } from "../Field/FieldError.js";
const ke = ({ allowCustomValue: e, autocomplete: o, children: c, className: u, clearLabel: a = "clear", creatable: i = !1, createMessage: b = (f) => `Create "${f}"`, defaultFilterValue: p, defaultTextValue: y, defaultOpen: W = !1, open: L, onOpenChange: U, disabled: $ = !1, error: k, filterValue: A, hasMoreItems: G = !1, id: V, isPrintableCharacter: J, loading: C = !1, loadingMessage: K = "Loading content...", noOptionsMessage: M = () => "No results found", onChange: T, onClear: x, onCreateOption: F, onFilterValueChange: Q, onInputChange: O, onTextValueChange: X, onLoadMore: z, placeholder: Y = "Select or enter a value", required: Z = !1, size: _ = "M", startIcon: B, textValue: ee, value: P, ...re }) => {
  const [f, oe] = I({
    prop: L,
    defaultProp: W,
    onChange: U
  }), [s, S] = I({
    prop: ee,
    defaultProp: e && !y ? P : y,
    onChange: X
  }), [te, j] = I({
    prop: A,
    defaultProp: p,
    onChange: Q
  }), E = m.useRef(null), q = m.useRef(null), ne = m.useRef(null), ie = (t) => {
    x && !$ && (S(""), j(""), x(t), q.current.focus());
  }, le = (t) => {
    oe(t);
  }, ae = (t) => {
    S(t);
  }, se = (t) => {
    j(t);
  }, de = (t) => {
    O && O(t);
  }, ce = (t) => {
    T && T(t);
  }, ue = (t) => {
    z && G && !C && z(t);
  }, N = () => {
    F && s && F(s);
  }, D = w(V), he = w(), H = `intersection-${be(he)}`;
  $e(E, ue, {
    selectorToWatch: `#${H}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !f
  });
  const pe = `${D}-hint`, fe = `${D}-error`;
  return d(n.Root, { autocomplete: o || (i ? "list" : "both"), onOpenChange: le, open: f, onTextValueChange: ae, textValue: s, allowCustomValue: i || e, disabled: $, required: Z, value: P, onValueChange: ce, filterValue: te, onFilterValueChange: se, isPrintableCharacter: J, children: [d(Fe, { $hasError: !!k, $size: _, className: u, children: [d(g, { flex: "1", as: "span", gap: 3, children: [B ? r(R, { as: "span", "aria-hidden": !0, children: B }) : null, r(Oe, { placeholder: Y, id: V, "aria-invalid": !!k, "aria-describedby": `${pe} ${fe}`, onChange: de, ref: q, ...re })] }), d(g, { as: "span", gap: 3, children: [s && x ? r(Te, { as: "button", hasRadius: !0, background: "transparent", type: "button", onClick: ie, "aria-disabled": $, "aria-label": a, title: a, ref: ne, children: r(me, {}) }) : null, r(ze, { children: r(ge, {}) })] })] }), r(n.Portal, { children: r(Be, { sideOffset: 4, children: d(Pe, { ref: E, children: [c, i ? r(n.CreateItem, { onPointerUp: N, onClick: N, asChild: !0, children: r(v, { children: r(h, { children: b(s ?? "") }) }) }) : null, !i && !C ? r(n.NoValueFound, { asChild: !0, children: r(v, { $hasHover: !1, children: r(h, { children: M(s ?? "") }) }) }) : null, C ? r(g, { justifyContent: "center", alignItems: "center", paddingTop: 2, paddingBottom: 2, children: r(Ie, { small: !0, children: K }) }) : null, r(R, { id: H, width: "100%", height: "1px" })] }) }) })] });
}, Ve = ({ error: e, hint: o, id: c, label: u, labelAction: a, required: i = !1, ...b }) => {
  const p = w(c);
  return r(we, { hint: o, error: e, id: p, required: i, children: d(g, { direction: "column", alignItems: "stretch", gap: 1, children: [r(Re, { action: a, children: u }), r(ke, { id: p, error: e, required: i, ...b }), r(ve, {}), r(ye, {})] }) });
}, Ye = (e) => r(Ve, { ...e, creatable: !0 }), Te = l(R)`
  border: none;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, Fe = l(n.Trigger)`
  position: relative;
  border: 1px solid ${({ theme: e, $hasError: o }) => o ? e.colors.danger600 : e.colors.neutral200};
  padding-right: ${({ theme: e }) => e.spaces[3]};
  padding-left: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: e }) => e.spaces[4]};
  min-height: ${({ theme: e, $size: o }) => Ce("input")({ theme: e, size: o })};

  &[data-disabled] {
    color: ${({ theme: e }) => e.colors.neutral600};
    background: ${({ theme: e }) => e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({ theme: e, $hasError: o }) => xe()({ theme: e, hasError: o })};
`, Oe = l(n.TextInput)`
  width: 100%;
  font-size: ${14 / 16}rem;
  color: ${({ theme: e }) => e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, ze = l(n.Icon)`
  & > svg {
    width: ${6 / 16}rem;

    & > path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, Be = l(n.Content)`
  background: ${({ theme: e }) => e.colors.neutral0};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, Pe = l(n.Viewport)`
  padding: ${({ theme: e }) => e.spaces[1]};
`, Ze = m.forwardRef(({ children: e, value: o, disabled: c, textValue: u, ...a }, i) => r(n.ComboboxItem, { asChild: !0, value: o, disabled: c, textValue: u, children: r(v, { ref: i, ...a, children: r(n.ItemText, { asChild: !0, children: r(h, { children: e }) }) }) })), v = l.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({ theme: e }) => e.spaces[2]} ${({ theme: e }) => e.spaces[4]};
  background-color: ${({ theme: e }) => e.colors.neutral0};
  border-radius: ${({ theme: e }) => e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({ theme: e }) => e.colors.primary100};

    ${h} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme: e, $hasHover: o = !0 }) => o ? e.colors.primary100 : e.colors.neutral0};
  }

  &[data-highlighted] {
    ${h} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }
`;
export {
  Ve as Combobox,
  ke as ComboboxInput,
  Ye as CreatableCombobox,
  Ze as Option,
  v as OptionBox
};
