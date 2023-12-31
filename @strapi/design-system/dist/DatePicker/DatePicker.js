import { jsxs as F, jsx as i } from "react/jsx-runtime";
import * as c from "react";
import { useFloating as be, offset as we, shift as xe, flip as ke, autoUpdate as Te } from "@floating-ui/react-dom";
import { getLocalTimeZone as Ee, today as J, minDate as H, maxDate as X, startOfMonth as Pe, startOfWeek as le, getDayOfWeek as Ie, isSameDay as se, endOfMonth as Ae, parseAbsolute as Re, toCalendarDate as Se } from "@internationalized/date";
import { useFocusGuards as Me } from "@radix-ui/react-focus-guards";
import { FocusScope as ve } from "@radix-ui/react-focus-scope";
import { Cross as $e, Calendar as Fe } from "@strapi/icons";
import { composeEventHandlers as L } from "@strapi/ui-primitives";
import { createPortal as Le } from "react-dom";
import { RemoveScroll as Ne } from "react-remove-scroll";
import I from "styled-components";
import { useDesignSystem as Oe } from "../DesignSystemProvider.js";
import { DismissibleLayer as _e } from "../DismissibleLayer/index.js";
import { createContext as Ve } from "../helpers/context.js";
import { once as Ye } from "../helpers/deprecations.js";
import { useComposedRefs as Q } from "../hooks/useComposeRefs.js";
import { useControllableState as ze } from "../hooks/useControllableState.js";
import { useDateFormatter as S } from "../hooks/useDateFormatter.js";
import { useId as ce } from "../hooks/useId.js";
import { SingleSelectInput as ne, SingleSelectOption as ae } from "../Select/SingleSelect.js";
import { Portal as Ue } from "../Portal/Portal.js";
import { Flex as U } from "../Flex/Flex.js";
import { getThemeSize as We, inputFocusStyle as Be } from "../themes/utils.js";
import { Box as W } from "../Box/Box.js";
import { Typography as B } from "../Typography/Typography.js";
import { Field as Ze } from "../Field/Field.js";
import { FieldLabel as qe } from "../Field/FieldLabel.js";
import { FieldHint as Ke } from "../Field/FieldHint.js";
import { FieldError as Ge } from "../Field/FieldError.js";
const je = 200, oe = 15, [He, N] = Ve("DatePicker"), Xe = c.forwardRef(({
  /**
   * DatePickerCalendar props
   */
  calendarLabel: e,
  className: r,
  initialDate: n,
  locale: t,
  maxDate: a,
  minDate: s,
  monthSelectLabel: g = "Month",
  onChange: u,
  selectedDate: l,
  yearSelectLabel: b = "Year",
  /**
   * Combobox props
   */
  error: x,
  id: y,
  disabled: m = !1,
  placeholder: k,
  required: w = !1,
  onClear: E,
  clearLabel: P = "Clear",
  size: d,
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  ariaLabel: h,
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  selectedDateLabel: o,
  ...f
}, p) => {
  const T = Ee(), M = Oe("DatePicker"), v = t ?? M.locale, $ = S(v, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }), [O, Z] = c.useState(!1), [q, C] = c.useState(null), [A, K] = c.useState(null), [ue, me] = c.useState(null), [Y, _] = c.useState(), [V, ee] = ze({
    defaultProp: n ? R(n) : void 0,
    prop: l ? R(l) : void 0,
    onChange(D) {
      u && u(D?.toDate(T));
    }
  }), [te, re] = c.useMemo(() => {
    const D = n ? R(n) : J("UTC"), z = s ? R(s) : D.set({ day: 1, month: 1, year: D.year - je });
    let j = a ? R(a) : D.set({ day: 31, month: 12, year: D.year + oe });
    return j.compare(z) < 0 && (j = z.set({ day: 31, month: 12, year: z.year + oe })), [z, j];
  }, [s, a, n]), [fe, G] = c.useState(Je({
    currentValue: V,
    minDate: te,
    maxDate: re
  })), pe = ce(), he = c.useRef(null), ge = (D) => {
    E && !m && (_(""), ee(void 0), E(D), A?.focus());
  }, De = c.useCallback((D) => {
    D && V && G(V), Z(D);
  }, [V]);
  c.useLayoutEffect(() => {
    if (l) {
      const D = R(l);
      _($.format(D.toDate(T))), G(D);
    } else
      _("");
  }, [l, $, T]), c.useLayoutEffect(() => {
    if (n && Y === void 0) {
      const D = R(n);
      _($.format(D.toDate(T)));
    }
  }, [n, Y, $, T]);
  const ye = `${y}-hint`, Ce = `${y}-error`;
  return F(He, { calendarDate: fe, content: ue, contentId: pe, disabled: m, locale: v, minDate: te, maxDate: re, open: O, onCalendarDateChange: G, onContentChange: me, onOpenChange: De, onTextInputChange: K, onTextValueChange: _, onTriggerChange: C, onValueChange: ee, required: w, textInput: A, textValue: Y, timeZone: T, trigger: q, value: V, children: [F(et, { className: r, size: d, hasError: !!x, children: [i(nt, { "aria-hidden": !0 }), i(ot, { ref: p, placeholder: k, "aria-describedby": `${ye} ${Ce}`, id: y, ...f }), Y && E ? i(rt, { as: "button", hasRadius: !0, background: "transparent", type: "button", onClick: ge, "aria-disabled": m, "aria-label": P, title: P, ref: he, children: i($e, {}) }) : null] }), i(Ue, { children: i(ct, { label: e, children: i(pt, { monthSelectLabel: g, yearSelectLabel: b }) }) })] });
}), ie = (e) => !!e.match(/^[^a-zA-Z]*$/), Je = ({ currentValue: e, minDate: r, maxDate: n }) => {
  const t = J("UTC");
  return e || (H(r, t) === r && X(n, t) === n ? t : H(r, t) === t ? r : X(n, t) === t ? n : t);
}, Qe = "DatePickerTrigger", et = c.forwardRef(({ hasError: e, size: r = "M", ...n }, t) => {
  const a = N(Qe), s = Q(t, (u) => a.onTriggerChange(u)), g = () => {
    a.disabled || a.onOpenChange(!0);
  };
  return i(ve, {
    asChild: !0,
    // we make sure we're not trapping once it's been closed
    // (closed !== unmounted when animating out)
    trapped: a.open,
    onMountAutoFocus: (u) => {
      u.preventDefault();
    },
    onUnmountAutoFocus: (u) => {
      document.getSelection()?.empty(), u.preventDefault();
    },
    children: i(tt, { ref: s, $hasError: e, $size: r, ...n, paddingLeft: 3, paddingRight: 3, hasRadius: !0, gap: 3, overflow: "hidden", background: a.disabled ? "neutral150" : "neutral0", onClick: L(n.onClick, () => {
      a.textInput?.focus();
    }), onPointerDown: L(n.onPointerDown, (u) => {
      const l = u.target;
      l.hasPointerCapture(u.pointerId) && l.releasePointerCapture(u.pointerId), (l.closest("button") ?? l.closest("div")) === u.currentTarget && u.button === 0 && u.ctrlKey === !1 && (g(), a.textInput?.focus());
    }) })
  });
}), tt = I(U)`
  border: 1px solid ${({ theme: e, $hasError: r }) => r ? e.colors.danger600 : e.colors.neutral200};
  min-height: ${({ theme: e, $size: r }) => We("input")({ theme: e, size: r })};

  &[data-disabled] {
    color: ${({ theme: e }) => e.colors.neutral600};
    background: ${({ theme: e }) => e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({ theme: e, $hasError: r }) => Be()({ theme: e, hasError: r })};
`, rt = I(W)`
  border: none;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, nt = I(Fe)`
  & > path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`, at = "DatePickerTextInput", ot = c.forwardRef(({ placeholder: e, ...r }, n) => {
  const t = N(at), { onTextValueChange: a, textValue: s, onTextInputChange: g, onOpenChange: u, disabled: l, locale: b } = t, x = Q(n, (d) => g(d)), y = () => {
    l || u(!0);
  }, m = S(b, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }), [k, w, E] = c.useMemo(() => {
    const d = m.formatToParts(/* @__PURE__ */ new Date()), h = d.filter((p) => p.type === "year" || p.type === "month" || p.type === "day"), o = h.map((p) => {
      switch (p.type) {
        case "day":
          return "DD";
        case "month":
          return "MM";
        case "year":
          return "YYYY";
        default:
          return "";
      }
    }), f = d.find((p) => p.type === "literal")?.value ?? "";
    return [o, f, h];
  }, [m]), P = k.map((d) => `\\d${d.length}`).join(w);
  return i(lt, { role: "combobox", type: "text", inputMode: "numeric", ref: x, "aria-autocomplete": "none", "aria-controls": t.contentId, "aria-disabled": t.disabled, "aria-expanded": t.open, "aria-required": t.required, "aria-haspopup": "dialog", "data-state": t.open ? "open" : "closed", disabled: l, "data-disabled": l ? "" : void 0, pattern: P, placeholder: e ?? k.join(w), ...r, value: s ?? "", onBlur: L(r.onBlur, () => {
    if (!t.textValue) {
      t.onValueChange(void 0);
      return;
    }
    t.onTextValueChange(m.format(t.calendarDate.toDate(t.timeZone))), t.onValueChange(t.calendarDate);
  }), onChange: L(r.onChange, (d) => {
    if (ie(d.target.value)) {
      const h = d.target.value.split(w), [o, f, p] = E.map((C, A) => {
        const K = h[A];
        return {
          ...C,
          value: K
        };
      }).sort((C, A) => C.type === "year" ? 1 : A.type === "year" ? -1 : C.type === "month" ? 1 : A.type === "month" ? -1 : 0).map((C) => C.value), T = t.calendarDate.year;
      let M = t.calendarDate.year;
      if (p) {
        let C = p.length === 1 ? `0${p}` : p;
        M = p.length < 3 ? Number(`${T}`.slice(0, 4 - C.length) + C) : Number(C);
      }
      p && p.length < 3 && M > t.maxDate.year && (M -= 100);
      const v = t.calendarDate.set({ year: M }), $ = v.calendar.getMonthsInYear(v), O = v.set({
        month: f && Number(f) <= $ ? Number(f) : void 0
      }), Z = O.calendar.getDaysInMonth(O), q = O.set({
        day: o && Number(o) <= Z ? Number(o) : void 0
      });
      t.onCalendarDateChange(it(q, t.minDate, t.maxDate)), t.onTextValueChange(d.target.value);
    }
  }), onKeyDown: L(r.onKeyDown, (d) => {
    if (!t.open && (ie(d.key) || ["ArrowDown", "Backspace"].includes(d.key)))
      y();
    else if (["Tab"].includes(d.key) && t.open)
      d.preventDefault();
    else if (["Escape"].includes(d.key))
      t.open ? t.onOpenChange(!1) : (t.onValueChange(void 0), t.onTextValueChange("")), d.preventDefault();
    else if (t.open && ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(d.key))
      switch (d.preventDefault(), d.key) {
        case "ArrowDown": {
          const h = t.calendarDate.add({ weeks: 1 });
          if (t.maxDate && h.compare(t.maxDate) > 0)
            return;
          t.onCalendarDateChange(h);
          return;
        }
        case "ArrowRight": {
          const h = t.calendarDate.add({ days: 1 });
          if (t.maxDate && h.compare(t.maxDate) > 0)
            return;
          t.onCalendarDateChange(h);
          return;
        }
        case "ArrowUp": {
          const h = t.calendarDate.subtract({ weeks: 1 });
          if (t.minDate && h.compare(t.minDate) < 0)
            return;
          t.onCalendarDateChange(h);
          return;
        }
        case "ArrowLeft": {
          const h = t.calendarDate.subtract({ days: 1 });
          if (t.minDate && h.compare(t.minDate) < 0)
            return;
          t.onCalendarDateChange(h);
        }
      }
    else
      t.open && ["Enter"].includes(d.key) && (d.preventDefault(), a(m.format(t.calendarDate.toDate(t.timeZone))), t.onValueChange(t.calendarDate), t.onOpenChange(!1));
  }) });
});
function it(e, r, n) {
  return r && (e = X(e, r)), n && (e = H(e, n)), e;
}
const lt = I.input`
  width: 100%;
  font-size: ${14 / 16}rem;
  color: ${({ theme: e }) => e.colors.neutral800};
  height: 100%;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, st = "DatePickerContent", ct = c.forwardRef((e, r) => {
  const [n, t] = c.useState(), a = N(st);
  if (c.useLayoutEffect(() => {
    t(new DocumentFragment());
  }, []), !a.open) {
    const s = n;
    return s ? Le(i("div", { children: e.children }), s) : null;
  }
  return i(ut, { ...e, ref: r });
}), dt = "DatePickerContent", ut = c.forwardRef((e, r) => {
  const { label: n = "Choose date", ...t } = e, { onOpenChange: a, ...s } = N(dt), { x: g, y: u, reference: l, floating: b, strategy: x } = be({
    strategy: "fixed",
    placement: "bottom-start",
    middleware: [
      we({
        mainAxis: 4
      }),
      xe(),
      ke()
    ],
    whileElementsMounted: Te
  });
  c.useEffect(() => {
    const m = () => {
      a(!1);
    };
    return window.addEventListener("blur", m), window.addEventListener("resize", m), () => {
      window.removeEventListener("blur", m), window.removeEventListener("resize", m);
    };
  }, [a]), c.useLayoutEffect(() => {
    l(s.trigger);
  }, [l, s.trigger]);
  const y = Q(r, (m) => s.onContentChange(m), b);
  return Me(), i(Ne, { allowPinchZoom: !0, children: i(_e, {
    asChild: !0,
    // When focus is trapped, a focusout event may still happen.
    // We make sure we don't trigger our `onDismiss` in such case.
    onFocusOutside: (m) => {
      m.preventDefault();
    },
    onDismiss: () => {
      a(!1);
    },
    children: i(mt, { ref: y, "data-state": s.open ? "open" : "closed", onContextMenu: (m) => m.preventDefault(), id: s.contentId, role: "dialog", "aria-modal": "true", "aria-label": n, style: {
      left: g,
      top: u,
      position: x
    }, hasRadius: !0, background: "neutral0", padding: 1, ...t })
  }) });
}), mt = I(W)`
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  z-index: ${({ theme: e }) => e.zIndices[0]};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, ft = "DatePickerCalendar", pt = c.forwardRef(({ monthSelectLabel: e, yearSelectLabel: r, ...n }, t) => {
  const { locale: a, timeZone: s, minDate: g, maxDate: u, calendarDate: l, onCalendarDateChange: b } = N(ft), x = Pe(l), y = c.useMemo(() => {
    const o = g.year, f = u.year;
    return [...Array(f - o + 1).keys()].map((p) => (o + p).toString());
  }, [g, u]), m = S(a, { month: "long" }), k = c.useMemo(() => [...Array(l.calendar.getMonthsInYear(l)).keys()].map((o) => m.format(l.set({ month: o + 1 }).toDate(s))), [l, m, s]), w = S(a, { weekday: "short" }), E = c.useMemo(() => {
    let o = le(J(s), a);
    return [...new Array(7).keys()].map((f) => {
      let T = o.add({ days: f }).toDate(s);
      return w.format(T);
    });
  }, [s, a, w]), P = (o) => {
    if (typeof o == "number")
      return;
    const f = l.set({ month: k.indexOf(o) + 1 });
    b(f);
  }, d = (o) => {
    if (typeof o == "number")
      return;
    const f = l.set({ year: parseInt(o, 10) });
    b(f);
  }, h = ht(x, a);
  return F(U, { ref: t, direction: "column", alignItems: "stretch", padding: 4, ...n, children: [F(gt, { justifyContent: "flex-start", paddingBottom: 4, paddingLeft: 2, paddingRight: 2, gap: 2, children: [i(ne, { label: e, size: "S", value: k[l.month - 1], onChange: P, children: k.map((o) => i(ae, { value: o, children: o }, o)) }), i(ne, { size: "S", value: l.year.toString(), label: r, onChange: d, children: y.map((o) => i(ae, { value: o, children: o }, o)) })] }), F("table", { role: "grid", children: [i("thead", { "aria-hidden": !0, children: i("tr", { "aria-rowindex": 0, children: E.map((o, f) => i(Dt, { "aria-colindex": f, children: o }, o)) }) }), i("tbody", { children: [...new Array(6).keys()].map((o) => i("tr", { "aria-rowindex": o + 2, children: h(o).map((f, p) => f ? i(bt, { "aria-colindex": p + 1, date: f, startDate: x }, f.toString()) : i(de, { "aria-colindex": p + 1 })) }, o)) })] })] });
}), ht = (e, r) => (n) => {
  let t = e.add({ weeks: n }), a = [];
  t = le(t, r);
  let s = Ie(t, r);
  for (let g = 0; g < s; g++)
    a.push(null);
  for (; a.length < 7; ) {
    a.push(t);
    let g = t.add({ days: 1 });
    if (se(t, g))
      break;
    t = g;
  }
  for (; a.length < 7; )
    a.push(null);
  return a;
}, gt = I(U)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${(e) => e.theme.fontWeights.bold};

    ${B} {
      color: ${({ theme: e }) => e.colors.neutral800};
    }

    svg {
      > g,
      path {
        fill: ${({ theme: e }) => e.colors.neutral500};
      }
    }

    &:hover {
      background-color: ${({ theme: e }) => e.colors.neutral100};
    }
  }
`, Dt = c.forwardRef(({ children: e, ...r }, n) => i(yt, { as: "th", role: "gridcell", ref: n, ...r, height: `${24 / 16}rem`, width: `${32 / 16}rem`, children: i(B, { variant: "pi", fontWeight: "bold", color: "neutral800", children: e.slice(0, 2) }) })), yt = I(W)`
  border-radius: ${({ theme: e }) => e.borderRadius};
  text-transform: capitalize;
`, Ct = "DatePickerCalendarCell", bt = c.forwardRef(({ date: e, startDate: r, ...n }, t) => {
  const { timeZone: a, locale: s, calendarDate: g, onValueChange: u, onOpenChange: l, onTextValueChange: b, onCalendarDateChange: x } = N(Ct), y = se(g, e), m = S(s, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }), k = c.useMemo(() => m.format(e.toDate(a)), [m, e, a]), w = S(s, {
    day: "numeric",
    calendar: e.calendar.identifier
  }), E = c.useMemo(() => w.formatToParts(e.toDate(a)).find((f) => f.type === "day").value, [w, e, a]), P = S(s, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }), d = Ae(r), h = e.compare(r) < 0 || e.compare(d) > 0;
  let o = "neutral900";
  return y ? o = "primary600" : h && (o = "neutral600"), i(de, { as: "td", role: "gridcell", ref: t, "aria-selected": y, ...n, hasRadius: !0, "aria-label": k, tabIndex: y ? 0 : -1, background: y ? "primary100" : "neutral0", cursor: "pointer", onPointerDown: L(n.onPointerDown, (f) => {
    f.preventDefault(), x(e), u(e), b(P.format(e.toDate(a))), l(!1);
  }), children: i(B, { variant: "pi", textColor: o, children: E }) });
}), de = I(W)`
  text-align: center;
  padding: ${7 / 16}rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};

    & > ${B} {
      color: ${({ theme: e }) => e.colors.primary600};
    }
  }
`, wt = c.forwardRef((e, r) => {
  const { error: n, hint: t, id: a, required: s, label: g, ...u } = e, l = ce(a);
  return i(Ze, { error: n, hint: t, required: s, ref: r, id: l, children: F(U, { direction: "column", alignItems: "stretch", gap: 1, children: [i(qe, { children: g }), i(Xe, { id: l, error: n, required: s, ...u }), i(Ke, {}), i(Ge, {})] }) });
}), xt = Ye(console.warn), R = (e) => {
  if (typeof e == "string") {
    xt("It looks like you're passing a string as representation of a Date to the DatePicker. This is deprecated, look to passing a Date instead.");
    const t = Date.parse(e);
    Number.isNaN(t) ? e = /* @__PURE__ */ new Date() : e = new Date(t);
  }
  const r = e.toISOString(), n = Re(r, "UTC");
  return Se(n);
}, Xt = wt;
export {
  Xt as DatePicker,
  Xe as DatePickerInput
};
