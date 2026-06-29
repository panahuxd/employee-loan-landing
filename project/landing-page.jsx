/* Landing page — وام خرید ویژه کارکنان سازمان‌ها (Digikala Business × hAI DS).
 * One responsive component driven by a `device` prop (desktop|mobile) and a
 * theme (CSS vars). Built from the DS components: Button, Icon, Logo, Accordion. */
(function () {
  const DS = window.DigikalaBusinessDesignSystem_2b33ef || {};
  const { Button, Icon, Logo, Accordion, AccordionItem, AccordionTrigger, AccordionContent } = DS;

  // Measuring mode: replace image-slots with same-size divs so offscreen
  // height measurement is deterministic and we don't double-register slots.
  const MeasureCtx = React.createContext(false);
  const PageCtx = React.createContext({ device: "desktop", flags: {} });
  const usePage = () => React.useContext(PageCtx);

  // ---- one-time stylesheet --------------------------------------------------
  if (typeof document !== "undefined" && !document.getElementById("lp-styles")) {
    const css = `
.lp{direction:rtl;font-family:var(--font-sans);color:var(--foreground);background:#fff;
  width:100%;overflow:hidden;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}
.lp *{box-sizing:border-box;}
.lp-container{max-width:1200px;margin:0 auto;padding-inline:48px;}
.lp[data-device="mobile"] .lp-container{padding-inline:20px;}
.lp-section{padding-block:96px;}
.lp[data-device="mobile"] .lp-section{padding-block:56px;}

/* header */
.lp-header{padding-block:20px;background:var(--lp-hero-bg);}
.lp-header .lp-container{display:flex;align-items:center;justify-content:space-between;gap:16px;}
.lp[data-device="mobile"] .lp-header{padding-block:14px;}

/* hero */
.lp-hero{background:var(--lp-hero-bg);color:var(--lp-hero-fg);padding-block:64px 104px;}
.lp[data-device="mobile"] .lp-hero{padding-block:32px 56px;}
.lp-hero-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:56px;align-items:center;}
.lp[data-device="mobile"] .lp-hero-grid{grid-template-columns:1fr;gap:32px;}
.lp-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;
  color:var(--lp-accent);background:var(--lp-accent-soft);border-radius:999px;padding:7px 14px;
  letter-spacing:-.2px;margin-bottom:24px;}
.lp[data-hero="dark"] .lp-eyebrow{background:rgba(255,255,255,.12);color:#fff;}
.lp-h1{font-size:52px;line-height:1.16;font-weight:800;letter-spacing:-.6px;margin:0 0 20px;
  color:var(--lp-hero-fg);max-width:14ch;}
.lp[data-device="mobile"] .lp-h1{font-size:33px;line-height:1.2;max-width:none;}
.lp-lead{font-size:19px;line-height:1.85;color:var(--lp-hero-muted);margin:0 0 32px;max-width:46ch;font-weight:400;}
.lp[data-device="mobile"] .lp-lead{font-size:16px;line-height:1.8;margin-bottom:26px;}
.lp-hero-cta{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:30px;}
.lp[data-device="mobile"] .lp-hero-cta .dsb-btn{flex:1 1 auto;}
.lp-hero-trust{display:flex;gap:22px;flex-wrap:wrap;}
.lp-trust-item{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;
  color:var(--lp-hero-muted);}
.lp-trust-item .lp-check{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;
  border-radius:50%;background:var(--lp-accent);color:#fff;flex-shrink:0;}
.lp[data-hero="dark"] .lp-trust-item .lp-check{background:#fff;color:var(--lp-accent-ink);}
.lp-hero-media{position:relative;}
.lp-hero-media .lp-slot{width:100%;height:460px;}
.lp[data-device="mobile"] .lp-hero-media .lp-slot{height:280px;}
.lp-hero-badge{position:absolute;inset-block-end:-22px;inset-inline-start:-22px;background:var(--lp-card-bg);
  border:1px solid var(--lp-card-border);box-shadow:0 10px 30px rgba(0,0,0,.10);border-radius:14px;
  padding:14px 18px;display:flex;align-items:center;gap:12px;}
.lp[data-device="mobile"] .lp-hero-badge{inset-inline-start:12px;inset-block-end:-18px;padding:11px 14px;}
.lp-hero-badge .lp-hb-ico{width:40px;height:40px;border-radius:10px;background:var(--lp-accent-soft);
  color:var(--lp-accent-ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.lp-hero-badge .lp-hb-t{font-size:13px;color:var(--muted-foreground);line-height:1.4;}
.lp-hero-badge .lp-hb-n{font-size:16px;font-weight:700;color:var(--foreground);line-height:1.3;}

/* on-navy button recolouring */
.lp-onnavy .dsb-btn--default{background:#fff;color:var(--lp-accent-ink);}
.lp-onnavy .dsb-btn--default:hover{background:rgba(255,255,255,.88);}
.lp-onnavy .dsb-btn--outline{background:transparent;color:#fff;border-color:rgba(255,255,255,.5);box-shadow:none;}
.lp-onnavy .dsb-btn--outline:hover{background:rgba(255,255,255,.12);color:#fff;}

/* section heads */
.lp-head{max-width:680px;margin-bottom:48px;}
.lp-head.center{margin-inline:auto;text-align:center;}
.lp[data-device="mobile"] .lp-head{margin-bottom:32px;}
.lp-kicker{font-size:13px;font-weight:700;color:var(--lp-accent);letter-spacing:.2px;margin-bottom:12px;}
.lp-h2{font-size:36px;line-height:1.25;font-weight:800;letter-spacing:-.5px;margin:0;color:var(--foreground);}
.lp[data-device="mobile"] .lp-h2{font-size:26px;}
.lp-sub{font-size:18px;line-height:1.8;color:var(--muted-foreground);margin:16px 0 0;font-weight:400;}
.lp[data-device="mobile"] .lp-sub{font-size:15px;}

/* value cards */
.lp-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.lp[data-device="mobile"] .lp-grid-3{grid-template-columns:1fr;gap:16px;}
.lp-card{background:var(--lp-card-bg);border:1px solid var(--lp-card-border);box-shadow:var(--lp-card-shadow);
  border-radius:var(--lp-card-radius);padding:32px;}
.lp[data-device="mobile"] .lp-card{padding:24px;}
.lp-ico{width:52px;height:52px;border-radius:13px;background:var(--lp-icon-bg);color:var(--lp-icon-fg);
  display:flex;align-items:center;justify-content:center;margin-bottom:22px;}
.lp-card-t{font-size:20px;font-weight:700;margin:0 0 10px;color:var(--foreground);}
.lp-card-d{font-size:15px;line-height:1.85;color:var(--muted-foreground);margin:0;}

/* steps */
.lp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.lp[data-device="mobile"] .lp-steps{grid-template-columns:1fr;gap:16px;}
.lp-step{background:var(--lp-card-bg);border:1px solid var(--lp-card-border);box-shadow:var(--lp-card-shadow);
  border-radius:var(--lp-card-radius);padding:34px 32px 32px;position:relative;overflow:hidden;}
.lp[data-device="mobile"] .lp-step{padding:28px 26px;}
.lp-step-wm{position:absolute;inset-block-start:-12px;inset-inline-end:20px;font-size:108px;font-weight:800;
  line-height:1;color:var(--lp-accent-soft);pointer-events:none;user-select:none;font-variant-numeric:tabular-nums;}
.lp-step-ico{position:relative;width:54px;height:54px;border-radius:14px;background:var(--lp-icon-bg);
  color:var(--lp-icon-fg);display:flex;align-items:center;justify-content:center;margin-bottom:22px;}
.lp-step-label{position:relative;font-size:13px;font-weight:700;color:var(--lp-accent);margin:0 0 8px;}
.lp-step-t{position:relative;font-size:19px;font-weight:700;margin:0 0 10px;color:var(--foreground);}
.lp-step-d{position:relative;font-size:14.5px;line-height:1.85;color:var(--muted-foreground);margin:0;}
.lp-steps-cta{display:flex;justify-content:center;margin-top:44px;}
.lp[data-device="mobile"] .lp-steps-cta{margin-top:30px;}
.lp[data-device="mobile"] .lp-steps-cta .dsb-btn{width:100%;}

/* categories */
.lp-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.lp[data-device="mobile"] .lp-grid-4{grid-template-columns:1fr 1fr;gap:14px;}
.lp-cat{background:var(--lp-card-bg);border:1px solid var(--lp-card-border);box-shadow:var(--lp-card-shadow);
  border-radius:var(--lp-card-radius);padding:30px 24px;text-align:center;transition:transform .15s ease,box-shadow .15s ease;}
.lp-cat:hover{transform:translateY(-3px);}
.lp[data-device="mobile"] .lp-cat{padding:22px 14px;}
.lp-cat-ico{width:60px;height:60px;border-radius:16px;background:var(--lp-icon-bg);color:var(--lp-icon-fg);
  display:flex;align-items:center;justify-content:center;margin:0 auto 18px;}
.lp[data-device="mobile"] .lp-cat-ico{width:50px;height:50px;border-radius:14px;margin-bottom:14px;}
.lp-cat-t{font-size:16.5px;font-weight:700;color:var(--foreground);margin:0;}
.lp[data-device="mobile"] .lp-cat-t{font-size:14px;}

/* mechanism */
.lp-mech{display:grid;grid-template-columns:.92fr 1.08fr;gap:56px;align-items:center;}
.lp[data-device="mobile"] .lp-mech{grid-template-columns:1fr;gap:32px;}
.lp-mech-media .lp-slot{width:100%;height:380px;}
.lp[data-device="mobile"] .lp-mech-media .lp-slot{height:230px;}
.lp-timeline{position:relative;}
.lp-tl-item{position:relative;padding-inline-start:62px;padding-bottom:34px;}
.lp-tl-item:last-child{padding-bottom:0;}
.lp-tl-item::before{content:"";position:absolute;inset-inline-start:21px;inset-block-start:44px;bottom:-2px;
  width:2px;background:var(--lp-rule);}
.lp-tl-item:last-child::before{display:none;}
.lp-tl-num{position:absolute;inset-inline-start:0;inset-block-start:0;width:44px;height:44px;border-radius:50%;
  background:var(--lp-accent-soft);color:var(--lp-accent-ink);border:2px solid var(--lp-accent);
  display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;}
.lp-tl-t{font-size:17px;font-weight:700;margin:9px 0 0;color:var(--foreground);line-height:1.6;}

/* faq */
.lp-faq{max-width:780px;margin:0 auto;}
.lp-faq .dsb-acc__trigger{font-size:16.5px;font-weight:600;padding-block:22px;}
.lp-faq .dsb-acc__content{font-size:15px;line-height:1.95;color:var(--muted-foreground);}
.lp-faq .dsb-acc__item{border-color:var(--lp-rule);}

/* footer */
.lp-footer{background:var(--lp-footer-bg);color:var(--lp-footer-fg);}
.lp-foot-top{padding-block:22px;border-bottom:1px solid var(--lp-footer-border);}
.lp-foot-top .lp-container{display:flex;align-items:center;justify-content:space-between;gap:16px;}
.lp-foot-contact{padding-block:20px;border-bottom:1px solid var(--lp-footer-border);}
.lp-foot-contact .lp-container{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
.lp-foot-contact .lp-fc-main{display:inline-flex;align-items:center;gap:10px;font-weight:700;font-size:15px;}
.lp-foot-contact .lp-fc-phone{font-weight:800;letter-spacing:.3px;}
.lp-foot-contact .lp-fc-sep{width:1px;height:18px;background:var(--lp-footer-border);}
.lp-foot-contact .lp-fc-note{font-size:14px;color:var(--lp-footer-muted);}
.lp[data-device="mobile"] .lp-foot-contact .lp-fc-sep{display:none;}
.lp-foot-main{padding-block:44px;}
.lp-foot-main .lp-container{display:grid;grid-template-columns:1.6fr 1fr;gap:48px;}
.lp[data-device="mobile"] .lp-foot-main .lp-container{grid-template-columns:1fr;gap:36px;}
.lp-foot-h{font-size:16px;font-weight:800;margin:0 0 16px;}
.lp-foot-p{font-size:13.5px;line-height:2.1;color:var(--lp-footer-muted);margin:0 0 10px;max-width:62ch;}
.lp-foot-more{display:inline-flex;align-items:center;gap:6px;color:var(--lp-accent);font-weight:700;font-size:14px;margin-top:6px;}
.lp-social{display:flex;gap:12px;margin-bottom:26px;}
.lp-social a{width:42px;height:42px;border-radius:11px;border:1px solid var(--lp-footer-border);
  display:flex;align-items:center;justify-content:center;color:var(--lp-footer-muted);transition:all .15s ease;}
.lp-social a:hover{color:var(--lp-accent);border-color:var(--lp-accent);}
.lp-badges{display:flex;gap:12px;flex-wrap:wrap;}
.lp-badge-card{background:#fff;border:1px solid var(--lp-footer-border);border-radius:10px;padding:10px;
  width:104px;display:flex;flex-direction:column;align-items:center;gap:8px;}
.lp-badge-card .lp-slot{width:72px;height:72px;}
.lp-badge-card .lp-bc-t{font-size:10.5px;line-height:1.5;color:var(--lp-footer-muted);text-align:center;}
.lp-foot-copy{padding-block:22px;border-top:1px solid var(--lp-footer-border);}
.lp-foot-copy .lp-container{text-align:center;font-size:12.5px;line-height:2;color:var(--lp-footer-muted);}
`;
    const tag = document.createElement("style");
    tag.id = "lp-styles";
    tag.textContent = css;
    document.head.appendChild(tag);
  }

  // ---- Slot: image-slot, or sized div while measuring ----------------------
  function Slot({ id, placeholder, radius = 12, style }) {
    const measuring = React.useContext(MeasureCtx);
    if (measuring) return React.createElement("div", { className: "lp-slot", style, "aria-hidden": "true" });
    return React.createElement("image-slot", {
      id, placeholder, shape: "rounded", radius: String(radius), class: "lp-slot", style,
    });
  }

  function Section({ bg = "base", className = "", id, children }) {
    const { flags } = usePage();
    const style = { background: bg === "alt" ? "var(--lp-section-alt)" : "var(--background)" };
    if (flags.useDividers) style.borderTop = "1px solid var(--lp-rule)";
    return (
      <section id={id} className={"lp-section " + className} style={style}>
        <div className="lp-container">{children}</div>
      </section>
    );
  }

  // ---- sections -------------------------------------------------------------
  function Header() {
    const { flags, device } = usePage();
    return (
      <header className={"lp-header" + (flags.heroDark ? " lp-onnavy" : "")}>
        <div className="lp-container">
          <Logo variant="full" height={device === "mobile" ? 23 : 30} color={flags.heroDark ? "var(--lp-hero-fg)" : "var(--primary)"} />
          <Button variant="default" size="default">
            دریافت وام
            <Icon name="ArrowLeft" size={16} mirror={false} />
          </Button>
        </div>
      </header>
    );
  }

  function Hero() {
    const { flags } = usePage();
    return (
      <section className={"lp-hero" + (flags.heroDark ? " lp-onnavy" : "")}>
        <div className="lp-container">
          <div className="lp-hero-grid">
            <div className="lp-hero-copy">
              <span className="lp-eyebrow">
                <Icon name="BadgeCheck" size={15} /> ویژه کارکنان سازمان‌ها
              </span>
              <h1 className="lp-h1">وام خرید ویژه کارکنان سازمان‌ها</h1>
              <p className="lp-lead">
                با معرفی از طرف سازمان‌تان، فرآیند دریافت وام را به‌صورت آنلاین تکمیل کنید و
                از فروشگاه اختصاصی سازمان خود خرید کنید.
              </p>
              <div className="lp-hero-cta">
                <Button variant="default" size="lg">
                  دریافت وام
                  <Icon name="ArrowLeft" size={17} mirror={false} />
                </Button>
                <Button variant="outline" size="lg">مشاهده مراحل</Button>
              </div>
              <div className="lp-hero-trust">
                <span className="lp-trust-item"><span className="lp-check"><Icon name="Check" size={13} /></span> آنلاین و امن</span>
                <span className="lp-trust-item"><span className="lp-check"><Icon name="Check" size={13} /></span> بدون مراجعه حضوری</span>
              </div>
            </div>
            <div className="lp-hero-media">
              <Slot id="hero" placeholder="ترکیب محصولات لوازم خانگی برقی" radius={18} />
              <div className="lp-hero-badge">
                <span className="lp-hb-ico"><Icon name="Wallet" size={22} /></span>
                <span>
                  <span className="lp-hb-t">اعتبار خرید سازمانی</span><br />
                  <span className="lp-hb-n">فعال‌سازی آنلاین</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const VALUES = [
    { icon: "ShieldCheck", t: "آنلاین و امن", d: "ثبت‌نام و احراز هویت در محیط امن بانک و به‌صورت کاملاً آنلاین انجام می‌شود." },
    { icon: "MonitorSmartphone", t: "بدون مراجعه حضوری", d: "برای شروع فرآیند دریافت تسهیلات نیازی به مراجعه حضوری ندارید." },
    { icon: "Store", t: "قابل استفاده در فروشگاه سازمانی", d: "اعتبار فقط در فروشگاه یا پرتال اختصاصی سازمان شما قابل استفاده است." },
  ];

  function Values() {
    return (
      <Section bg="base">
        <div className="lp-head">
          <div className="lp-kicker">چرا این وام؟</div>
          <h2 className="lp-h2">یک مسیر ساده، امن و کاملاً آنلاین</h2>
        </div>
        <div className="lp-grid-3">
          {VALUES.map((v, i) => (
            <div className="lp-card" key={i}>
              <div className="lp-ico"><Icon name={v.icon} size={26} /></div>
              <h3 className="lp-card-t">{v.t}</h3>
              <p className="lp-card-d">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  const STEPS = [
    { icon: "Building2", t: "معرفی توسط سازمان", d: "اطلاعات شما از طرف سازمان‌تان برای دریافت وام معرفی می‌شود." },
    { icon: "FileCheck2", t: "ثبت‌نام و احراز هویت آنلاین", d: "فرایند ثبت‌نام و احراز هویت را در محیط امن بانک اقتصاد نوین تکمیل می‌کنید." },
    { icon: "ShoppingBag", t: "فعال‌سازی وام و خرید آسان", d: "پس از تایید بانک، وام شما فعال می‌شود و می‌توانید از فروشگاه اختصاصی سازمان خرید کنید." },
  ];

  function Steps() {
    const labels = ["اول", "دوم", "سوم"];
    return (
      <Section bg="alt">
        <div className="lp-head center">
          <div className="lp-kicker">شروع سریع</div>
          <h2 className="lp-h2">فقط در ۳ مرحله اعتبار خرید خود را فعال کنید</h2>
        </div>
        <div className="lp-steps">
          {STEPS.map((s, i) => (
            <div className="lp-step" key={i}>
              <span className="lp-step-wm">{["۱", "۲", "۳"][i]}</span>
              <div className="lp-step-ico"><Icon name={s.icon} size={26} /></div>
              <p className="lp-step-label">مرحله {labels[i]}</p>
              <h3 className="lp-step-t">{s.t}</h3>
              <p className="lp-step-d">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="lp-steps-cta">
          <Button variant="default" size="lg">
            شروع فرایند دریافت وام
            <Icon name="ArrowLeft" size={17} mirror={false} />
          </Button>
        </div>
      </Section>
    );
  }

  const CATS = [
    { icon: "ShoppingCart", t: "کالاهای سوپرمارکتی" },
    { icon: "Gem", t: "طلا و زیورآلات" },
    { icon: "Gift", t: "کارت هدیه" },
    { icon: "Laptop", t: "تجهیزات الکترونیک" },
  ];

  function Categories() {
    return (
      <Section bg="base">
        <div className="lp-head center">
          <div className="lp-kicker">فروشگاه اختصاصی سازمان</div>
          <h2 className="lp-h2">خرید کالاهای موردنیاز از فروشگاه اختصاصی سازمان شما</h2>
          <p className="lp-sub">مجموعه‌ای از کالاها و خدمات منتخب، متناسب با نیازهای کارکنان سازمان شما.</p>
        </div>
        <div className="lp-grid-4">
          {CATS.map((c, i) => (
            <div className="lp-cat" key={i}>
              <div className="lp-cat-ico"><Icon name={c.icon} size={28} /></div>
              <p className="lp-cat-t">{c.t}</p>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  const MECH = [
    "معرفی شما از طرف سازمان برای دریافت وام",
    "تکمیل ثبت‌نام و احراز هویت در محیط امن بانک",
    "فعال‌سازی وام در دیجی‌کالا بیزنس پس از تایید بانک",
    "خرید از فروشگاه اختصاصی سازمان و پرداخت اقساط در سررسیدهای مشخص",
  ];

  function Mechanism() {
    return (
      <Section bg="alt">
        <div className="lp-mech">
          <div className="lp-mech-media">
            <Slot id="mech" placeholder="ایلوستریشن: خرید اقساطی و بازپرداخت" radius={18} />
          </div>
          <div>
            <div className="lp-head" style={{ marginBottom: 28 }}>
              <div className="lp-kicker">سازوکار کامل</div>
              <h2 className="lp-h2">سازوکار استفاده از وام بانک اقتصاد نوین</h2>
            </div>
            <div className="lp-timeline">
              {MECH.map((m, i) => (
                <div className="lp-tl-item" key={i}>
                  <div className="lp-tl-num">{["۱", "۲", "۳", "۴"][i]}</div>
                  <p className="lp-tl-t">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  const FAQ = [
    { q: "چه کسانی می‌توانند از این وام استفاده کنند؟", a: "کارکنان سازمان‌هایی که با دیجی‌کالا بیزینس و بانک اقتصاد نوین همکاری دارند و از طرف سازمان خود برای دریافت وام معرفی شده‌اند." },
    { q: "آیا برای دریافت وام نیاز به مراجعه حضوری دارم؟", a: "خیر؛ تمام مراحل ثبت‌نام و احراز هویت به‌صورت کاملاً آنلاین و در محیط امن بانک اقتصاد نوین انجام می‌شود." },
    { q: "اعتبار وام را کجا می‌توانم استفاده کنم؟", a: "اعتبار تنها در فروشگاه یا پرتال اختصاصی سازمان شما در دیجی‌کالا بیزینس قابل استفاده است." },
    { q: "بازپرداخت وام چگونه انجام می‌شود؟", a: "بازپرداخت به‌صورت اقساطی و در سررسیدهای مشخص‌شده توسط بانک اقتصاد نوین انجام می‌شود." },
    { q: "چه کالاهایی را می‌توانم خریداری کنم؟", a: "کالاهای سوپرمارکتی، طلا و زیورآلات، کارت هدیه و تجهیزات الکترونیک از جمله دسته‌بندی‌های در دسترس هستند." },
  ];

  function Faq() {
    return (
      <Section bg="base">
        <div className="lp-head center">
          <div className="lp-kicker">پشتیبانی</div>
          <h2 className="lp-h2">سوالات متداول</h2>
        </div>
        <div className="lp-faq">
          <Accordion type="single" defaultValue="q0">
            {FAQ.map((f, i) => (
              <AccordionItem value={"q" + i} key={i}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    );
  }

  const SOCIAL = {
    aparat: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.9 6.2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM7.1 8.2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S5.6 10.53 5.6 9.7s.67-1.5 1.5-1.5zm0 5.1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm9.8 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 9.6c1.32 0 2.4 1.08 2.4 2.4s-1.08 2.4-2.4 2.4S9.6 13.32 9.6 12 10.68 9.6 12 9.6z",
    linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.67v7.94h2.67zM7 9.24a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.1v-4.36c0-2.33-1.24-3.41-2.9-3.41-1.34 0-1.94.74-2.27 1.26v-1.08h-2.67c.04.75 0 7.94 0 7.94h2.67v-4.43c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.35.73 1.35 1.8v4.25h2.64z",
    twitter: "M18.9 2.5h3.3l-7.2 8.2L23.5 21.5h-6.6l-5.2-6.8-5.9 6.8H2.5l7.7-8.8L1.3 2.5h6.8l4.7 6.2 5.3-6.2zm-1.2 17h1.8L7.3 4.4H5.4l12.3 15.1z",
    instagram: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.46 2.2 8.84 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.25-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.42-.36 1.04-.41 2.19C2.35 8.48 2.34 8.85 2.34 12s.01 3.52.07 4.76c.05 1.15.25 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.16 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.25 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.25-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.36-2.19-.41C15.52 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm6.28-2.01a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z",
  };

  function SocialIcon({ path }) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    );
  }

  function Footer() {
    const { flags } = usePage();
    return (
      <footer className={"lp-footer" + (flags.footerDark ? " lp-onnavy" : "")}>
        <div className="lp-foot-top">
          <div className="lp-container">
            <Button variant="outline" size="default">
              <Icon name="ChevronUp" size={16} /> بازگشت به بالا
            </Button>
            <Logo variant="full" height={28} color={flags.footerDark ? "var(--lp-footer-fg)" : "var(--primary)"} />
          </div>
        </div>
        <div className="lp-foot-contact">
          <div className="lp-container">
            <span className="lp-fc-main">
              <Icon name="Headphones" size={20} color="var(--lp-accent)" /> ارتباط با واحد فروش
              <span className="lp-fc-phone">۰۲۱ - ۶۱۹۳۰۰۰۰</span>
            </span>
            <span className="lp-fc-sep" />
            <span className="lp-fc-note">هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
          </div>
        </div>
        <div className="lp-foot-main">
          <div className="lp-container">
            <div>
              <h4 className="lp-foot-h">فروشگاه اینترنتی دیجی‌کالا بیزینس، خرید عمده آسان</h4>
              <p className="lp-foot-p">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای
                قیمت مناسب را در مدت‌زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
                ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست روی آن‌ها کار کرده است.
              </p>
              <p className="lp-foot-p">
                یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا این است که کالای خریداری‌شده چه زمانی به دستشان
                می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده در نظر گرفته است.
              </p>
              <a className="lp-foot-more" href="#">مشاهده بیشتر <Icon name="ChevronLeft" size={15} /></a>
            </div>
            <div>
              <h4 className="lp-foot-h">شبکه‌های اجتماعی</h4>
              <div className="lp-social">
                <a href="#" aria-label="آپارات"><SocialIcon path={SOCIAL.aparat} /></a>
                <a href="#" aria-label="لینکدین"><SocialIcon path={SOCIAL.linkedin} /></a>
                <a href="#" aria-label="توییتر"><SocialIcon path={SOCIAL.twitter} /></a>
                <a href="#" aria-label="اینستاگرام"><SocialIcon path={SOCIAL.instagram} /></a>
              </div>
              <div className="lp-badges">
                <div className="lp-badge-card"><Slot id="badge1" placeholder="نماد اعتماد" radius={8} /><span className="lp-bc-t">نماد اعتماد الکترونیکی</span></div>
                <div className="lp-badge-card"><Slot id="badge2" placeholder="اتحادیه" radius={8} /><span className="lp-bc-t">اتحادیه کسب‌وکارهای مجازی</span></div>
                <div className="lp-badge-card"><Slot id="badge3" placeholder="ساماندهی" radius={8} /><span className="lp-bc-t">ساماندهی</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lp-foot-copy">
          <div className="lp-container">
            استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
            کلیه حقوق این سایت متعلق به شرکت نوآوران فن‌آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.
          </div>
        </div>
      </footer>
    );
  }

  function LandingPage({ theme, device = "desktop", measuring = false }) {
    const flags = theme.flags || {};
    const rootStyle = { ...theme.vars };
    return (
      <MeasureCtx.Provider value={measuring}>
        <PageCtx.Provider value={{ device, flags }}>
          <div className="lp" data-device={device} data-hero={flags.heroDark ? "dark" : "light"} data-screen-label={(theme.label || "") + " · " + device} style={rootStyle}>
            <Header />
            <Hero />
            <Values />
            <Steps />
            <Categories />
            <Mechanism />
            <Faq />
            <Footer />
          </div>
        </PageCtx.Provider>
      </MeasureCtx.Provider>
    );
  }

  window.LandingPage = LandingPage;
})();
